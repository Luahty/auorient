const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ error: "Không có token truy cập" });
    }

    // Giả lập xác thực
    if (token === "Bearer my-secret-token") {
        next();
    } else {
        res.status(401).json({ error: "Token không hợp lệ" });
    }
};

module.exports = authMiddleware;
