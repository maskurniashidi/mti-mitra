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
              <h4 className="header-title">Informasi Umum</h4>
            </div>
            <section className="content-body">
              <Card>
                <Card.Header as="h5">Detail Mitra</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Nama Mitra
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" name="name" placeholder="Masukkan Nama Mitra Anda" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Kategori Mitra
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" name="kategori" placeholder="Masukkan Kategori Mitra Anda" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label as="legend" column sm={4}>
                        Apakah Mitra Ini Memiliki Nama Yang Berbeda Sebelumnya?
                      </Form.Label>
                      <Col className="d-flex" sm={8}>
                        <Row className="flex-shrink-1">
                          <Col>
                            <Form.Check
                              type="radio"
                              label="Ya"
                              name="different_name"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              type="radio"
                              label="Tidak"
                              name="different_name"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label as="legend" column sm={4}>
                        Apakah Mitra Ini Memiliki Jaringan Dengan Hotel Tertentu?
                      </Form.Label>
                      <Col className="d-flex" sm={8}> 
                        <Row className="flex-shrink-1">
                          <Col>
                            <Form.Check
                              type="radio"
                              label="Ya"
                              name="network_hotel"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              type="radio"
                              label="Tidak"
                              name="network_hotel"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Form.Group>    
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Deskripsi Mitra
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control as="textarea" rows={6}  name="description" placeholder="Deskripsikan MItra Anda"/>
                      </Col>
                    </Form.Group>  
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Alamat Mitra
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Group className="mb-3">
                          <Form.Label>Location</Form.Label>
                          <Wrapper apiKey={"YOUR_API_KEY"}>
                          </Wrapper>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Alamat</Form.Label>
                          <Form.Control type="text" placeholder="Masukkan Alamat Mitra Anda" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Kode Pos</Form.Label>
                          <Form.Control type="text" placeholder="Masukkan Kode Pos Anda" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Provinsi</Form.Label>
                          <Form.Select>
                            <option>Pilih Provinsi Anda</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Kabupaten</Form.Label>
                          <Form.Select>
                            <option>Pilih Kabupaten / Kota Anda</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Kecamatan</Form.Label>
                          <Form.Select>
                            <option>Pilih Kecamatan Anda</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
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
                    <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={4}>
                        Jam Buka
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" name="name" placeholder="Pilihan Jam" />
                      </Col>
                    </Form.Group>        
                    <Form.Group as={Row} className="mt-5 mb-2">
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