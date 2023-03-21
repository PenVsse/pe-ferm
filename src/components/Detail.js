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
        <div>
            <img style={{ height: '400px' }} src={productItem.image} alt='' />
            <h1>{productItem.name}</h1>
            <p>Description: {productItem.description}</p>
            <p>Price: {productItem.price}$</p>
            <p>Bestseller: {productItem.bestseller}</p>
            <p>Rating: {productItem.rating}</p>
            <p>Category: {productItem.category}</p>

        </div>
    )
}
