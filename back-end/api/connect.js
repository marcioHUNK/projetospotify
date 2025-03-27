import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://marcioteste:senha@cluster0.40ohd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
const songCollection = await db.collection("songs").find({}).toArray();

console.log(songCollection);
