import { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
      }
      this.handleInput = this.handleInput.bind(this);
      this.saveContact = this.saveContact.bind(this);
    }
    saveContact() {
      this.setState({ firstName: '', lastName: '', address: '', phoneNumber: ''});
    }

    handleInput(event) {
      this.setState({[event.target.name]: event.target.value});
    }
    render() {
      const contacts = this.props.contacts.map((contact) => (
        <li key={contact.id}>
        <p>First Name: {contact.firstName}</p>
        <p>Last Name: {contact.lastName}</p>
        <p>Address: {contact.address}</p>
        <p>Phone Number: {contact.phoneNumber}</p>
        </li>
      ));

        return(
          <ol>{ contacts }</ol>
        )
      }
}



export default ContactList;
