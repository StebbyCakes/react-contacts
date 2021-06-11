import { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import ContactsForm from './ContactsForm';

class App extends Component{
constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      counter: 2,
    }
    this.addContact = this.addContact.bind(this);
}
componentDidMount() {
  const contacts = [
    {
      id: 1,
      firstName: 'Esteban',
      lastName: 'Carter',
      address: '403 ErrorCity Wheretown, DK, 01010',
      phoneNumber: '888-888-8888'
    }
  ];
  this.setState({ contacts });
}

addContact(contact){
  contact.id = this.state.counter;
  const contacts = [ ...this.state.contacts ];
  contacts.push(contact);
  this.setState((state) => ({ contacts, counter: state.counter + 1 }));
}
render() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm addContact={this.addContact} />
      <ContactList contacts={this.state.contacts} />
    </div>
  );
}
}

export default App;
