import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
                                <Link to={`/news/${item.id}/edit`}>Edit</Link>
                                <Button onClick={() => handleClickOpenDialog(item.id)}>Delete</Button>
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
