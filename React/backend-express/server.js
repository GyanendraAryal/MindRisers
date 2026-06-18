const dotenv = require('dotenv')
dotenv.config({
    path: './.env'
})
const express = require('express')
const cors = require('cors')
// console.log(express);

const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    // console.log("I'm the home page");
    res.send("I'm from home page")
})

// app.get('/api/todos', (req, res) => {
//     // console.log("I'm the home page");
//     // console.log(res);

//     res.send(["html", "csss", "python"])
// })
const works = [{ id: 1, title: "Apple", description: "I'm description", isCompleted: true },
{ id: 2, title: "Orange", description: "I'm second description", isCompleted: false }]

app.post('/api/todo', (req, res) => {
    const newTodo = req.body;
    works.push(newTodo)
    res.status(200).json({
        success: true,
        message: 'Todo received sucessfully',
        receivedData: newTodo
    });
})


app.get('/api/todo', (req, res) => {
    res.send(works)
})

app.listen(PORT, () => {
    console.log(`Server runnning on port: ${PORT}`);
})