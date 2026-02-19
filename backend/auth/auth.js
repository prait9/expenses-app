import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0)
        return res.status(401).json({ message: "User not found" });

      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res.status(401).json({ message: "Wrong password" });

      const token = jwt.sign(
        { id: user.id, plan: user.plan },
        "SECRET_KEY",
        { expiresIn: "1d" }
      );

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          plan: user.plan
        }
      });
    }
  );
});

export default router;
