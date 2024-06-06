import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, Form, Container } from 'react-bootstrap';

Modal.setAppElement('#root'); // Required for accessibility

const Page = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    closeModal();
  };

  return (
    <Container className="text-center mt-5">
      <h1>React Modal Login Example</h1>
      <Button variant="primary" onClick={openModal}>
        Open Login Modal
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '20px'
          },
        }}
        contentLabel="Login Modal"
      >
        <h2 className="text-center">Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Login
          </Button>
          <Button variant="secondary" onClick={closeModal} className="mt-2 w-100">
            Close
          </Button>
        </Form>
      </Modal>
    </Container>
  );
};

export default Page;
