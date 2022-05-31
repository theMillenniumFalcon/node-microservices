import express from 'express'
import cluster from 'cluster'
import { users, threads, posts } from './database.js'
import os from 'os'
const PORT = 4000
const app = express()

const numCPUs = os.cpus().length

if (cluster.isPrimary) {
    console.log(`Leader ${process.pid} is running`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
} else {
    app.get('/', (_, res) => {
        res.send("Server is working fine!")
    })

    app.get('/api', (_, res) => {
        res.send("API ready to receive requests")
    })

    app.get('/api/users', (_, res) => {
        res.send({ users })
    })

    app.get('/api/users/:userId', (req, _) => {
        const id = parseInt(req.params.userId)
        req.body = users.find((user) => user.id == id)
    })

    app.get('/api/threads', (_, res) => {
        res.send({ threads })
    })

    app.get('/api/threads/:threadId', (req, _) => {
        const id = parseInt(req.params.threadId)
        req.body = threads.find((thread) => thread.id == id)
    })

    app.get('/api/posts/in-thread/:threadId', (req, _) => {
        const id = parseInt(req.params.threadId)
        req.body = posts.filter((post) => post.thread == id)
    })

    app.get('/api/posts/in-user/:userId', (req, _) => {
        const id = parseInt(req.params.userId)
        req.body = posts.filter((post) => post.user == id)
    })

    const server = app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
    process.on('unhandledRejection', (err, _) => {
        console.log(`Logged Error: ${err}`)
        server.close(() => process.exit(1))
    })

    console.log(`Worker ${process.pid} started`)
}

