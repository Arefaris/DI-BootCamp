import e from "express";
import cors from "cors";
const app = e();
app.use(e.json());
const PORT = process.env.PORT || 3005;
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/api/world", (req, res) => {
  const {input} = req.body;
  res.json({ message: "I recived your post" + input })});  

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!"});
});