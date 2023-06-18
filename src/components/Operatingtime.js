import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';


function Operatingtime({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
            <ListGroup.Item>Monday| {timedata.Monday} </ListGroup.Item>
            <ListGroup.Item>Monday| {timedata.Tuesday} </ListGroup.Item>
            <ListGroup.Item>Monday| {timedata.Wednesday} </ListGroup.Item>
            <ListGroup.Item>Monday| {timedata.Thursday} </ListGroup.Item>
            <ListGroup.Item>Monday| {timedata.Friday} </ListGroup.Item>
            <ListGroup.Item>Monday| {timedata.Saturday} </ListGroup.Item>
            <ListGroup.Item>Monday| {timedata.Sunday} </ListGroup.Item>


            </ListGroup>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Operatingtime