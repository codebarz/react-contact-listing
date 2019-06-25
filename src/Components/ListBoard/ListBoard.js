import React, { useState } from 'react';

import List from '../List/List';

import './ListBoard.css';

function ListBoard() {
  const [contactState, setContactState] = useState({
    contact: [
      { name: 'Oke Tega', number: '08051812473' },
      { name: 'Tosin Ainah', number: '08157214803' },
      { name: 'Joseph Oke', number: '08034972063' }
    ]
  });

  const deleteForm = index => {
    let contact = contactState.contact;
    contact.splice(index, 1);
    setContactState({ contact });
  };

  return (
    <div className="display">
      <button className="add-new-button">
        <i className="mdi mdi-plus" />
      </button>
      {contactState.contact.map((contact, index) => {
        return (
          <List deleteContact={deleteForm} key={index} index={index}>
            <span className="contact-name">{contact.name}</span>
            <span className="contact-number">{contact.number}</span>
          </List>
        );
      })}
    </div>
  );
}

export default ListBoard;
