import express from "express";
import db from "./config/database.js";
import {
  fasilitasKesehatan,
  bayiGizi,
  Nakes,
  penyakitMenular,
  rsCovid,
} from "./model/table.js";
import router from "./routes/route.js";
const app = express();

try {
  await db.authenticate();
  console.log("database konek");
  await fasilitasKesehatan.sync();
  await bayiGizi.sync()
  await Nakes.sync()
  await penyakitMenular.sync()
  await rsCovid.sync()
  // await Register.sync()
} catch (error) {
  console.log("database mati");
  console.log(error);
}

app.post("/kirimdata", (req, res) => {
  res.json({ msg: "hello world" });
});

// app.use(cookiesPar());
app.use(express.json());
app.use(router);

app.listen(5006, () => console.log("http://localhost:5006"));
