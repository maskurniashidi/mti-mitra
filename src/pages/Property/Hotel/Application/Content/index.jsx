import InformasiUmum from "./InformasiUmum";
import DataTambahan from "./DataTambahan";
import FasilitasMitra from "./FasilitasMitra";
import InformasiKamar from "./InformasiKamar";
import FotoMitra from "./FotoMitra";
import InformasiPembayaran from "./InformasiPembayaran";
import PerjanjianKontrak from "./PerjanjianKontrak";
import Pengajuan from "./Pengajuan";

export const HOTEL_CONTENT = {
  defaultPage: 1,
  sidebar: [
    {
      name: "Informasi Mitra",
      pages: [
        {
          id: 1,
          name: "Informasi Umum",
          content: InformasiUmum,
        },
        {
          id: 2,
          name: "Data Tambahan",
          content: DataTambahan,
        },
        {
          id: 3,
          name: "Fasilitas Mitra",
          content: FasilitasMitra,
        },
        {
          id: 4,
          name: "Informasi Kamar",
          content: InformasiKamar,
        },
        {
          id: 5,
          name: "Foto Mitra",
          content: FotoMitra,
        },
        {
          id: 6,
          name: "Informasi Pembayaran",
          content: InformasiPembayaran,
        },
      ],
    },
    {
      name: "Perjanjian Kontrak",
      pages: [
        {
          id: 7,
          name: "Informasi Penandatanganan Kontrak",
          content: PerjanjianKontrak,
        },
      ],
    },
    {
      name: "Pengajuan",
      pages: [
        {
          id: 8,
          name: "Ulasan",
          content: Pengajuan,
        },
      ],
    },
  ],
};
