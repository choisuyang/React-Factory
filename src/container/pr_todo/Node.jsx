import React from "react";

export default ({ message, id, deleteNote }) => (
  <div>
    <p>
      message : {message} \ Id : {id}
    </p>
    <div>
      <button onClick={() => deleteNote(id)}>delete</button>
    </div>
  </div>
);
