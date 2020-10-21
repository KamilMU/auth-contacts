import React, { useState } from 'react';
import ContactsList from './ContactsList';
import styles from './ContactsPage.module.css'
import EditForm from './EditForm';
import { validateEmail } from './validation';

function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [searchedContacts, setSearchedContacts] = useState([])
  const [searched, setSearched] = useState(false)
  const [editButtonClicked, setEditButtonClicked] = useState(false)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  function addContact() {
    if (name !== '' && phoneNumber !== '' && email !== '') {
      setContacts([
        ...contacts, {
          id: Date.now(),
          name,
          phoneNumber,
          email
        }
      ])
    }
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => {
      return contact.id !== contactId
    }))
  }

  function searchContact(inputText) {
    if (inputText !== '') return setSearched(true)

    setSearched(false)
    setSearchedContacts(contacts.filter(contact => {
      return contact.name.toLowerCase().toString().search(inputText.toLowerCase() !== -1)
    }))
  }

  return (
    <>
      <div className={styles.contactsPage}>
        <input
          type="text"
          placeholder="Search Contact..."
          onChange={e => searchContact(e.target.value)}
        />
        <div>Add Contact</div>
        <form
          action=""
          type="submit"
          onSubmit={e => {
            e.preventDefault();
            addContact()
          }}>
          <div>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div>{validateEmail(email)}</div>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                if (validateEmail(email) === '') {
                  addContact()
                }
              }}>
              Add Contact
            </button>
          </div>
        </form>
        <ContactsList
          searched={searched}
          searchedContacts={searchedContacts}
          contacts={contacts}
          deleteContact={deleteContact}
          setEditButtonClicked={setEditButtonClicked}
        />
      </div>
      {editButtonClicked && (
        <EditForm
          name={name}
          phoneNumber={phoneNumber}
          email={email}
          setEditButtonClicked={setEditButtonClicked}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
        />
      )}
    </>
  );
}

export default ContactsPage;