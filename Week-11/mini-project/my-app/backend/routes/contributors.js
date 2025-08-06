import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { addContributor, getContributors, removeContributor } from '../controllers/contributorController.js';

const router = express.Router();

router.post('/', authenticateToken, addContributor);
router.get('/:story_id', authenticateToken, getContributors);
router.delete('/:id', authenticateToken, removeContributor);

export default router;