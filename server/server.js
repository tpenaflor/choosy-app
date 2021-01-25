const express = require('express')
const app = express()
const path = require('path')
const pubPath = path.join(__dirname, "..", "public")
const port = process.env.PORT || 3000

app.use(express.static(pubPath))
app.get('*', (req, res ) => {
    res.sendFile(path.join(pubPath,"index.html"));
})

app.listen(port, ()=>{console.log('i am up')})