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
              <h4 className="header-title">Informasi Mitra</h4>
            </div>
            <section className="content-body">
              <Card>
                <Card.Header as="h5">Review Data</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Nama Mitra
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Hotel Himalaya
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Kategori Mitra
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Hotel
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Alamat Mitra
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Jl. Dharmahusada, No. 146, Surabaya,
                        Jawa Timur,60285, Indonesia
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Kode Pos
                      </Form.Label>
                      <Form.Label column sm={8}>
                        60285
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Provinsi
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Jawa Timur
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Kabupaten / Kota
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Surabaya
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Kecamatan
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Wonokromo
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Kecamatan
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Wonokromo
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        No. Telepon
                      </Form.Label>
                      <Form.Label column sm={8}>
                        +628 218 299 2310
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Nama Kamar
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Mandalika
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Jumlah Kamar Untuk Tipe Ini
                      </Form.Label>
                      <Form.Label column sm={8}>
                        15 Kamar
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Metode Pembayaran
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Transfer Bank
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Alamat Email
                      </Form.Label>
                      <Form.Label column sm={8}>
                        stefanusirgy2202@gmail.com
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-5 mb-1">
                      <Col sm={12}>
                        <Button type="submit" size="md" className="w-100">Simpan</Button>
                      </Col>
                    </Form.Group>
                  </Form>
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