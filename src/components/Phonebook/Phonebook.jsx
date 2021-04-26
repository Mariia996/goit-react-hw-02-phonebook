import React, { Component } from 'react';
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import shortid from 'shortid';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import ContactList from '../ContactList/ContactList';
import styles from './Phonebook.module.css';

class App extends Component {
    state = {
        contacts: [
            {id: shortid.generate() , name: 'Rosie Simpson', number: '459-12-56'},
            {id:  shortid.generate(), name: 'Hermione Kline', number: '443-89-12'},
            {id: shortid.generate(), name: 'Eden Clements', number: '645-17-79'},
            {id:  shortid.generate(), name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    addContact = ({ name, number }) => {

        this.setState(prevState => {
            const { contacts } = prevState;
            const result = contacts.find(contact => {
                return (contact.name === name || contact.number === number)
            });
            if (result) {
                alert(`${name} is already in contacts`);
                return {
                    contacts
                }
            }
            const contact = {
                id: shortid.generate(),
                name,
                number,
            }
            return {
                contacts: [...prevState.contacts, contact]
            }
        });
    }


    handleFilter = ({ value }) => {
        this.setState({
            filter: value
        })
    }

    getFilterContacts = () => {
        const { contacts, filter } = this.state;
        if (!filter) {
            return contacts;
        }
        const filteredContacts = contacts.filter(({ name }) => name.includes(filter))
        return filteredContacts;
    }

    deleteContacts = (idx) => {
        this.setState(prevState => {
            const { contacts } = prevState;
            const newContactsList = [...contacts];
            newContactsList.splice(idx, 1)

            return {
                contacts: newContactsList
            }
        })
    }

    render() {
        const contacts = this.getFilterContacts();
        const { handleFilter, addContact, deleteContacts } = this;
       return (<>
           <h2 className={styles.title}>Phonebook</h2>
           <FormAddContacts onSubmit={addContact}/>
           <h2 className={styles.title}>Contacts</h2>
           <ContactsFilter handleChange={handleFilter} />
           <ContactList contacts={contacts} deleteContacts={deleteContacts}/>
        </>
        )}
}
export default App;