import React from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ExpandMenu from "./components/ExpandMenu";

const FasilitasMitra = () => {
  return (
    <Card>
      <Card.Header as="h5">Fasilitas Mitra</Card.Header>
      <Card.Body>
        <Form>
          {[
            "Umum",
            "Aksesibilitas",
            "Bisnis",
            "Konektivitas",
            "Fasilitas",
            "Makanan & Minuman",
            "Fasilitas Ruangan",
            "Fasilitas Terdekat",
            "Layanan",
            "Olahraga & Rekreasi",
            "Kesehatan",
            "Transportasi",
          ].map((value, index) => (
            <Form.Group as={Row} className="mb-4" key={value}>
              <Form.Label column sm={4}>
                {value}
              </Form.Label>
              <Col sm={8}>
                <ExpandMenu title="Pilih Fasilitas">
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Pelayanan Kamar" />
                    </div>
                    <div className="selection-right">
                      <div className="selection-header">24 jam?</div>
                      <div className="selection-body">
                        <Form.Check
                          inline
                          type="radio"
                          label="Ya"
                          name="free_park"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Tidak"
                          name="free_park"
                        />
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Tempat Parkir" />
                    </div>
                    <div className="selection-right">
                      <div className="selection-header">Gratis?</div>
                      <div className="selection-body">
                        <Form.Check
                          inline
                          type="radio"
                          label="Ya"
                          name="free_park"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Tidak"
                          name="free_park"
                        />
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Kedai Kopi" />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Tempat Makan" />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Lift" />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Wifi Gratis" />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check
                        type="checkbox"
                        label="Tempat Makan Untuk Sarapan"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check
                        type="checkbox"
                        label="Tempat Makan Untuk Makan Malam"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check
                        type="checkbox"
                        label="Tempat Makan Untuk Makan Siang"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Lobby" />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Check-out" />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2">
                    <div className="selection-left">
                      <Form.Check type="checkbox" label="Check-in" />
                    </div>
                  </Form.Group>
                </ExpandMenu>
              </Col>
            </Form.Group>
          ))}

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

export default FasilitasMitra;
