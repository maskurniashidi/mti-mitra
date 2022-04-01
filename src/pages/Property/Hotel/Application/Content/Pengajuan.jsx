import React from "react";
import { Card, Button } from "react-bootstrap";

import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Pengajuan = () => {
  return (
    <>
      <Card>
        <Card.Header as="h5">
          Kami Sedang Memverifikasi Informasi Pendaftaran Mitra Anda
        </Card.Header>
        <Card.Body>
          <span>
            Tim kami akan menghubungi Anda melalui email
            (stefanusirgy2202@gmail.com) untuk informasi terbaru terkait proses
            pendaftaran Mitra Anda. Salam Hangat, Selamat Siang.
          </span>
          <div className="mt-3">
            <Button type="submit" size="md">
              Kembali ke Beranda
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header as="h5">Butuh Bantuan ?</Card.Header>
        <Card.Body>
          <div className="info-contact">
            <HiOutlineMail className="icon" />
            <div className="contact">
              <label>Email</label>
              <span>halo@medicaltourism.id</span>
            </div>
          </div>
          <div className="info-contact">
            <HiOutlinePhone className="icon" />
            <div className="contact">
              <label>Phone</label>
              <span>+62 31 600 38 398</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pengajuan;
