import {
  fasilitasKesehatan,
  rsCovid,
  bayiGizi,
  Nakes,
  penyakitMenular,
  Register,
} from "../model/table.js";
import Data_fasilitasKesehatan from "../data/Fasilitas_kesehatan.js";
import Data_giziBayi from "../data/Gizi_bayi.js";
import Data_Nakes from "../data/Nakes.js";
import Data_penyakitMenular from "../data/Penyakit_menular.js";
import Data_rsCovid from "../data/Rs_covid.js";

export const createFasilitasKesehatan = async (req, res) => {
  try {
    for (let i = 0; i < Data_fasilitasKesehatan.length; i++) {
      await fasilitasKesehatan.create({
        tahun: Data_fasilitasKesehatan[i].tahun,
        fasilitas_kesehatan: Data_fasilitasKesehatan[i].fasilitas_kesehatan,
        jumlah: Data_fasilitasKesehatan[i].jumlah,
      });
    }

    res.json({ msg: "berhasil diTambahkna" });
  } catch (error) {
    res.json(error);
  }
};
export const createGizibayi = async (req, res) => {
  try {
    for (let i = 0; i < Data_giziBayi.length; i++) {
      await bayiGizi.create({
        tahun: Data_giziBayi[i].tahun,
        wilayah: Data_giziBayi[i].wilayah,
        jumlah_bayi_lahir: Data_giziBayi[i].jumlah_bayi_lahir,
        kondisi_bayi: Data_giziBayi[i].kondisi_bayi,
        jumlah: Data_giziBayi[i].jumlah,
      });
    }

    res.json({ msg: "berhasil diTambahkna" });
  } catch (error) {
    res.json(error);
  }
};
export const createNakes = async (req, res) => {
  try {
    for (let i = 0; i < Data_Nakes.length; i++) {
      await Nakes.create({
        tahun: Data_Nakes[i].tahun,
        tenaga_kesehatan: Data_Nakes[i].tenaga_kesehatan,
        jumlah: Data_Nakes[i].jumlah,
      });
    }

    res.json({ msg: "berhasil diTambahkna" });
  } catch (error) {
    res.json(error);
  }
};
export const createPenyakitMenular = async (req, res) => {
  try {
    for (let i = 0; i < Data_penyakitMenular.length; i++) {
      await penyakitMenular.create({
        tahun: Data_penyakitMenular[i].tahun,
        wilayah: Data_penyakitMenular[i].wilayah,
        nama_penyakit: Data_penyakitMenular[i].nama_penyakit,
        jumlah_penderita: Data_penyakitMenular[i].jumlah_penderita,
      });
    }

    res.json({ msg: "berhasil diTambahkna" });
  } catch (error) {
    res.json(error);
  }
};
export const createRsCovid = async (req, res) => {
  try {
    for (let i = 0; i < Data_rsCovid.length; i++) {
      await rsCovid.create({
        nama_rumah_sakit: Data_rsCovid[i].nama_rumah_sakit,
        alamat: Data_rsCovid[i].alamat,
        kota_madya: Data_rsCovid[i].kota_madya,
        kelurahan: Data_rsCovid[i].kelurahan,
        kecamatan: Data_rsCovid[i].kecamatan,
      });
    }

    res.json({ msg: "berhasil diTambahkna" });
  } catch (error) {
    res.json(error);
  }
};

export const Registrasi = async (req, res) => {
  const { username, email, password, level } = req.body;
  try {
    await Register.create({
      username: username,
      email: email,
      password: password,
      level: level,
    });

    res.json({ msg: "berhasil diTambahkna" });
  } catch (error) {
    res.json(error);
  }
};
