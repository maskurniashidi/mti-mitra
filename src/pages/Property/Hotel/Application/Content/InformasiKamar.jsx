import React from "react";
import {Card, Button, Form, Col, Row} from "react-bootstrap";
import InputLabel from "../../../../../components/Form/Input/InputLabel/InputLabel";

const InformasiKamar = () => {

  return (
    <>
      <Card>
        <Card.Header as="h5">Detail Kamar</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Nama Kamar
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" name="name" placeholder="Masukkan Nama Kamar Anda" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Spesifikasi Kamar
              </Form.Label>
              <Col sm={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Jenis Kamar</Form.Label>
                  <Form.Select>
                    <option>Pilih Jenis Kamar Anda</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jenis Tempat Tidur</Form.Label>
                  <Form.Select>
                    <option>Pilih Jenis Tempat Tidur Anda</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Maksimal Penghuni Kamar</Form.Label>
                  <InputLabel placeholder="Masukkan Maksimal Penghuni Kamar" type="text" label="Orang" label-type="suffix"/>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Informasi Tempat Tidur Tambahan
              </Form.Label>
              <Col sm={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Maksimal Tempat Tidur Tambahan</Form.Label>
                  <InputLabel placeholder="Masukkan Maksimal Tempat Tidur Tambahan" type="text" label="Jenis" label-type="suffix"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Harga Tempat Tidur Tambahan</Form.Label>
                  <InputLabel placeholder="Masukkan Harga Tempat Tidur Tambahan" type="text" label="IDR" label-type="prefix"/>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Ukuran Kamar
              </Form.Label>
              <Col sm={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Lebar</Form.Label>
                  <InputLabel placeholder="Masukkan Lebar Kamar" type="text" label="Meter" label-type="suffix"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Panjang</Form.Label>
                  <InputLabel placeholder="Masukkan Panjang Kamar" type="text" label="Meter" label-type="suffix"/>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
                Tarif Kamar
              </Form.Label>
              <Col sm={8}>
                <InputLabel placeholder="Masukkan Tarif Kamar" type="text" label="IDR" label-type="prefix"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label as="legend" column sm={4}>
                Sudah Termasuk Sarapan
              </Form.Label>
              <Col className="d-flex" sm={8}>
                <Row className="flex-shrink-1">
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Ya"
                      name="inc_breakfast"
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Tidak"
                      name="inc_breakfast"
                    />
                  </Col>
                </Row>
              </Col>
            </Form.Group>      
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={4}>
              Jumlah Kamar Untuk Tipe Ini
              </Form.Label>
              <Col sm={8}>
                <InputLabel placeholder="Masukkan Jumlah Kamar Untuk Tipe Ini" type="text" label="Kamar" label-type="suffix"/>
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

export default InformasiKamar;