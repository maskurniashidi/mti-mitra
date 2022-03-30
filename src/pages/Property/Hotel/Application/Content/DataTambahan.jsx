import React from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import InputSelect from "../../../../../components/Form/Input/InputSelect/InputSelect";

const DataTambahan = () => {
  return (
    <Card>
      <Card.Header as="h5">Data Tambahan</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Mata uang utama
            </Form.Label>
            <Col sm={8}>
              <span>Rupiah (IDR)</span>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label as="legend" column sm={4}>
              Jam Buka
            </Form.Label>
            <Col sm={8}>
              <Form.Check type="radio" label="Buka 24 Jam" name="open_hours" />
              <Form.Check
                type="radio"
                label="Tidak Buka 24 Jam"
                name="open_hours"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Jarak ke Pusat Kota
            </Form.Label>
            <Col sm={8}>
              <InputSelect
                type="text"
                name="distance"
                placeholder="Masukkan Jarak ke Pusat Kota"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Jumlah Lantai
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="floor"
                placeholder="Masukkan Jumlah Lantai"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Biaya Sarapan Tambahan
              <small style={{ display: "block" }}>
                (Tidak Termasuk Tarif Kamar)
              </small>
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="floor"
                placeholder="Masukkan Biaya Sarapan Tambahan"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Kebijakan Pembatalan Mitra
            </Form.Label>
            <Col sm={8}>
              <Form.Select>
                <option>Pilih Kebijakan Pembatalan</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-5 mb-2">
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
};

export default DataTambahan;
