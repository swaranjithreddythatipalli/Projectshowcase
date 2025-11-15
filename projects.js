import express from "express";
import db from "../db.js";

const router = express.Router();

// Submit project
router.post("/submit", (req, res) => {
    const { title, description, github, student_id } = req.body;

    const sql = `INSERT INTO projects (title, description, github, student_id, status)
                 VALUES (?, ?, ?, ?, 'Pending')`;

    db.query(sql, [title, description, github, student_id], (err, data) => {
        if (err) return res.json({ error: err });
        return res.json({ message: "Project Submitted" });
    });
});

// View all projects
router.get("/all", (req, res) => {
    db.query("SELECT * FROM projects", (err, data) => {
        if (err) return res.json({ error: err });
        return res.json(data);
    });
});

// Approve Project
router.put("/approve/:id", (req, res) => {
    const id = req.params.id;

    db.query(`UPDATE projects SET status='Approved' WHERE id=?`, [id], (err, data) => {
        if (err) return res.json({ error: err });
        return res.json({ message: "Project Approved" });
    });
});

export default router;
