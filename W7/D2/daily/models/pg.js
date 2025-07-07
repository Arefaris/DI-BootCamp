import knex from "knex"

export const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        database: "postgres",
        password: "admin",
    }
})