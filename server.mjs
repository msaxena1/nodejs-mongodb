import express from "express";
import collection from "./notes.mjs";

const app = express();
app.use(express.json());

// Get a list of 50 notes
app.get("/notes", async (req, res) => {
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.send(results).status(200);
});

app.post("/notes", async (req, res) => {
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(201);
});

app.use((err, _req, res, next) => {
  res.status(500).send("An unexpected error occured.")
})

app.listen(3000, () => console.log("Server ready"))
