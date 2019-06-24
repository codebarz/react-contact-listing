import React, { useState } from 'react';

import './List.css';

function List() {
  const [editState, setEditState] = useState({ editing: false });

  if (!editState.editing) {
    return (
      <div className="single-list">
        <span className="contact-name">tega</span>
        <span className="contact-number">08051812473</span>
        <button>
          <i className="mdi mdi-account-edit" />
        </button>
        <button>
          <i className="mdi mdi-delete" />
        </button>
      </div>
    );
  }
}

export default List;
