import User from "../model/user.js";


export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Oops! Something went wrong.' });
    }
}