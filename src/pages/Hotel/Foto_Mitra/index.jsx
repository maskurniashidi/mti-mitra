import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import {Container, Card, Button, Form, Col, Row} from "react-bootstrap";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';

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
              <h4 className="header-title">Foto Mitra</h4>
            </div>
            <section className="content-body">
              <Card>
                <Card.Header as="h5">Galeri</Card.Header>
                <Card.Body>
                  <Form>
                    <Row xs="auto" className="content-galery g-4">
                      <Col>
                        <div className="galery-photo add">
                          <FaPlus/>
                          <small>Tambah Foto Baru</small>
                        </div>
                      </Col>
                      <Col>
                        <div className="galery-photo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                        </div>
                      </Col>
                      <Col>
                        <div className="galery-photo">
                          <img src="https://c4.wallpaperflare.com/wallpaper/438/267/603/anime-portrait-display-landscape-hd-wallpaper-preview.jpg" />
                        </div>
                      </Col>
                    </Row>
                    <Form.Group as={Row} className="mt-4 mb-2">
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