const express = require('express')
const app = express()
const port = 3000

app.length('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})