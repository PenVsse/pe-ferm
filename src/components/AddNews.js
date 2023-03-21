import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function AddNews() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [category, setCategory] = useState('');
    const [bestseller, setBestseller] = useState(false);
    const [image, setImage] = useState('');


    // const [formData, setFormData] = useState({
    //     title: title,
    //     description: description,
    //     content: content,
    //     img: img,
    //     creted: creted,
    //     status: status,
    //     views: views,
    //     attractive: attractive,
    // })
    const [messname, setmessname] = useState('');
    const [messdescription, setmessdescription] = useState('');
    const [messcategory, setmesscategory] = useState('');
    const [messimage, settmessimage] = useState('');

    const handleSubmit = () => {
        const regex = /^.{6,}/i;
        if (!regex.test(name) || !regex.test(description) || !regex.test(category) || !regex.test(image)) {
            if (!regex.test(name)) {
                setmessname('Name must be more than 6 charecter!')
            } else {
                setmessname('')
            }
            if (!regex.test(description)) {
                setmessdescription('Description be more than 6 charecter!')
            } else {
                setmessdescription('')
            }
            if (!regex.test(category)) {
                setmesscategory('category be more than 6 charecter!')
            } else {
                setmesscategory('')
            }
            if (!regex.test(image)) {
                settmessimage('Img URL be more than 6 charecter!')
            } else {
                settmessimage('')
            }

        }
        else {
            fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    price: price,
                    description: description,
                    rating: rating,
                    category: category,
                    bestseller: bestseller,
                    image: image,

                }), headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
                .then(data => {
                    // return ((window.location.href = `/dashboard`))
                    alert('Add successfully!')
                })
                .catch(error => console.log(error.message));
        }

    }
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', width: '30%', margin: 'auto' }}>
                <h3>Add news</h3>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setName(e.target.value); }}
                />
                {messname && <Typography sx={{ color: 'red' }}>{messname}</Typography>}
                <TextField
                    autoFocus
                    margin="dense"
                    name="price"
                    label="price"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setPrice(e.target.value); }}
                />
                {/* {mess && <Typography sx={{ color: 'red' }}>{messcontent}</Typography>} */}

                <TextField
                    autoFocus
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setDescription(e.target.value); }}
                />
                {messdescription && <Typography sx={{ color: 'red' }}>{messdescription}</Typography>}



                <TextField
                    autoFocus
                    margin="dense"
                    name="rating"
                    label="rating"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setRating(e.target.value); }}
                />
                {/* {messrating && <Typography sx={{ color: 'red' }}>{messimg}</Typography>} */}

                <TextField
                    autoFocus
                    margin="dense"
                    name="category"
                    label="category"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setCategory(e.target.value); }}
                />
                {messcategory && <Typography sx={{ color: 'red' }}>{messcategory}</Typography>}

                <TextField
                    autoFocus
                    margin="dense"
                    name="image"
                    label="Image URL"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setImage(e.target.value); }}
                />
                {messimage && <Typography sx={{ color: 'red' }}>{messimage}</Typography>}

                <Typography sx={{ margin: '10px' }}>
                    Bestseller: <Checkbox
                        onChange={(e) => { setBestseller(e.target.checked); }}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Typography>



                <Button sx={{ width: '100%', bgcolor: '#1976d240' }} onClick={() => { handleSubmit() }}>Submit</Button>
            </Grid>



        </>
    )
}
