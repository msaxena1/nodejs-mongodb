import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://localhost:27017');

let collection;

try {
  const conn = await client.connect();
  const db = conn.db("myDb");
  collection = await db.collection("notes");
  //const items = await collection.findOne();
  //console.log(`items: ${JSON.stringify(items)}`);
} catch(e) {
  console.error(e);
}


export default collection;
