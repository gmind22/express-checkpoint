import express from 'express'


const app = express()
const PORT = process.env.PORT || 8000
app.set('views', './views')
app.set('view engine', 'pug')

app.get("/", (req, res) => {
    res.render('home', {image: './image.jpg'})
})

app.get("/services", (req, res) => {
    res.render('services')
})

app.get("/contact", (req, res) => {
    res.render('contact')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})