const express = require('express')
const path=require('path')
const app = express()
const multer=require('multer')
const merge1=require('./mergepdf')
const upload=multer({dest:'uploads/'})
app.use('/static', express.static('public'))
app.use('/static',express.static('src'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"src/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async function (req, res, next) {
 let d=await merge1(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
 res.redirect(`http://localhost:3000/static/${d}`)
 next()
})

app.listen(port, () => {
  console.log(`PDF MERGER app listening on port ${port}`)
})