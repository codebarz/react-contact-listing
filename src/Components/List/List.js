import React, { useState } from 'react';

import './List.css';

function List(props) {
  const [editState, setEditState] = useState({ editing: false });

  const edit = () => {
    setEditState({ editing: true });
  };

  const save = () => {
    setEditState({ editing: false });
  };

  if (!editState.editing) {
    return (
      <div className="single-list">
        {props.children}
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
        <input type="text" />
        <button onClick={save}>
          <i className="mdi mdi-content-save-edit" />
        </button>
      </div>
    );
  }
}

export default List;
