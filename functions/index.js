const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HeKXYLknpek12W4z4iHLqL42MfWLVCMX49CPwhNGXpZBPaltIPHT4FikMB3r0kcjw7G3VndFhvO6KwBe9tOHnk700aya0s4o6"
);

//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("PAymrnt request recive", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-77244/us-central1/api
