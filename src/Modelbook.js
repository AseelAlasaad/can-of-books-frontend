import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
class Modelbook extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handelShowModel}>
                    <Modal.Header>
                        <Modal.Title>Add Book To Fav</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.addBook} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter book title" />

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" placeholder="description" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                
                            <Form.Label>status</Form.Label>
                                <Form.Control type="text" name="status" placeholder="status" />
                                {/* <Form.Select>

                                    <option value="Life Changing" name="status">Life Changing</option>
                                    <option value="Favonte Five" name="status">Favonte Five</option>
                                    <option value="Reccomended To Me" name="status">Reccomended To Me </option>
                                    
                                   
                                </Form.Select> */}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                save Changes
                            </Button>
                        </Form>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>






            </div>
        );
    }
}

export default Modelbook;