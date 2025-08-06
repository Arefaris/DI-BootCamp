import { db } from '../config/db.js';

export class Contributor {
    static async add({ storyId, userId }) {
        const [contributor] = await db('contributors')
            .insert({
                story_id: storyId,
                user_id: userId
            })
            .returning(['id', 'story_id', 'user_id', 'created_at']);
        return contributor;
    }

    static async findByStoryId(storyId) {
        const contributors = await db('contributors')
            .join('users', 'contributors.user_id', 'users.id')
            .where('contributors.story_id', storyId)
            .select(
                'contributors.id',
                'contributors.story_id',
                'users.id as user_id',
                'users.username',
                'users.email',
                'contributors.created_at'
            );
        return contributors;
    }

    static async remove(id) {
        const result = await db('contributors').where({ id }).del();
        return result > 0;
    }

    static async exists(storyId, userId) {
        const contributor = await db('contributors')
            .where({ story_id: storyId, user_id: userId })
            .first();
        return !!contributor;
    }
}