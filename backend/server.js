const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const { uuid } = require('uuidv4');
const cors = require('cors')

app.use(cors());


//get all user names
app.get('/api', (req, res) => {
    res.send(JSON.stringify(getAllUsernames()))
})

//get user's tasks
app.get('/api/:username', (req, res) => {
    let user = req.params.username;
    res.send(JSON.stringify(getUserTasks(user)))
})

//add new user
app.post('/api/:username', (req, res) => {
    console.log('post request made');
    let user = req.params.username;
    console.log('new username: ' + user)
    addNewUser(user);
    res.send('New user added: ' + user)
})

//add new task
app.post('/api/:username', (req, res) => {
    let username = req.params.username;
    const task = req.body;
    addTask(username, task)
})

//update user's task
app.put('/api/:username/:id', (req, res) => {
    const username = req.params.username;
    const id = req.params.id;
    const updatedTask = req.body;
    updateTask(username, id, updatedTask)
})

//delete user's task
app.delete('/api/:username/:id', (req, res) => {
    const username = req.params.username;
    const id = req.params.id;
    deleteTask(username, id);
})



//Utiility functions
function getAllUsernames() {
    try {
        let namesArr = fs.readdirSync('./users', {withFileTypes: false});
        for (let i = 0; i < namesArr.length; i++) {
            namesArr[i] = namesArr[i].replace('.json', ''); //removes .json extention from username
        }
        return namesArr
    } catch(e) {
        return null
    }   
}
// create new user
function addNewUser(username) {
    try {
        fs.writeFileSync('users/' + username + '.json', "[]")
    } catch(e) {
        return null;
    }
}

function getUserTasks(username) {
    try {
        const content = fs.readFileSync('users/' + username + '.json')
        return JSON.parse(content)
    } catch(e) {
        return null
    }
}

function addTask(username, task) {
    const userTasks = getUserTasks(username);
    const newID = uuid();
    const newTask = {
        id : newID,
        task: task.task,
        detail: task.detail,
        priority: task.priority,
        createdAt: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        updatedAt: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
    }
    userTasks.push(newTask)
    fs.writeFileSync('users/' + username + '.json', JSON.stringify(userTasks))
}

function deleteTask(username, id) {
    const userTasks = getUserTasks(username);
    for (let i = 0; i < userTask.length; i++) {
        if (userTasks[i].id === id) {
            userTask.splice(i, 1)
            fs.writeFileSync('users/' + username + '.json', JSON.stringify(userTask))
            return true;
        }  
    }
    return '';
}

function updateTask(username, id, updatedTask) {
    const userTasks = getUserTasks(username)
    for (let task of userTasks) {
        if (task.id === id) {
            task['task'] = updatedTask.country;
            task['detail'] = updatedTask.detail;
            task['priority'] = updatedTask.priority;
            task['updatedAt'] = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
            fs.writeFileSync('users/' + username + '.json', JSON.stringify(userTasks));
            return true;
        }
    }
    return 'Task does not exist'
}

app.listen(port, () => {
    console.log(`Server.js listening at http://localhost:${port}`)
})