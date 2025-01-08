function sortingTickets(tickets,prefrence) {
    switch(prefrence){
        case "High to Low":
            return tickets.sort((a, b) => b.priority.localeCompare(a.priority))
        case "Low to High":
            return tickets.sort((a, b) => a.priority.localeCompare(b.priority))
        default: 
            return tickets
    }
}

export default sortingTickets