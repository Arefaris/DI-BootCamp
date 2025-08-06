import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { getAllStories, createStory, updateStory, deleteStory } from '../controllers/storyController.js';

const router = express.Router();

router.get('/', authenticateToken, getAllStories);
router.post('/', authenticateToken, createStory);
router.patch('/:id', authenticateToken, updateStory);
router.delete('/:id', authenticateToken, deleteStory);

export default router;