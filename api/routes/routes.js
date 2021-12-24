const express = require("express");
const routes = express.Router();
const db = require("../db/db");
const ObjectId = require("mongodb").ObjectId;

routes.route("/").get((req, res) => {
  res.send("Hello World!");
});

// Station route for all stations
routes.route("/stations").get(async (req, res) => {
  const dbConnect = await db.getDb();
  dbConnect
    .collection("stations")
    .find()
    .toArray((err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(result);
    });
});

// Station route for specific station
routes.route("/station/:id").get(async (req, res) => {
  const dbConnect = await db.getDb();
  dbConnect
    .collection("stations")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(result);
    });
});

// Add station route
routes.route("/station").post(async (req, res) => {
  const dbConnect = db.getDb();
  dbConnect.collection("stations").insertOne(
    {
      name: req.body.name,
      lat: req.body.lat,
      lng: req.body.lng,
      readings: [],
      userId: ObjectId(req.body.userId),
      created_on: new Date(),
    },
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(result);
    }
  );
});

// Add reading to station route
routes.route("/station/:id/addreading").post(async (req, res) => {
  const dbConnect = db.getDb();
  dbConnect.collection("stations").updateOne(
    { _id: ObjectId(req.params.id) },
    {
      $push: {
        readings: {
          code: req.body.code,
          temperature: req.body.temperature,
          windSpeed: req.body.windSpeed,
          windDirection: req.body.windDirection,
          pressure: req.body.pressure,
          created_on: new Date(),
        },
      },
    },
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(result);
    }
  );
});

// Delete reading from station route
routes
  .route("/station/:id/deletereading/:readingId")
  .delete(async (req, res) => {
    const dbConnect = db.getDb();
    dbConnect.collection("stations").updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $pull: {
          readings: {
            _id: ObjectId(req.params.readingId),
          },
        },
      },
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        res.json(result);
      }
    );
  });

// Delete station route
routes.route("/station/:id").delete(async (req, res) => {
  const dbConnect = db.getDb();
  dbConnect
    .collection("stations")
    .deleteOne({ _id: ObjectId(req.params.id) }, (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(result);
    });
});

module.exports = routes;
