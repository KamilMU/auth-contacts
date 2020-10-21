import React from 'react';

function ContactsList({ searched, searchedContacts, contacts, deleteContact, setEditButtonClicked }) {
  return (
    <ul>
    {searched ? searchedContacts.map(contact => (
      <li key={contact.id}>
        <div>{contact.name}</div>
        <div>{contact.phoneNumber}</div>
        <div>{contact.email}</div>
        <button onClick={() => deleteContact(contact.id)}>x</button>
        <button onClick={() => setEditButtonClicked(true)}>Edit Contact</button>
      </li>
    )) : contacts.map(contact => (
      <li key={contact.id}>
        <div>{contact.name}</div>
        <div>{contact.phoneNumber}</div>
        <div>{contact.email}</div>
        <button onClick={() => deleteContact(contact.id)}>x</button>
        <button onClick={() => setEditButtonClicked(true)}>Edit Contact</button>
      </li>
    ))}
  </ul>
  );
}

export default ContactsList;