import React from 'react';
import styles from './EditForm.module.css';

function EditForm({ 
  name, 
  phoneNumber, 
  email, 
  setEditButtonClicked,
  setName, 
  setPhoneNumber,
  setEmail 
}) {
  return (
    <div className={styles.editForm}>
      <span onClick={() => setEditButtonClicked(false)}>x</span>
      <div>Edit Contact</div>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default EditForm;