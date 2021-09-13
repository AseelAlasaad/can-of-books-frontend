import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookItem.css';
class BookItem extends React.Component{
    render(){
      
        return(
         <div>
         
        <Carousel>
              {this.props.Book.map((item,key)=>
              
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.imgUrl}
                  alt="First slide"
               
                  width='600'
                   height= '500'
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.email}</p>
                  <p>{item.status}</p>
                </Carousel.Caption>
               
              </Carousel.Item>
            

              )}
        
         </Carousel>
         </div>
        )
    }
}
export default BookItem;