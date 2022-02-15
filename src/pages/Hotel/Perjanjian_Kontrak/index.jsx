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
              <h4 className="header-title">Perjanjian Kontrak</h4>
            </div>
            <section className="content-body">
              <Card>
                <Card.Header as="h5">Informasi Penandatanganan Kontrak</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Nama Lengkap
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" name="name" placeholder="Masukkan Nama Lengkap Anda" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Peran
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select>
                            <option>Pilih Peran Mitra Anda</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                      </Col>
                    </Form.Group> 
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Alamat Email
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" name="name" placeholder="Masukkan Alamat Email Anda" />
                      </Col>
                    </Form.Group>      
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Nomor Telepon
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" name="name" placeholder="Masukkan Nomor Telepon Anda" />
                      </Col>
                    </Form.Group>       
                    <Form.Group className="mt-4 mb-4">
                      <Form.Check type="checkbox" label="Saya Dengan Ini Mengakui Bahwa Saya Adalah Penandatangan Resmi Untuk Kontrak (Pemilik Bisnis, CEO, Presiden, dan Setara)" />
                    </Form.Group> 
                    <Form.Group as={Row} className="mt-2 mb-2">
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