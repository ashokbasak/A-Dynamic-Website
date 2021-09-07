const express = require('express');
const { stat } = require('fs');
const hbs = require('hbs');
const app = express();

require('./db/connect');
const port = process.env.PORT || 3000;
const path = require('path');
const User = require('./models/userentry');

const staticPath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.use(express.urlencoded({extended: false}));
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);


app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/aboutus', (req, res) =>{
    res.render('aboutus');
});

app.get('/mother', (req, res) =>{
    res.render('mother');
});

app.get('/auro', (req, res) =>{
    res.render('auro');
});

app.get('/youthcamp', (req, res) =>{
    res.render('youthcamp');
});

app.get('/darshan', (req, res) =>{
    res.render('darshan');
});

app.get('/swadhyay', (req, res) =>{
    res.render('swadhyay');
});

app.post('/contact', async (req, res) =>{
    try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render('index');
    }catch(error){
        res.status(500).send(error);
    }
    res.redirect('/');
})

app.listen(port, (req, res) =>{
    console.log(`Server is running on port ${port}`);
})



