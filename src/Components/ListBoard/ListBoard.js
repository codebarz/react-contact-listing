import React from 'react';

import List from '../List/List';

import './ListBoard.css';

function ListBoard() {
  return (
    <div className="display">
      <button className="add-new-button">
        <i className="mdi mdi-plus" />
      </button>
      <List />
    </div>
  );
}

export default ListBoard;
