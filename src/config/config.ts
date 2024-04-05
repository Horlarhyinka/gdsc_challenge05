import dotenv from "dotenv"

dotenv.config()

const db = {
    uri: process.env.DB_URI || "mongodb://localhost:27017/gdsc"
}

export default {db}