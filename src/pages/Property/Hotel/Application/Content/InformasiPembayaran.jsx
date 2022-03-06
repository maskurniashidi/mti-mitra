import React from "react";
import {Card, Button, Form, Col, Row} from "react-bootstrap";

const InformasiPembayaran = () => {
  return (
    <>
      <Card>
        <Card.Header as="h5">Informasi Pembayaran</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} className="mb-4">
              <Form.Label as="legend" column sm={4}>
                Metode Pembayaran
              </Form.Label>
              <Col sm={8}>
                <Row>
                  <Col sm="auto">
                    <Form.Check
                      type="radio"
                      label="Transfer Bank"
                      name="method"
                    />
                  </Col>
                  <Col sm="auto">
                    <Form.Check
                      type="radio"
                      label="VCC"
                      name="method"
                    />
                  </Col>
                </Row>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Nama Bank
              </Form.Label>
              <Col sm={8}>
                <Form.Select>
                  <option>Pilih Nama Bank Anda</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Nomor Akun Bank
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" name="account" placeholder="Masukkan Nomor Akun Bank Anda" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Nama Pemilik Akun Bank
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" name="holder" placeholder="Masukkan Nama Pemilik Akun Bank Anda" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label as="legend" column sm={4}>
                Rencana Pembayaran
              </Form.Label>
              <Col sm={8}> 
                <Row>
                  <Col sm="auto">
                    <Form.Check
                      type="radio"
                      label="Pembayaran di Awal"
                      name="payment_period"
                    />
                  </Col>
                  <Col sm="auto">
                    <Form.Check
                      type="radio"
                      label="Mingguan"
                      name="payment_period"
                    />
                  </Col>
                  <Col sm="auto">
                    <Form.Check
                      type="radio"
                      label="Bulanan"
                      name="payment_period"
                    />
                  </Col>
                </Row>
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
    </>
  );
}

export default InformasiPembayaran;