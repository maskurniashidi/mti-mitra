import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import {Container, Card, Button, Form, Col, Row} from "react-bootstrap";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import "./index.scss";

function Index() {
  return (
    <>
      <Navbar/>
      <main className="main">
        <Container>
          <Sidebar/>
          <div className="content-wrapper">
            <div className="content-header">
              <h4 className="header-title">Pengajuan</h4>
            </div>
            <section className="content-body">
              <Card>
                <Card.Header as="h5">Kami Sedang Memverifikasi Informasi Pendaftaran Mitra Anda</Card.Header>
                <Card.Body>
                  <span>Tim kami akan menghubungi Anda melalui email (stefanusirgy2202@gmail.com) untuk informasi terbaru terkait proses pendaftaran Mitra Anda. Salam Hangat, Selamat Siang.</span>
                  <div className="mt-3">
                    <Button type="submit" size="md">Kembali ke Beranda</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Header as="h5">Butuh Bantuan ?</Card.Header>
                <Card.Body>
                  <div className="info-email">
                    <label>Email: </label>
                    <span>halo@medicaltourism.id</span>
                  </div>
                  <div className="info-phone">
                    <label>Phone: </label>
                    <span>+62 31 600 38 398</span>
                  </div>
                </Card.Body>
              </Card>
              <div className="page-nav">
                <Link className="nav-prev">
                  <FaArrowLeft/>
                  Halaman Sebelumnya
                </Link>
                <Link className="nav-next">
                  Halaman Selanjutnya
                  <FaArrowRight/>
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Index;