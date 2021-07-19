const express = require('express')
const app = express()

app.use(express.json())
app.post('/stdout', (req, res) => {
    console.log(req.body)
    res.send('SUCCESS')
})
app.listen(3000, () => console.log('Server ready'))