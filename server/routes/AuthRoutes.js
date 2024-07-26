import { Router } from "express"
import { signup, login, test} from "../controllers/AuthController.js"

const authRoutes = Router()

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.get("/test", test)

export default authRoutes