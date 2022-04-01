import React, { useState } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";

import { LampiranKontrak } from "../../../../../data/attachment";

const PerjanjianKontrak = () => {
  const Content = {
    Form: () => {
      return (
        <Card>
          <Card.Header as="h5">Informasi Penandatanganan Kontrak</Card.Header>
          <Card.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                setContent(React.createElement(Content.Review));
              }}
            >
              <Form.Group as={Row} className="mb-4">
                <Form.Label column sm={4}>
                  Nama Lengkap
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Masukkan Nama Lengkap Anda"
                  />
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
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Masukkan Alamat Email Anda"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4">
                <Form.Label column sm={4}>
                  Nomor Telepon
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Masukkan Nomor Telepon Anda"
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mt-4 mb-4">
                <Form.Check
                  type="checkbox"
                  label="Saya Dengan Ini Mengakui Bahwa Saya Adalah Penandatangan Resmi Untuk Kontrak (Pemilik Bisnis, CEO, Presiden, dan Setara)"
                />
              </Form.Group>
              <Form.Group as={Row} className="mt-2 mb-2">
                <Col sm={12}>
                  <Button type="submit" size="md" className="w-100">
                    Simpan
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      );
    },
    Review: () => {
      return (
        <Card>
          <Card.Header as="h5">Review Kontrak</Card.Header>
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
                <Col>
                  <div className="contract">
                    <LampiranKontrak />
                  </div>
                  <Form.Group className="mt-4">
                    <Form.Check type="checkbox" label="Ya, saya setuju." />
                  </Form.Group>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mt-4 mb-1">
                <Col sm={12}>
                  <Button type="submit" size="md" className="w-100">
                    Simpan
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      );
    },
  };

  const [content, setContent] = useState(React.createElement(Content.Form));

  return <>{content}</>;
};

export default PerjanjianKontrak;
