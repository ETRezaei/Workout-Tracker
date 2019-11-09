const router = require("express").Router();
const Workout = require("../models/workout.js");
// const Exercise = require("../models/exercise.js");
const mongoose = require("mongoose");
const db = require("../models");
const mongojs = require("mongojs");

module.exports = function (app) {

  app.post("/api/workouts", async (req, res) => {
    //console.log(req.body);
  
    Workout.create({})
    .then(dbWorkout => {
            res.json(dbWorkout);
          })
    .catch(err => {
      res.json(err);
    });
});

  // app.post("/api/workouts", ({body}, res) => {
  //   db.Workout.create({})
  //     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
  //     .then(dbWorkout => {
  //       res.json(dbWorkout);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

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
    //db.Exercise.update({_id: req.params.id}, upsertData,{upsert: true})
    Workout.create({})
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    }); 
  });

  // router.put("/api/workouts/:id", (req, res) => {
  //   db.Exercise.updateOne(
  //     {
  //       _id: mongojs.ObjectId(req.params.id)
  //     },
  //     {
  //       $set: {
  //         type: req.body.type,
  //         name: req.body.name,
  //         duration: req.body.duration,
  //         distance: req.body.distance,
  //         weight: req.body.weight,
  //         reps: req.body.reps,
  //         sets: req.body.sets
  //         //modified: Date.now()
  //       }
  //     },
  //     (error, data) => {
  //       if (error) {
  //         res.send(error);
  //       } else {
  //         res.send(data);
  //       }
  //     }
  //   );
  // });
}

  


//module.exports = router;



