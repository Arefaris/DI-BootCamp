import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.js';
import storyRoutes from './routes/stories.js';
import contributorRoutes from './routes/contributors.js';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'Collaborative Storytelling API is running!' });
});

app.use('/', authRoutes);
app.use('/stories', storyRoutes);
app.use('/contributors', contributorRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});