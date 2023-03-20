import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
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
    const [messtitle, setmesstitle] = useState('');
    const [messdescription, setmessdescription] = useState('');
    const [messcontent, setmesscontent] = useState('');
    const [messcreted, setmesscreted] = useState('');
    const [messimg, setmessimg] = useState('');
    const [messviews, setmessviews] = useState('');

    const handleSubmit = () => {
        const regex = /^.{6,}/i;
        if (!regex.test(title) || !regex.test(description) || !regex.test(content) || !regex.test(img) || !regex.test(creted) || views <= 0) {
            if (!regex.test(title)) {
                setmesstitle('Title must be more than 6 charecter!')
            } else {
                setmesstitle('')
            }
            if (!regex.test(description)) {
                setmessdescription('Description be more than 6 charecter!')
            } else {
                setmessdescription('')
            }
            if (!regex.test(content)) {
                setmesscontent('Content be more than 6 charecter!')
            } else {
                setmesscontent('')
            }
            if (!regex.test(img)) {
                setmessimg('Img URL be more than 6 charecter!')
            } else {
                setmessimg('')
            }
            if (!regex.test(creted)) {
                setmesscreted('creted be more than 6 charecter!')
            } else {
                setmesscreted('')
            }
            if (views <= 0) {
                setmessviews('View must be geate than 1')
            } else {
                setmessviews('')
            }
        }
        else {
            fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`, {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description,
                    content: content,
                    img: img,
                    creted: creted,
                    status: status,
                    views: views,
                    attractive: attractive,
                }), headers: {
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
                {messtitle && <Typography sx={{ color: 'red' }}>{messtitle}</Typography>}
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
                    name="content"
                    label="Content"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setContent(e.target.value); }}
                />
                {messcontent && <Typography sx={{ color: 'red' }}>{messcontent}</Typography>}

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
                {messimg && <Typography sx={{ color: 'red' }}>{messimg}</Typography>}

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
                {messcreted && <Typography sx={{ color: 'red' }}>{messcreted}</Typography>}

                <TextField
                    autoFocus
                    margin="dense"
                    name="views"
                    label="Views"
                    type="number"
                    defaultValue={1}
                    fullWidth
                    variant="standard"
                    onChange={(e) => { setViews(e.target.value); }}
                />
                {messviews && <Typography sx={{ color: 'red' }}>{messviews}</Typography>}

                {/* <FormControlLabel
                    control={<Checkbox />}
                    label="Status"
                    labelPlacement="start"
                    onChange={(e) => { setStatus(e.target.checked); }}

                /> */}

                <Typography sx={{ margin: '10px' }}>
                    Status: <Checkbox
                        onChange={(e) => { setStatus(e.target.checked); }}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Typography>

                <Typography sx={{ margin: '10px' }}>
                    Attractive: <Checkbox
                        onChange={(e) => { setAttractive(e.target.checked); }}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Typography>

                {/* 
                <FormControlLabel
                    control={<Checkbox />}
                    label="Attractive"
                    labelPlacement="start"
                    onChange={(e) => { setAttractive(e.target.checked); }}

                /> */}

                <Button sx={{ width: '100%', bgcolor: '#1976d240' }} onClick={() => { handleSubmit() }}>Submit</Button>
            </Grid>



        </>
    )
}
