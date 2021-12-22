import express from "express";
import {
  createFasilitasKesehatan,
  createGizibayi,
  createNakes,
  createPenyakitMenular,
  createRsCovid,
  Registrasi,
} from "../controllers/control.js";

const router = express.Router();

router.post("/fasilitas", createFasilitasKesehatan);
router.post("/gizi", createGizibayi);
router.post("/nakes", createNakes);
router.post("/penyakitMenular", createPenyakitMenular);
router.post("/rsCovid", createRsCovid);
router.post("/regis",Registrasi);

export default router;
