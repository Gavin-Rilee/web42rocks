require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))


console.log(process.env.LANG) //! secerts in env  LANG=en_US.UTF-8 
console.log(process.env.OS) //! OS=Windows_NT

if(process.env.NODE_ENV === 'production'){
    console.log('this means the code is deployed ')
}

const PORT = process.env.PORT || 5000

console.log('port is on ->', PORT)

server.get('/', (req,res) => {
    //! sending back index.html
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})


server.get('/api', (req, res) => {
    res.json({
        message: `${process.env.COHORT} is the best`
    })
})

server.use((req, res) => {
    res.status(404).json({
        message: `something is very wrong here`
    })                                                                           
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})