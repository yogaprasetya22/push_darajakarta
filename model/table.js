import { Sequelize } from "sequelize";
import db from "../config/database.js";

export const fasilitasKesehatan = db.define(
  "tb_fakes",
  {
    tahun: {
      type: Sequelize.INTEGER,
    },
    fasilitas_kesehatan: {
      type: Sequelize.STRING,
    },
    jumlah: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // paranoid: true,
  }
);

export const bayiGizi = db.define(
  "tb_gizibayi",
  {
    tahun: {
      type: Sequelize.INTEGER,
    },
    wilayah: {
      type: Sequelize.STRING,
    },
    jumlah_bayi_lahir: {
      type: Sequelize.STRING,
    },
    kondisi_bayi: {
      type: Sequelize.STRING,
    },
    jumlah: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // paranoid: true,
  }
);

export const Nakes = db.define(
  "tb_nakes",
  {
    tahun: {
      type: Sequelize.INTEGER,
    },
    tenaga_kesehatan: {
      type: Sequelize.STRING,
    },
    jumlah: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // paranoid: true,
  }
);

export const penyakitMenular = db.define(
  "tb_penyakitmenular",
  {
    tahun: {
      type: Sequelize.INTEGER,
    },
    wilayah: {
      type: Sequelize.STRING,
    },
    nama_penyakit: {
      type: Sequelize.STRING,
    },
    jumlah_penderita: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // paranoid: true,
  }
);

export const rsCovid = db.define(
  "tb_rscovid",
  {
    nama_rumah_sakit: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
    kota_madya: {
      type: Sequelize.STRING,
    },
    kelurahan: {
      type: Sequelize.STRING,
    },
    kecamatan: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // paranoid: true,
  }
);

export const Register = db.define(
  "User",
  {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // paranoid: true,
  }
);
