import React from "react";
import {Accordion, Nav} from "react-bootstrap";

import "./Sidebar.scss";

function Sidebar() {
    return (
        <div className="sidebar">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Informasi Mitra</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link>Informasi Umum</Nav.Link>
                            <Nav.Link>Data Tambahan</Nav.Link>
                            <Nav.Link>Fasilitas Mitra</Nav.Link>
                            <Nav.Link>Informasi Kamar</Nav.Link>
                            <Nav.Link>Foto Mitra</Nav.Link>
                            <Nav.Link>Informasi Pembayaran</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Perjanjian Kontrak</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link>Informasi Penandatanganan Kontrak</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Pengajuan</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link>Ulasan</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Sidebar;