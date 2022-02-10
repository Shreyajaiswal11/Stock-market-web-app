import express from 'express';
import { engine } from 'express-handlebars';
const app=express();


const PORT=process.env.PORT || 3000;

//set static folder
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));

//set handlebar middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//set handlebar routes
app.get('/sj', (req, res) => {
    res.render('home',{
    shreya:"this is shrey'a stuff,dont touch"
    });
});

app.listen(PORT,(res,req) =>{
    console.log(`listing to ${PORT}`)
})