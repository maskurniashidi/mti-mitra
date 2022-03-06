import React from "react";
import {Card, Button, Form, Col, Row} from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';

const FotoMitra = () => {
  return (
    <>
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
    </>
  );
}

export default FotoMitra;