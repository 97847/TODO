# TODO
This is the project is about to add todo api using express and node js
I created a request POST,GET,DELETE,PATCH using postman
I add todo activites through postman which is  stored in my mongodb campus database
the foolowing request i made:
****get all todo actvites
****post/add todo activites
**** get single todo activites through id
**** update todo activites through id
**** delete todo activites through id


*****************HOW TO START THE SERVER **************************************
TO Starting the server i used express js which i installed on my project than 
simply run this code for using your own port no
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Server run succesfuuly!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
