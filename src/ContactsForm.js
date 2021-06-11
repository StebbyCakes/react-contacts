import { Component } from 'react';

class ContactsForm extends Component{

  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    }

      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
      event.preventDefault();
      this.props.addContact({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
      });

      this.setState({ firstName: '', lastName: '', address: '', phoneNumber: '' });
    }
    render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInput}  />
        <br/>
        <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInput}  />
        <br/>
        <input type="text" name="address" placeholder="Enter Address" value={this.state.address} onChange={this.handleInput}  />
        <br/>
        <input type="text" name="phoneNumber" placeholder="Enter Phone Number" value={this.state.phoneNumber} onChange={this.handleInput}  />
        <br/>
        <button type="submit">Add Contact</button>
      </form>
    )
  }
}

export default ContactsForm;
