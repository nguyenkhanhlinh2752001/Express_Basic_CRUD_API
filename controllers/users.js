import { v4 as uuidv4 } from 'uuid'
let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({...user, id: uuidv4() })
    res.send(`User with name ${user.name} added to DB`)
}

export const getUser = (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with id ${id} removed from DB`)
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { name, age, from } = req.body
    const user = users.find((user) => user.id === id)
    if (name) {
        user.name = name
    }
    if (age) {
        user.age = age
    }
    if (from) {
        user.from = from
    }
    res.send(`User with id ${id} has been updated`)
}