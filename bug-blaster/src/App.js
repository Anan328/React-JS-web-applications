import "./App.css";
import "./styles.css";
import { useEffect, useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import sortingTickets from "./utilities/sortingUtilities";


function App() {
  const initialState = { tickets: [], editingTicket: null, sortPreference:"High to Low"};
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortingTickets(state.tickets,state.sortPreference);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("savedTickets")) || [];
    dispatch({ type: "SET_TICKETS", payload: savedTickets });
  }, [dispatch]);

  useEffect(() => {
    if (state.tickets.length > 0)
    localStorage.setItem("savedTickets", JSON.stringify(state.tickets));
  }, [state.tickets]);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}/>
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <select value={state.sortPreference} onChange={(e)=>dispatch({type:"SET_SORTING", payload: e.target.value })}>
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
