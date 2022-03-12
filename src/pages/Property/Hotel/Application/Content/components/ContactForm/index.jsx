import { Form, Col, Dropdown, Button }  from "react-bootstrap";
import { FaAddressBook, FaMoneyCheck } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

import "./style.scss";

const ContactForm = ({data, index, addContact, deleteContact, setFormData}) => {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target[
            event.target.type === 'checkbox' ? 'checked' : 'value'
        ];

        setFormData(values => (
            values.map((current, position) => {
                if (index === position) {
                    return {
                        ...current,
                        form: {...current.form, [name]: value}
                    }
                }
                return current
            })
        ));

    };

    const contactType = {
        main: {
            name: "Kontak Utama",
            required: true
        },
        reservation: {
            name: "Kontak Reservasi",
            required: false
        },
        payment: {
            name: "Kontak Pembayaran",
            required: false
        },
    };

    const addReservationContact = () => {
        addContact && addContact("reservation");
    };

    const addPaymentContact = () => {
        addContact && addContact("payment");
    };

    return(
        <Col>
            <div className="contact-form">
                {data ? 
                    <>
                        <div className="contact-header">
                            <div className="header-title">{contactType[data.type].name}</div>
                            <div className="header-action">
                                <Dropdown>
                                    <Dropdown.Toggle as="a" id="dropdown-basic">
                                        <HiDotsVertical/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setFormData(values => (
                                            values.map((current, position) => {
                                                if (index === position) {
                                                    return {
                                                        ...current,
                                                        form: {}
                                                    }
                                                }
                                                return current
                                            })
                                        ))}>
                                            Clear
                                        </Dropdown.Item>
                                        {!contactType[data.type].required && 
                                            <Dropdown.Item onClick={() => deleteContact && deleteContact(index)}>
                                                Hapus Kontak
                                            </Dropdown.Item>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="contact-body">
                            <Form.Group className="mb-3">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Masukkan Nama Anda" 
                                    onChange={handleChange}
                                    value={data.form.name || ""}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Alamat Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Masukkan Nama Email Anda" 
                                    onChange={handleChange}
                                    value={data.form.email || ""}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nomor Telepon</Form.Label>
                                <Form.Control name="phone" type="text" placeholder="Masukkan Nomor Telepon Anda" 
                                    onChange={handleChange}
                                    value={data.form.phone || ""}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nomor Telepon Kantor</Form.Label>
                                <Form.Control name="phone_office" type="text" placeholder="Masukkan Nomor Telepon Kantor Anda" 
                                    onChange={handleChange}
                                    value={data.form.phone_office || ""}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Posisi</Form.Label>
                                <Form.Control name="position" type="text" placeholder="Posisi anda dalam Mitra" 
                                    onChange={handleChange}
                                    value={data.form.position || ""}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check name="available_24" type="checkbox" label="Tersedia 24 Jam" 
                                    onChange={handleChange}
                                    checked={data.form.available_24 || false}
                                />
                            </Form.Group>
                        </div> 
                    </>
                : 
                    <div className="contact-content">
                        <h3 className="content-title">
                            Tambah Kontak
                        </h3>
                        <div className="content-action">
                            <Button variant="outline-primary" onClick={addReservationContact}>
                                <div className="button-container">
                                    <FaAddressBook/> Reservasi
                                </div>
                            </Button>
                            <Button variant="outline-primary" onClick={addPaymentContact}>
                                <div className="button-container">
                                    <FaMoneyCheck/> Pembayaran
                                </div>
                            </Button>
                        </div>
                        <div className="content-description">
                            <p>Kontak Utama akan dihubungi untuk setiap pertanyaan mengenai reservasi, keuangan, dan pembayaran.</p>
                            <p>Jika hal tersebut dikelola oleh orang yang berbeda, Silahkan tambahkan kontak baru.</p>
                        </div>
                    </div>
                }
            </div>
        </Col>
    );
};
 
export default ContactForm;