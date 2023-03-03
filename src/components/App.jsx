import { nanoid } from "nanoid";
import { Component } from "react"
import { getFromLocal, saveToLocal } from "services/Storage/Storage";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: getFromLocal('contacts') ? getFromLocal('contacts') : [],
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveToLocal('contacts', this.state.contacts)
    }
  }
  
  onContactFormSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = evt.target.elements;
    const { contacts } = this.state;

    const inContacts = contacts.find(contact => contact.name.toLocaleLowerCase() === name.value.toLocaleLowerCase());
    if (inContacts) {
      alert(`${inContacts.name} is already in contacts`)
      return
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, {
          id: nanoid(),
          name: name.value,
          number: number.value,
        }]
      }
    })
  };

  filterContacts = (evt) => {
    const contactToFind = evt.target.value;
    this.setState({
      filter: contactToFind,
    })
  };

  findContact = (contactName) => {
    const contacts = this.state.contacts;
    return contacts.filter(({ name }) => name.toLowerCase().includes(contactName.toLowerCase()));
  };

  onDeleteBtnClick = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => id !== contact.id);

    this.setState({
      contacts: [...updatedContacts],
    })
  };

  render() {
    const {filter, contacts } = this.state;
    
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.onContactFormSubmit} />

          <h2>Contacts</h2>
          <Filter onChange={this.filterContacts} />
          <ContactList contacts={filter ? this.findContact(filter) : contacts} onClick={this.onDeleteBtnClick} />
        </Section>
      </div>
    );
  };
};
