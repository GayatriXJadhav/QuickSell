import React, { useState, useEffect } from "react";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
    const [groupBy, setGroupBy] = useState("status"); // Default group
    const [sortBy, setSortBy] = useState("priority"); // Default sort
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching data from the API
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
            .then((response) => response.json())
            .then((data) => {
                setTickets(data.tickets);
                setUsers(data.users);
            });
    }, []);

    const handleGroupChange = (group) => {
        setGroupBy(group);
    };

    const handleSortChange = (sort) => {
        setSortBy(sort);
    };

    return (
        <div className="App">
            <Navbar
                onGroupChange={handleGroupChange}
                onSortChange={handleSortChange}
            />
            <Hero
                tickets={tickets}
                users={users}
                groupBy={groupBy}
                sortBy={sortBy}
            />
        </div>
    );
}

export default App;
