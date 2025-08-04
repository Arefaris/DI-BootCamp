const { db } = require('../config/db.js')
const bcrypt = require('bcrypt')


module.exports = {
    createUser: async (password, email) => {
        const trx = await db.transaction()
        try {
            const hashPassword = await bcrypt.hash(password + "", 10)
            const [user] = await trx('user').insert({
                email: email.toLowerCase(),
                password: hashPassword
            }, ["email", "id"])
            await trx.commit()
            return user

        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
}