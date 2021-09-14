import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItem from './BookItem';
import Modelbook from './Modelbook';
import Button from '@restart/ui/esm/Button';

//https://addnewbooks.herokuapp.com/

class BestBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Books: [],
      showModel:false

    }
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios.get(`https://addnewbooks.herokuapp.com/Book?email=${email}`)
      .then(result => {
        this.setState({
          Books: result.data
        })
      }).catch(err => {
        console.log('error');
      })

  }
//function addBook
  addBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email:email,
      status: event.target.status.value

    }
    axios
    .post(`https://addnewbooks.herokuapp.com/addBook`, obj)
      .then(result => {
        this.setState({
        Books: result.data
        })
      }).catch(err => {
        console.log('Error on adding Book');
      })
  }


  //function handelModel

  handelShowModel=()=>{
    this.setState({
      showModel:true
    })
  }
//Colse model
  close = () => {
    this.setState({
      showModel: false
    })
  }

  // function deleteBook
  deleteBook = (id) => {

    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .delete(`https://addnewbooks.herokuapp.com/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
        Books: result.data
        })
      }).catch(err => {
        console.log('Error on deleting Book');
      })
  }


  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      <Button onClick={this.handelShowModel}> Add  </Button>
     
        <BookItem 
       Book={this.state.Books}
       deleteBook={this.deleteBook}
       />

       <Modelbook show={this.state.showModel}
       handelShowModel={this.handelShowModel}
       addBook={this.addBook}
       close={this.close}/>
      </>
    )
  }
}

export default withAuth0(BestBooks);
