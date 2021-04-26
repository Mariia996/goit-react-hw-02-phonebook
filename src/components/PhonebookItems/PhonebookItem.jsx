import React from 'react'
import styles from './PhonebookItems.module.css';

const PhonebookItems = ({ name, number, deleteContacts }) => {
    return (<div className={styles.contactItem}>
        <li>{name}: {number}</li>
        <button onClick={deleteContacts} className={styles.btn}>Delete</button>
    </div>)
}

export default PhonebookItems;