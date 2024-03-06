import express from "express"
import { getResults } from "./controllers/results.js"
import cors from "cors"
import getTournaments from "./utils/getTournaments.js"

const app = express()

app.use(cors())

app.get("/results", getResults)

app.get("/tournaments/:team/:years", getTournaments)

app.use(express.json())

app.listen(5000, () => console.log("Server up on port " + 5000))
