import React from "react";
import "../styles.css";


const TicketItem = ({ ticket, dispatch }) => {
  const { id, title, description, priority } = ticket;
  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };
  return (
    <div className="ticket-item" key={id}>
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() => {
        dispatch({ type: "DELETE_TICKET", payload: { id } });
        // dispatch({ type: "CLEAR_EDITING_TICKET" }); // logic handled in case: DELETE_TICKET in tickeReducer
        }
      }
        
      >
        Delete
      </button>

      <button
        className="button"
        onClick={() => dispatch({ type: "SET_EDITING_TICKET", payload: ticket })}
      >
        Edit
      </button>
    </div>
  );
};

export default TicketItem;
