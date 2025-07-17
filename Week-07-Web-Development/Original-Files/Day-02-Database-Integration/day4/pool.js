import { Pool } from "pg";
import dotenv from "dotenv"

dotenv.config()

const {PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD} = process.env

const pool = new Pool({
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false }
})

const result = await pool.query('SELECT * FROM PRODUCTS WHERE id=$1', [20])

console.log(result.rows)