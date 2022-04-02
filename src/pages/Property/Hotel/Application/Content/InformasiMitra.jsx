import React from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";

const InformasiMitra = () => {
  return (
    <>
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
                Jl. Dharmahusada, No. 146, Surabaya, Jawa Timur,60285, Indonesia
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
                ilhamsantosa@icloud.com
              </Form.Label>
            </Form.Group>
            <Form.Group as={Row} className="mb-1">
              <Form.Label column sm={4}>
                Jam Buka
              </Form.Label>
              <Col sm={8}>
                {["Senin", "Selasa", "Rabu", "Kamis", "Jum'at"].map((data) => (
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      {data}
                    </Form.Label>
                    <Form.Label column sm={10}>
                      08.00 - 20.00
                    </Form.Label>
                  </Form.Group>
                ))}
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
    </>
  );
};

export default InformasiMitra;
