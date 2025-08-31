import express from 'express';
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { 
    items: [
      { name: 'Coffee', price: 10.00 },
      { name: 'Tea', price: 5.00 },
      { name: 'Juice', price: 7.50 }
    ] 
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`)
})