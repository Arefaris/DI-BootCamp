import { db } from '../config/db.js';
import bcrypt from 'bcrypt';

export class User {
    static async create({ username, email, password }) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [user] = await db('users')
            .insert({
                username,
                email,
                password: hashedPassword
            })
            .returning(['id', 'username', 'email', 'created_at']);
        return user;
    }

    static async findByEmail(email) {
        const user = await db('users').where({ email }).first();
        return user;
    }

    static async findById(id) {
        const user = await db('users')
            .where({ id })
            .select('id', 'username', 'email', 'created_at')
            .first();
        return user;
    }

    static async validatePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}