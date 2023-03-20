import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function NewsList() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`)
            .then((response) => response.json())
            .then((data) => {
                setNews(data)
            })
            .catch((error) => console.log(error));
    }, []);
    const handleDelete = (id) => {
        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news/${id}`, {
            method: 'DELETE',
        }).then((response) => response.json())
            .then((data) => {
                alert('Delete Successfully')
                fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`)
                    .then((response) => response.json())
                    .then((data) => {
                        setNews(data)
                    })
                    .catch((error) => console.log(error));
                // return ((window.location.href = `/dashboard`))
            })
            .catch((error) => console.log(error));
    };
    return (
        <div><h2>News List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <Link to={`/news/${item.id}`}>View</Link>
                                <Link to={`/news/${item.id}/edit`}>Edit</Link><button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
    )
}
