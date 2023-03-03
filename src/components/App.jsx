import { nanoid } from "nanoid";
import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export class App extends Component  {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
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
