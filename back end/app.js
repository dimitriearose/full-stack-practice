const express = require('express')
const dotenv = require('dotenv')

dotenv.config()


const users = [
    {
        name: 'William',
        age: 19,
        id:1
    },
    {
        name: 'Dimitri',
        age: 19,
        id:1

    }
]

const app = express()
app.use(express.json())


app.get('/',(req,res) => {
    res.send(users)
})

app.post('/',(req,res) => {
    const {age,name} = req.body

    const newUser = {age,name}

    users.push(newUser)

    res.status(201).send(newUser)
})


app.listen(process.env.PORT,() => {
    console.log(process.env.PORT)
})

