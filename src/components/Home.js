import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://6418728e75be53f451dfc104.mockapi.io/news?sortBy=views&order=asc') // order=desc : giam dan , asc: tang dan
            .then((response) => response.json())
            .then((data) => {
                setNews(data)
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <img src={item.img} alt={''} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Link to={`/detail/${item.id}`}>
                            <button>Detail</button>
                        </Link>
                    </li>
                ))}
            </ul>


        </>
    )
}
