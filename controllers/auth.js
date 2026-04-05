import generateToken from "../helper/token.js";
import User from "../model/user.js";


export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            await User.create({
                name, email
            })
        }
                console.log('user -> ',user)

        const token = await generateToken(user._id);
        res.cookie("token", token, {
            http: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Oops! Something went wrong.' });

    }
}

export const userLogout = async (req, res) => {
    try {
        await res.clearCookie("token");
        return res.status(200).json({ message: "Logout successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Oops! Something went wrong.' });
    }
}

