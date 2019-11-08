const router = require("express");
// .Router();
// var db = require("../models");
const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", function (req, res) { 
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

    app.get("/stats", function (req, res) {      
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });

    app.get("/api/workouts", async (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });

}  

// module.exports = router;
