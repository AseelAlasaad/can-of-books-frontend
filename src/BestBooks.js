import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
 import BookItem from './BookItem';

class BestBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Books: []

    }
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios.get(`http://localhost:3010/Book?email=${email}`)
      .then(result => {
        this.setState({
          Books: result.data         
        })
      }).catch(err => {
        console.log('error');
      })

  }
  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
       <BookItem 
       Book={this.state.Books}/>
       
      </>
    )
  }
}

export default withAuth0(BestBooks);
