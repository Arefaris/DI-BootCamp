import knex from "knex"

const db = knex({
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
try{

    //raw
    //                                                       //binding
    // const s = await db.raw('select * from products where id = ?', [9])
    // console.log(s)

    // const ss = await db.raw('insert into products (name, price) values (?, ?), (?, ?)', ['aaa', 111, ])
    // console.log(ss)
    // // update 
    // const ows = await db('products')
    // .update({name: "iphone 15"})
    // .where({id: 2})
    // dont use * in production
    // select
    // const rows = await db
    // .select('*')
    // .from('products')
    // .where({id:1, name: "Product 100"})
    // .orderBy("name")
    // console.log(rows)

    //delete 
    // const os = await db('products').del()
    // .where('id', '>', 10)
    // .returning('*')

    // //insert 
    // const rows = await db('products')
    // .insert([{name: 'iphone', price: 999}, 
    //     {name: 'iphone 15', price: 99}], ["id"])
    // .returning(['id', 'name'])
    // console.log(rows)

    const rows = await db("products")
    .select("*");
    console.log(rows)

}catch(e){
    console.log(e)
}

