import React from 'react'
import PhonebookItems from '../PhonebookItems/PhonebookItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {

    const contactElements = contacts.map(item => <PhonebookItems key={item.id} {...item} deleteContacts={deleteContacts}/>)
         return ( <ul className={styles.contactList}>
                {contactElements}
            </ul> );
}

export default ContactList;
