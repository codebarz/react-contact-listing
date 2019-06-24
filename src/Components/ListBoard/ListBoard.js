import React, { useState } from 'react';

import List from '../List/List';

import './ListBoard.css';

function ListBoard() {
  const [contactState, setContactState] = useState({
    contact: [
      { name: 'Oke Tega', number: '08051812473' },
      { name: 'Tosin Ainag', number: '08157214803' },
      { name: 'Joseph Oke', number: '08034972063' }
    ]
  });

  return (
    <div className="display">
      <button className="add-new-button">
        <i className="mdi mdi-plus" />
      </button>
      <List>
        {contactState.contact.map(contact => {
          return contact;
        })}
      </List>
    </div>
  );
}

export default ListBoard;
