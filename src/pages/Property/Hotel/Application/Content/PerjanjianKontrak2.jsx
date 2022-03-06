import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import {Container, Card, Button, Form, Col, Row} from "react-bootstrap";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
                <Card.Header as="h5">Review Data</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Nama Lengkap
                      </Form.Label>
                      <Form.Label column sm={8}>
                        Stefanus Irgy Hananto
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Peran
                      </Form.Label>
                      <Form.Label column sm={8}>
                        CEO Hotel Himalaya
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
                    <Form.Group as={Row} className="mb-1">
                      <Form.Label column sm={4}>
                        Nomor Telepon
                      </Form.Label>
                      <Form.Label column sm={8}>
                        +628 218 299 2310
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-4 mb-1">
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