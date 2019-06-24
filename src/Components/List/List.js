import React, { useState } from 'react';

import './List.css';

function List() {
  const [editState, setEditState] = useState({ editing: false });

  if (!editState.editing) {
    return (
      <div className="single-list">
        <span>tega</span>
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
