import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItem from './BookItem';
import Modelbook from './Modelbook';
import Button from '@restart/ui/esm/Button';
import UpdateBook from './UpdateBook';

//https://addnewbooks.herokuapp.com/

class BestBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Books: [],
      showModel:false,
      title:'',
      idBook:'',
      description:'',
      status:'',
      showForm:false

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


  

  handelupdateForm=(item)=>{
    this.setState({
      showForm:true,
      title:item.title,
      description:item.description,
      status:item.status,
      idBook:item._id
    })
  }

  //function UpdateBook
  updateBook=(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj1 = {
      title: event.target.title.value,
      description: event.target.description.value,
      email:email,
      status: event.target.status.value
      
    }
    console.log("fail");
    axios.put(`https://addnewbooks.herokuapp.com/updateBook/${this.state.idBook}`, obj1)
    .then(result=>{
      this.setState({
        Books:result.data,
        showForm:false
      })
    }).catch(error=>{
      console.log('Error on Update Book');
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
       handelupdateForm={this.handelupdateForm}
      
       />
       

       <Modelbook show={this.state.showModel}
       handelShowModel={this.handelShowModel}
       addBook={this.addBook}
       close={this.close}/>


<UpdateBook 
        show={this.state.showForm}
       
        close={this.close}
        title={this.state.title}
        description={this.state.description}
        status={this.state.status}
        updateBook={this.updateBook}
        
        />
      </>

     
    )
  }
}

export default withAuth0(BestBooks);
