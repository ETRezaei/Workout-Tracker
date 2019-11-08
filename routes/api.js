const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const db = require("./models");


app.post("/exercise", ({ body }, res) => {
    db.Exercise.create(body)
      .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  


module.exports = router;
