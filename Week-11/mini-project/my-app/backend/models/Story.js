import { db } from '../config/db.js';

export class Story {
    static async create({ title, content, authorId }) {
        const [story] = await db('stories')
            .insert({
                title,
                content,
                author_id: authorId
            })
            .returning(['id', 'title', 'content', 'author_id', 'created_at', 'updated_at']);
        return story;
    }

    static async findAll() {
        const stories = await db('stories')
            .join('users', 'stories.author_id', 'users.id')
            .select(
                'stories.id',
                'stories.title',
                'stories.content',
                'stories.created_at',
                'stories.updated_at',
                'users.username as author_name',
                'users.id as author_id'
            )
            .orderBy('stories.created_at', 'desc');
        return stories;
    }

    static async findById(id) {
        const story = await db('stories')
            .join('users', 'stories.author_id', 'users.id')
            .where('stories.id', id)
            .select(
                'stories.id',
                'stories.title',
                'stories.content',
                'stories.created_at',
                'stories.updated_at',
                'users.username as author_name',
                'users.id as author_id'
            )
            .first();
        return story;
    }

    static async update(id, { title, content }) {
        const [story] = await db('stories')
            .where({ id })
            .update({ 
                title, 
                content,
                updated_at: db.fn.now()
            })
            .returning(['id', 'title', 'content', 'author_id', 'updated_at']);
        return story;
    }

    static async delete(id) {
        const result = await db('stories').where({ id }).del();
        return result > 0;
    }

    static async isAuthorOrContributor(storyId, userId) {
        const story = await db('stories').where({ id: storyId }).first();
        if (!story) return false;
        
        if (story.author_id === userId) return true;
        
        const contributor = await db('contributors')
            .where({ story_id: storyId, user_id: userId })
            .first();
        
        return !!contributor;
    }

    static async isAuthor(storyId, userId) {
        const story = await db('stories').where({ id: storyId }).first();
        return story && story.author_id === userId;
    }
}