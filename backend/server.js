import express from "express"
import "dotenv/config"
import cors from "cors"
import dns from "node:dns"
import { clerkMiddleware } from '@clerk/express'

import connectDB from "./configs/db.js"
import ClerkWebhooks from "./controllers/clerkWebhooks.js"

dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"])

const app = express()
app.use(cors())

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

//api to listen to clerk webhooks
app.use("/api/clerk", ClerkWebhooks)

app.get("/", (req, res) => {
  res.send("API is working")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

connectDB()