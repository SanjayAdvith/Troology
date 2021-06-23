import express from 'express'
const router = express.Router()
import { loginUser, getUserProfile, getUsers, registerUser } from '../controllers/userController.js'

import { admin, protect } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login', loginUser)
router.route('/profile').get(protect, getUserProfile) //validating with JWT 


export default router
