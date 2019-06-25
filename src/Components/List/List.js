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

  const remove = () => {
    return props.deleteContact(props.index);
  };

  const renderNormal = () => {
    return (
      <div className="single-list">
        {props.children}
        <button onClick={edit}>
          <i className="mdi mdi-account-edit" />
        </button>
        <button onClick={remove}>
          <i className="mdi mdi-delete" />
        </button>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="single-list">
        <input type="text" defaultValue={props.children[0].props.name} />
        <input type="text" defaultValue={props.children[0].props.number} />
        <button onClick={save}>
          <i className="mdi mdi-content-save-edit" />
        </button>
      </div>
    );
  };

  if (!editState.editing) {
    return renderNormal();
  } else {
    return renderForm();
  }
}
export default List;
