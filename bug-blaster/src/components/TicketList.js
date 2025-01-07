import React from "react";
import "../styles.css";
import TicketItem from "./TicketItem";

const TicketList = ({tickets, dispatch}) => {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} dispatch={dispatch} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
