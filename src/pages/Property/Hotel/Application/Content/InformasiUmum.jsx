import React, { useState } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import moment from "moment";
import "moment/locale/id";

import InputSwitch from "../../../../../components/Form/Input/InputSwitch/InputSwitch";
import StyledCheck from "../../../../../components/StyledCheck/StyledCheck";
import Map from "../../../../../components/Map/Map";
import ContactForm from "./components/ContactForm";

const InformasiUmum = () => {
  moment.updateLocale("en", {
    weekdaysShort: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
  });

  const [selectHours, setSelectHours] = useState(false);
  const [contactForm, setContactForm] = useState([
    {
      type: "main",
      form: {
        available_24: false,
      },
    },
  ]);

  const addContactHandler = (type) => {
    setContactForm((oldValues) => [
      ...oldValues,
      {
        type: type,
        form: {
          available_24: false,
        },
      },
    ]);
  };

  const deleteContactHandler = (index) => {
    setContactForm((values) =>
      values.slice(0, index).concat(values.slice(index + 1))
    );
  };

  return (
    <Card>
      <Card.Header as="h5">Detail Mitra</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Nama Mitra
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Masukkan Nama Mitra Anda"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Kategori Mitra
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="kategori"
                placeholder="Masukkan Kategori Mitra Anda"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label as="legend" column sm={4}>
              Apakah Mitra Ini Memiliki Nama Yang Berbeda Sebelumnya?
            </Form.Label>
            <Col className="d-flex" sm={8}>
              <Row className="flex-shrink-1">
                <Col>
                  <Form.Check type="radio" label="Ya" name="different_name" />
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
                  <Form.Check type="radio" label="Ya" name="network_hotel" />
                </Col>
                <Col>
                  <Form.Check type="radio" label="Tidak" name="network_hotel" />
                </Col>
              </Row>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Deskripsi Mitra
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                as="textarea"
                rows={6}
                name="description"
                placeholder="Deskripsikan Mitra Anda"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Alamat Mitra
            </Form.Label>
            <Col sm={8}>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Map />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alamat Mitra Anda"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kode Pos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Kode Pos Anda"
                />
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
              <Form.Control
                type="text"
                name="name"
                placeholder="Masukkan Nomor Telepon Anda"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={4}>
              Jam Buka
            </Form.Label>
            <Col sm={8}>
              <InputSwitch
                className="mb-3"
                type="text"
                name="switch"
                placeholder="Pilihan Jam"
                callback={setSelectHours}
                disabled
                readOnly
              />

              <div className="day-open-container">
                <div
                  className={`select-day ${selectHours ? "select-hours" : ""}`}
                >
                  {moment.weekdaysShort().map((data, index) => (
                    <div className="day-check" key={data}>
                      <StyledCheck
                        id={`styled-check['${index}']`}
                        name={`day-open['${data.toLowerCase()}']`}
                        label={data.toUpperCase()}
                      />
                      {!selectHours && (
                        <div className="hours-input">
                          <Form.Control
                            type="text"
                            name={`start['${data.toLowerCase()}']`}
                            placeholder="08:00"
                          />
                          —
                          <Form.Control
                            type="text"
                            name={`end['${data.toLowerCase()}']`}
                            placeholder="16:00"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {selectHours && (
                  <div className="hours-input">
                    <Form.Control
                      type="text"
                      name="start['allday']"
                      placeholder="08:00"
                    />
                    —
                    <Form.Control
                      type="text"
                      name="end['allday']"
                      placeholder="16:00"
                    />
                  </div>
                )}
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} xs={1} md={2} className="contact-section g-4">
            {contactForm.map((data, index) => (
              <ContactForm
                data={data}
                index={index}
                key={index}
                addContact={addContactHandler}
                deleteContact={deleteContactHandler}
                setFormData={setContactForm}
              />
            ))}
            <ContactForm addContact={addContactHandler} />
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

export default InformasiUmum;
