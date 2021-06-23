import express from 'express'
const router = express.Router()
import { loginUser, getUsers, registerUser } from '../controllers/userController.js'



router.route('/').post(registerUser).get(getUsers)
router.post('/login', loginUser)


export default router
