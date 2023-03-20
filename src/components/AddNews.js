import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AddNews() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('');
    const [creted, setCreated] = useState('');
    const [status, setStatus] = useState(false);
    const [views, setViews] = useState(1);
    const [attractive, setAttractive] = useState(false);

    const [formData, setFormData] = useState({
        title: title,
        description: description,
        content: content,
        img: img,
        creted: creted,
        status: status,
        views: views,
        attractive: attractive,
    })
    const handleFormData = () => {
        setFormData({
            title: title,
            description: description,
            content: content,
            img: img,
            creted: creted,
            status: status,
            views: views,
            attractive: attractive,
        })
    }
    const handleSubmit = () => {

        console.log(formData)

        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`, {
            method: 'POST',
            body: JSON.stringify(formData), headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Status: ${response.status}`)
            }
            return response.json()
        })
            .then(data => { console.log(data) })
            .catch(error => console.log(error.message));

    }
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', width: '30%', margin: 'auto' }}>
                <h3>Add news</h3>
                <TextField
                    autoFocus
                    margin="dense"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setTitle(e.target.value); }}
                />
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
                <TextField
                    autoFocus
                    margin="dense"
                    name="content"
                    label="Content"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setContent(e.target.value); }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="img"
                    label="Img URL"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setImg(e.target.value); }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="creted"
                    label="creted"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setCreated(e.target.value); }}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Status"
                    labelPlacement="start"
                    onChange={(e) => { setStatus(e.target.checked); }}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="views"
                    label="Views"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setViews(e.target.value); }}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Attractive"
                    labelPlacement="start"
                    onChange={(e) => { setAttractive(e.target.checked); handleFormData(); }}

                />

                <Button onClick={() => { handleSubmit() }}>Submit</Button>
            </Grid>



        </>
    )
}
