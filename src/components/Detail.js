import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Detail() {
    const newsId = useParams();
    const [newsItem, setNewsItem] = useState({});
    useEffect(() => {
        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news/${newsId.id}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsItem(data)
                console.log(data)

            })
            .catch((error) => console.log(error));
    }, [newsId]);
    return (
        <div>
            <h1>{newsItem.title}</h1>
            <p>{newsItem.description}</p>
            <p>{newsItem.content}</p>

            <img src={newsItem.img} alt={newsItem.title} />

            <p>views:{newsItem.views}</p>
            <>attractive:{newsItem.attractive
                ? <>True</>
                : <>False</>}
            </>
        </div>
    )
}
