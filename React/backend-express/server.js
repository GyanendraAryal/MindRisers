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
let works = [{ id: 1, title: "Apple", description: "I'm description", isChecked: true },
{ id: 2, title: "Orange", description: "I'm second description", isChecked: false }]

app.post('/api/todo', (req, res) => {
    const newTodo = req.body;
    // console.log(req.body);

    if (!newTodo.id) {
        newTodo.id = Date.now()
    }
    works.push(newTodo)
    res.status(200).json({
        success: true,
        message: 'Todo created sucessfully',
        receivedData: newTodo
    });
})

//Edit api
app.put('/api/todo', (req, res) => {
    console.log(req.body.title)

    const { id, title, isChecked } = req.body
    
    const todo = works.find((work) => work.id == id)
    if (!todo) {
        res.status(404).json({
            success: false,
            message:"Todo not found"
        })
    }

    if (todo.title !== undefined) {
        todo.title = title
    }

    if (isChecked !== undefined) {
        todo.isChecked = isChecked
    }

    res.send({
        success: true,
        message: "Todo update sucessfully"
    })

})

app.delete('/api/todo', (req, res) => {
    // console.log("Item deleted");
    const targetId = req.body.id
    // console.log(req.body.id)

    const initialLength = works.length
    works = works.filter((work) => work.id != targetId)

    if (works.length === initialLength) {
        return res.send({
            success: false,
            message: "Item not found in db"
        })
    }

    res.send({
        success: true,
        message: "Item deleted"
    })

})


app.get('/api/todo', (req, res) => {
    res.send(works)
})

app.listen(PORT, () => {
    console.log(`Server runnning on port: ${PORT}`);
})