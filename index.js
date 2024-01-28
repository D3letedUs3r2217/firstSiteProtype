const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://luciomessias2019:hGYUrJbAbiFAHpa8@first-api.qkcgcvj.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    age: Number,

})



const port = 5555

app.post('/', async (req,res)=>{
    const userr = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
})

await userr.save()
    res.send(userr)
})

app.get('/', async (req,res)=>{
    const users = await User.find()
    return res.send(users)
})

app.put('/:id', async (req,res)=>{
 const userup = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age
 }, {
    new: true
 })
 return res.send(userup)
})


app.delete('/:id', async (req,res)=>{
    const Deluser = await User.findByIdAndDelete(req.params.id)
        return res.send(Deluser)
})




app.listen(port, ()=>{

    console.log('conected!')
})








