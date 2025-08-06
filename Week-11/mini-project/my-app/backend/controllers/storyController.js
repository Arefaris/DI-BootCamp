import { Story } from '../models/Story.js';

export const getAllStories = async (req, res) => {
    try {
        const stories = await Story.findAll();
        res.json(stories);
    } catch (error) {
        console.error('Get stories error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createStory = async (req, res) => {
    try {
        const { title, content } = req.body;
        const authorId = req.user.id;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const story = await Story.create({ title, content, authorId });
        res.status(201).json({
            message: 'Story created successfully',
            story
        });
    } catch (error) {
        console.error('Create story error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateStory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const userId = req.user.id;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const canEdit = await Story.isAuthorOrContributor(id, userId);
        if (!canEdit) {
            return res.status(403).json({ message: 'You are not authorized to edit this story' });
        }

        const story = await Story.update(id, { title, content });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }

        res.json({
            message: 'Story updated successfully',
            story
        });
    } catch (error) {
        console.error('Update story error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteStory = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const isAuthor = await Story.isAuthor(id, userId);
        if (!isAuthor) {
            return res.status(403).json({ message: 'Only the author can delete this story' });
        }

        const deleted = await Story.delete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Story not found' });
        }

        res.json({ message: 'Story deleted successfully' });
    } catch (error) {
        console.error('Delete story error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};