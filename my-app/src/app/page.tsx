"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/style.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const TopMenu: React.FC = () => (
    <Navbar expand="lg" className="navbar navbar-expand-lg" id="topMenu" style={{ backgroundColor: '#1B4F24' }}>
        <Container>
            <Navbar.Brand href="#">
                <Image src="/murphyslogowhite.png" width={200} height={60} alt="Murphy's Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto">
                    <Nav.Link href="#" style={{ color: 'white' }}>Home</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white' }}>About Us</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white' }}>St. Patrick's Day</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white' }}>To Go Ordering</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white' }}><Instagram size={20} /></Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white' }}><Facebook size={20} /></Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white' }}><Twitter size={20} /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

const CenterSection: React.FC = () => (
    <Row className="align-items-center justify-content-center text-center flex-grow-1" id="centerText" style={{ height: '500px', background: 'url(/murphys-new-background.jpeg) no-repeat center center fixed', backgroundSize: 'cover', color: 'white', display: 'flex', alignItems: 'center' }}>
        <Col xs={8}>
            <h1>Now accepting reservations for St Patrick's Day</h1>
            <h1>Please call 808-531-0422 for reservations</h1>
            <h1>St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
        </Col>
    </Row>
);

const BottomMenu: React.FC = () => (
    <footer className="mt-auto w-100" id="bottomMenu" style={{ backgroundColor: '#1B4F24', color: 'white', position: 'relative', bottom: '0', width: '100%' }}>
        <Container>
            <Row className="py-3 text-start">
                <Col>
                    Lunch
                    <hr style={{ borderColor: 'white' }} />
                    Monday - Friday: 11:00am - 2:30pm<br />
                    Saturday - Sunday: Not open
                </Col>
                <Col>
                    Bar
                    <hr style={{ borderColor: 'white' }} />
                    Monday - Friday: From 11:00am to closing<br />
                    Saturday - Sunday: Not open
                </Col>
                <Col>
                    Dinner
                    <hr style={{ borderColor: 'white' }} />
                    Monday - Friday: 5:00pm - 9:00pm<br />
                    Saturday - Sunday: Not open
                </Col>
            </Row>
        </Container>
    </footer>
);

const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <TopMenu />
            <Container fluid className="flex-grow-1 d-flex flex-column">
                <CenterSection />
            </Container>
            <BottomMenu />
        </div>
    );
};

export default Home;