import { Contributor } from '../models/Contributor.js';
import { Story } from '../models/Story.js';
import { User } from '../models/User.js';
import { db } from '../config/db.js';

export const addContributor = async (req, res) => {
    try {
        const { story_id, user_id } = req.body;
        const currentUserId = req.user.id;

        if (!story_id || !user_id) {
            return res.status(400).json({ message: 'Story ID and User ID are required' });
        }

        const isAuthor = await Story.isAuthor(story_id, currentUserId);
        if (!isAuthor) {
            return res.status(403).json({ message: 'Only the story author can add contributors' });
        }

        const userExists = await User.findById(user_id);
        if (!userExists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const alreadyContributor = await Contributor.exists(story_id, user_id);
        if (alreadyContributor) {
            return res.status(400).json({ message: 'User is already a contributor to this story' });
        }

        const contributor = await Contributor.add({ storyId: story_id, userId: user_id });
        res.status(201).json({
            message: 'Contributor added successfully',
            contributor
        });
    } catch (error) {
        console.error('Add contributor error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getContributors = async (req, res) => {
    try {
        const { story_id } = req.params;

        const contributors = await Contributor.findByStoryId(story_id);
        res.json(contributors);
    } catch (error) {
        console.error('Get contributors error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const removeContributor = async (req, res) => {
    try {
        const { id } = req.params;
        const currentUserId = req.user.id;

        const contributor = await db('contributors')
            .join('stories', 'contributors.story_id', 'stories.id')
            .where('contributors.id', id)
            .select('contributors.*', 'stories.author_id')
            .first();

        if (!contributor) {
            return res.status(404).json({ message: 'Contributor not found' });
        }

        if (contributor.author_id !== currentUserId) {
            return res.status(403).json({ message: 'Only the story author can remove contributors' });
        }

        const removed = await Contributor.remove(id);
        if (!removed) {
            return res.status(404).json({ message: 'Contributor not found' });
        }

        res.json({ message: 'Contributor removed successfully' });
    } catch (error) {
        console.error('Remove contributor error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};