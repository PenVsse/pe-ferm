import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
export default function NewsList() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState(0);


    const handleClickOpenDialog = (id) => {
        setOpenDialog(true);
        setDeleteId(id);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`)
            .then((response) => response.json())
            .then((data) => {
                setNews(data)
            })
            .catch((error) => console.log(error));
    }, []);
    const handleDelete = () => {
        fetch(`https://6418728e75be53f451dfc104.mockapi.io/news/${deleteId}`, {
            method: 'DELETE',
        }).then((response) => response.json())
            .then((data) => {
                setOpenDialog(false);
                fetch(`https://6418728e75be53f451dfc104.mockapi.io/news`)
                    .then((response) => response.json())
                    .then((data) => {
                        setNews(data)
                    })
                    .catch((error) => console.log(error));
                // return ((window.location.href = `/dashboard`))
                alert('Delete successfully!')
            })
            .catch((error) => console.log(error));
    };
    return (
        <div><h2>News List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Category</th>
                        <th>Bestseller</th>
                        <th>Image URL</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                        <tr key={item.id} >
                            <td style={{ width: '20%' }}>{item.name}</td>
                            <td >{item.price}</td>
                            <td>{item.rating}</td>
                            <td>{item.category}</td>
                            <td>{item.bestseller === true ? 'True' : 'False'}</td>
                            <td><img style={{ width: '40px' }} src={item.image}></img></td>
                            <td>
                                {/* <Link to={`/news/${item.id}`}>View</Link>
                                <Link to={`/news/${item.id}/edit`}>Edit</Link> */}
                                <IconButton onClick={() => handleClickOpenDialog(item.id)}>
                                    <DeleteIcon></DeleteIcon>
                                </IconButton>


                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {<Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure to Delete this new ?"}
                </DialogTitle>
                {/* <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Disagree</Button>
                    <Button onClick={handleDelete}>Agree</Button>
                </DialogActions>
            </Dialog>}
        </div>
    )
}
