import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export const db = knex({
    client: "pg",
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false}
    }
})

