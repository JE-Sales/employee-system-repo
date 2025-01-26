import express from 'express';

import { getAllUsers } from '../controllers/users';

const router = express.Router();

export default (router: express.Router) => {
    router.get('/users', getAllUsers)
}