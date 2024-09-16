import User from "../models/user.model.js"

const RegisterUser = async (req, res) => {
    try {
        const { username, email, fullName, password } = req.body
        const data = new User({ username, email, fullName, password })
        const response = await data.save()
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        console.log("error in post req of user", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export { RegisterUser }
