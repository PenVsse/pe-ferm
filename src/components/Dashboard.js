import React, { useEffect, useState } from 'react'
import NewsList from './NewsList';
import AddNews from './AddNews';


export default function Dashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsAuthenticated(true);
        }
    }, []);
    return (
        <div>
            {isAuthenticated ? (
                <>
                    <AddNews></AddNews>
                    <NewsList />
                </>
            ) : (
                <h3>You must be logged in to view this page !!!!</h3>
            )}</div>
    )
}
