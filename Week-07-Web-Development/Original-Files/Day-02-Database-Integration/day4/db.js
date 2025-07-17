import knex from "knex";

import dotenv from "dotenv"

dotenv.config()

const {PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD} = process.env

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

try {
  /** raw */
  //   const { rows } = await db.raw(
  //     // "select id, name, price from products where id = ?",
  //     // [9]
  //     "insert into products (name,price) values (?,?), (?,?)",
  //     ["aaa", 111, "bbb", 222]
  //   );

  /** delete */
  //   const rows = await db("products").del().where("id", ">", 10).returning("*");
  /** update */

  //   const rows = await db("products")
  //     .update({ name: "iPad17" }, ["id", "name", "price"])
  //     .where({ id: 8 });

  /** insert */
  //   const rows = await db("products").insert(
  //     [
  //       { name: "iPad15", price: 1616 },
  //       { name: "iPad16", price: 1515 },
  //     ],
  //     ["id"]
  //   );
  // .returning(["id", "name"]);

  /** select */
  const rows = await db("products")
    //   .where("id", ">=", 10)
    .select("*");
  //   .orderBy("name")
  //     // .from("products");
  console.log(rows);
} catch (e) {
  console.log(e);
}


/** TRANSACTIONS */

const trx = await db.transaction()

try {

  const [products] = await db('products')
  .insert({name: "fff", price: 666}, ['id', 'name', 'price'])
  .transacting(trx)

  const [products2] = await db('products')
  .insert({name: "dddd", price: 777}, ['id', 'name', 'price'])
  .transacting(trx)

  await trx.commit()
}catch (error){

  console.log(error)
  await trx.rollback()
}