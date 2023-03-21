import { ExpandMore } from '@mui/icons-material';
import { Card, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://6418728e75be53f451dfc104.mockapi.io/news?bestseller=true') // order=desc : giam dan , asc: tang dan
            .then((response) => response.json())
            .then((data) => {
                setNews(data)
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Grid container>
                {news.map((item) => {
                    return (
                        <>
                            <Grid xs={3} key={item.id}>
                                <Card style={{ border: 'solid 2px gray', margin: '15px' }}>
                                    <img style={{ height: '300px' }} alt='' variant="top" src={item.image} />
                                    <h5>{item.name}</h5>
                                    <p>{item.price}</p>
                                    <Link to={`/detail/${item.id}`}>
                                        <button>Detail</button>
                                    </Link>
                                </Card>

                            </Grid>
                        </>
                    )
                })}
            </Grid>


        </>
    )
}
