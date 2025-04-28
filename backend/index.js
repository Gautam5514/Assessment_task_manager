import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();
const app = express();

// connect to MongoDB
dotenv.config();
connectDB(); 

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch((err) => console.error(err));
