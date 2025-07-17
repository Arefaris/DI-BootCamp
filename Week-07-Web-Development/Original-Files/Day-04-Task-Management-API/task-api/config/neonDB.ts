import knex from "knex";
import dotenv from "dotenv"
dotenv.config()

const { PGHOST, PGDATABASE, PGPASSWORD, PGUSER } = process.env;

if (!PGHOST || !PGDATABASE || !PGPASSWORD ||!PGUSER) {
    throw new Error("Provide database details in your .env file")
}

export const db = knex({
    client: "pg",
    connection: {
        host: PGHOST,
        port: Number(process.env.PORT || 5432),
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false}
    }
}
    
)