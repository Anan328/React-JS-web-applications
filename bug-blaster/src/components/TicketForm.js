import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../styles.css";

export default function TicketForm({dispatch, editingTicket}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(()=>{
    if(editingTicket){
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    }else{
      clearForm();
    }
  },[editingTicket]);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const cancelEdit = ()=>{

    clearForm();
    dispatch({
      type: "CLEAR_EDITING_TICKET"
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const ticketData = {
      id: editingTicket ? editingTicket.id : uuidv4(), //new Date().toISOString(),
      title, // title : title
      description,
      priority  
    };
    dispatch({
      type: editingTicket ?  'UPDATE_TICKET' : 'ADD_TICKET',
      payload: ticketData
    })
    clearForm();
    // console.log(ticketData);
  };

  

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
      </div>

      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          className="form-input"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            ></input>
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
      {editingTicket && (
        <button type="button" className="button" onClick={()=>cancelEdit()}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}
