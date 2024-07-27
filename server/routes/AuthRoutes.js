import { Router } from "express"
import { signup, login, getUserInfo, test} from "../controllers/AuthController.js"
import { verifyToken } from "../middlewares/AuthMiddleware.js"

const authRoutes = Router()

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.get('/user-info', verifyToken, getUserInfo)
authRoutes.get("/test", test)

export default authRoutes