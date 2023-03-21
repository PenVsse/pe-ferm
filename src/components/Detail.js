import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Detail() {
    const productid = useParams();
    const [productItem, setProductItem] = useState({});
    useEffect(() => {
        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news/${productid.id}`)
            .then((response) => response.json())
            .then((data) => {
                setProductItem(data)
                console.log(data)

            })
            .catch((error) => console.log(error));
    }, [productid]);
    return (
        <>
            <Grid container>
                <Card sx={{ maxWidth: '70%', margin: 'auto', marginTop: '2%', border: '1px solid black' }}>
                    <CardActionArea>
                        <img style={{ height: '250px' }} src={productItem.image} alt=''></img>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {productItem.name}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {productItem.description}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body3" color="text.secondary">Price: {productItem.price}$</Typography>

                        </CardContent>
                        {productItem.bestseller === true ? <>
                            <CardContent>
                                <Typography variant="body4" >*Bestseller</Typography>
                            </CardContent>
                        </> : <></>}

                        <CardContent>
                            <Typography variant="body4" color="text.secondary" >Rating: {productItem.rating}*</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body4" color="text.secondary" >Rating: {productItem.category}*</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Grid>

            {/* <img style={{ height: '400px' }} src={productItem.image} alt='' />
            <h1></h1>
            <p>Description: </p>
            <p>Price: </p>
            <p></p>
            <p>Rating: </p>
            <p>Category: </p> */}

        </>
    )
}
