import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookItem.css';
class BookItem extends React.Component {
  render() {

    return (
      <div>
        <Row xs={1} md={3} className="g-4">
        {this.props.Book.map(item=>
            <Col>
             <Card style={{ width: '18rem' }}>
             <Card.Body>
               <Card.Title> {item.title}</Card.Title>
               <Card.Text>
               {item.description}
               {item.email}
               
               {item.status}
               </Card.Text>
              
             </Card.Body>
             <Button variant="primary" onClick={()=>this.props.deleteBook(item._id)}> Delete</Button>
             
             <Button variant="primary" onClick={()=>this.props.handelupdateForm(item)}> Update</Button>
           </Card>
           </Col>
          )}</Row>
     
      </div>
    )
  }
}
export default BookItem;