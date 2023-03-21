import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';


export default function ButtonAppBar() {
    const [user, setUser] = React.useState(undefined);
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                setUser(res.user)
                localStorage.setItem('user', JSON.stringify(res.user))
                console.log(res.user)
                return ((window.location.href = `/dashboard`))
            }).catch((error) => {
                console.log(error)
            })
    };
    const handleLogout = () => {
        setUser(undefined)
        localStorage.removeItem('user')
    };

    React.useEffect(() => {
        const currentUser = localStorage.getItem('user')
        if (currentUser && currentUser !== '{}') setUser(JSON.parse(currentUser))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button href='/' color="inherit">Home</Button>
                    <Button href='/news' color="inherit">News</Button>
                    <Button href='/contact' color="inherit">Contact</Button>
                    {user ? <>
                        <Button style={{ position: 'absolute', right: '5%' }} onClick={handleLogout} color="inherit">Logout</Button>

                    </> : <>
                        <Button style={{ position: 'absolute', right: '5%' }} onClick={signInWithGoogle} color="inherit">Login</Button>

                    </>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}