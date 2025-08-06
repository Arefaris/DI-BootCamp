import { db } from './db.js';

const createTables = async () => {
    try {
        await db.schema.dropTableIfExists('contributors');
        await db.schema.dropTableIfExists('stories');
        await db.schema.dropTableIfExists('users');
        
        await db.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('username', 50).notNullable().unique();
            table.string('email', 100).notNullable().unique();
            table.string('password', 255).notNullable();
            table.timestamps(true, true);
        });

        await db.schema.createTable('stories', (table) => {
            table.increments('id').primary();
            table.string('title', 200).notNullable();
            table.text('content').notNullable();
            table.integer('author_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
            table.timestamps(true, true);
        });

        await db.schema.createTable('contributors', (table) => {
            table.increments('id').primary();
            table.integer('story_id').unsigned().notNullable().references('id').inTable('stories').onDelete('CASCADE');
            table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
            table.unique(['story_id', 'user_id']);
            table.timestamps(true, true);
        });

        console.log('✅ Tables created successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating tables:', error);
        process.exit(1);
    }
};

createTables();