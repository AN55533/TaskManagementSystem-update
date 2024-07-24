const express = require("express");
const router = express.Router();
const tasks = require("../models/Tasks");
const verifyToken = require("../middleware/authMiddleware")

router.get("/tasks",verifyToken, async (req, res) => {
  const details = await tasks.find({});
  res.json(details);
});

router.get("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  const details = await tasks.findOne({ taskId: taskId }, { _id: 0 });
  res.json(details);
});
router.post("/tasks", async (req, res) => {
  try {
    
    const data = req.body;
    const result = await tasks.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});


router.get('/api/tasks/count', async (req, res) => {
  try {
    const count = await tasks.countDocuments();
    res.json({ count });
    console.log(count);
  } catch (error) {
    console.error('Error counting tasks:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



router.put("/tasks/:taskId", async (req, res) => {
  const data = req.body;
  const taskId = data.taskId;
  try {
    const result = await tasks.findOneAndUpdate(
      { taskId: taskId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!result) {
      return res.status(404).send("Task not found");
    }
    res.send("Task updated successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.delete("/tasks/:taskId", async (req, res) => {
  const taskId = req.params.id;
  try {
    const result = await tasks.findOneAndDelete({ taskId: taskId });
    if (!result) {
      return res.status(404).send("task not found");
    }
    res.send("task deleted successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
