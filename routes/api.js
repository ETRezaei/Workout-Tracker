const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const db = require("../models");
const mongojs = require("mongojs");

module.exports = function (app) {

  // app.post("api/workouts", ({ body }, res) => {
  //   Workout.create()
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  

  app.post("/api/workouts",  (req, res) => {
    Workout.create({}, function (error, data) {
      if (error) {
          res.send(error);
      } else {
          res.send(data);
      }
  })
});


  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout=> {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", async function(req, res){

    Workout.update({ _id: req.params.id }, {$push: {exercises: req.body}}, {new: true})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
  });
}


