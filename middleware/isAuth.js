import jwt from "jsonwebtoken"

export const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized access." })
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({ message: "Access denied." });
        }
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Unauthorized access." });
    }
}