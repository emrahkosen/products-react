import React from "react";
import classes from "./Table.module.css";

const Row = ({ message }) => {
  const handleOpenMessage = () => {};
  return (
    <tr key={message.id} className={classes.row} onClick={handleOpenMessage}>
      <td>{message.id}</td>
      <td>{message.subject}</td>
      <td>{message.type}</td>
      <td>{message.class}</td>
      <td>{message.date}</td>
    </tr>
  );
};

export default Row;
