import React, { useState } from 'react';

import './List.css';

function List() {
  const [editState, setEditState] = useState({ editing: false });

  const edit = () => {
    setEditState({ editing: true });
  };

  if (!editState.editing) {
    return (
      <div className="single-list">
        <span className="contact-name">tega</span>
        <span className="contact-number">08051812473</span>
        <button onClick={edit}>
          <i className="mdi mdi-account-edit" />
        </button>
        <button>
          <i className="mdi mdi-delete" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="single-list">
        <input type="text" />
        <input type="number" />
        <button>
          <i className="mdi mdi-content-save-edit" />
        </button>
      </div>
    );
  }
}

export default List;
