require('dotenv').config()
const express = require('express')
const server = express()


console.log(process.env.LANG) //! secerts in env  LANG=en_US.UTF-8 
console.log(process.env.OS) //! OS=Windows_NT

if(process.env.NODE_ENV === 'production'){
    console.log('this means the code is deployed ')
}

const PORT = process.env.PORT || 5000
console.log('port is on ->', PORT)

server.get('/api', (req, res) => {
    res.json({
        message: `${process.env.COHORT} is the shit`
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})