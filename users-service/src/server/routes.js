import { User } from "../db/models"
import { generateUUID } from '../helpers/generateUUID'
import { hashPassword } from '../helpers/hashPassword'

export const setupRoutes = app => {
    app.post("/users", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid body!"))
        }

        try {
            const newUser = await User.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            })

            return res.json(newUser)
        } catch (error) {
            return next(error)
        }
    })
}