import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      userMessage: 'Must provide first and last name, and at least one contact method'
    }
  }

  checkDuplicateContacts(contact) {    
    for (var value of this.state.contacts) {
      if (value.firstName === contact.firstName && value.lastName === contact.lastName) {
        return true;
      }
    }
    return false;
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      this.setState({
        userMessage: 'Must provide a first and last name'
      });
      return;
    }

    if (!this.state.email && !this.state.phone && !this.state.address) {
      this.setState({
        userMessage: "Must provide at least one contact method"
      });
      return;
    }

    if (this.state.email) {
      // regex source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(this.state.email)) {
        this.setState({
          email: '',
          userMessage: 'Email address invalid'
        });
        return;
      }
    }

    if (this.state.phone) {
      // regex source: https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
      var phoneNumRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
      if (!phoneNumRegex.test(this.state.phone)) {
        this.setState({
          phone: '',
          userMessage: 'Phone number invalid'
        })
      }
    }

    if (this.state.address) {
      if (this.state.address.length < 5) {
        this.setState({
          address: '',
          userMessage: 'Address invalid'
        });
        return;
      }
    }

    var newContact = {};
    newContact.firstName = this.state.firstName;
    newContact.lastName = this.state.lastName;
    newContact.email = this.state.email;
    newContact.phone = this.state.phone;
    newContact.address = this.state.address;

    if (this.checkDuplicateContacts(newContact)) {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        userMessage: 'Contact already exists!'
      });
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, newContact],
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      userMessage: 'Contact information submitted!'
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Springfield Recreation Contact List</h2>
        </div>
        <p className="App-intro">
          To get on the list, enter your information below!
        </p>
        <div className="Contact-submit">
          <form onSubmit={this.onSubmit}>
            <p>
              <label>First Name:</label>
              <input value={this.state.firstName} name="firstName" onChange={this.onChange} />
            </p>
            <p>
              <label>Last Name:</label>
              <input value={this.state.lastName} name="lastName" onChange={this.onChange} />
            </p>
            <p>
              <label>Email:</label>
              <input value={this.state.email} name="email" onChange={this.onChange} />
            </p>
            <p>
              <label>Phone Number:</label>
              <input value={this.state.phone} name="phone" onChange={this.onChange} />
            </p>
            <p>
              <label>Address:</label>
              <input value={this.state.address} name="address" onChange={this.onChange} />
            </p>
            <button>Submit</button>
          </form>
        </div>
        <div className="User-message">
            <p>
              {this.state.userMessage}
            </p>
          </div>
        <p className="Contact-list">
          Current contacts:
        </p>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
