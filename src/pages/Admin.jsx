import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiSupport } from 'react-icons/bi'
import { LuBellDot } from 'react-icons/lu'
import { AiOutlineUser } from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Logout } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const links = [
    { label: 'Dashboard', url: '#' },
    { label: 'Campaigns', url: '#' },
    { label: 'Commands', url: '#' },
    { label: 'Zones', url: '#' },
    { label: 'Channels', url: '#' },
    { label: 'Devices', url: '#' },
    { label: 'Media Library', url: '#' },
    { label: 'History', url: '#' },
];

const AdminHome = () => {
    const [path, setPath] = useState('Dashboard');
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const Navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const LogOut = () =>{
        localStorage.removeItem('token')
        Navigate('/')
    }



    return (
        <>
            <div className='admin-home'>
                <Box sx={{ display: 'flex', backgroundColor: '#F6F6F6' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start', backgroundColor: '#ffff' }}>
                        <Toolbar>
                            <IconButton
                                color="black"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            {!open && (
                                <Typography variant="h6" noWrap component="div" style={{ color: 'black' }}>
                                    <img src="/futureIK.png" alt="" width={100} height={100} />
                                </Typography>
                            )}

                        </Toolbar>
                        <div className="flex items-center ms-auto my-auto">
                            <BiSupport className='h-6 w-6 text-mainClr mr-4 cursor-pointer' />
                            <LuBellDot className='h-6 w-6 text-mainClr mr-4 cursor-pointer' />
                            <AiOutlineUser className='h-6 w-6 text-mainClr mr-4 cursor-pointer' />

                        </div>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                backgroundColor: '#0B3366'
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            {open && (
                                <Typography variant="h6" noWrap component="div" style={{ color: 'black' }} className='mx-auto my-auto mt-4 w-full'>
                                    <img src="/futureIK.png" alt="" width={100} height={100} className='mt-4 mx-auto' />
                                </Typography>
                            )}
                        </DrawerHeader>
                        <Divider />

                        <List>
                            {links.map((page) => (
                                <ListItem key={page.label} disablePadding className={`${page.label === path ? 'bg-[#082A56]' : ''} p-2`}>
                                    <ListItemButton>
                                        <span className="me-3">
                                            <img src={`/icons/${page.label}.png`} alt="" />
                                        </span>
                                        <ListItemText primary={page.label} className='text-white' />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <ListItemButton onClick={LogOut}>
                                <ListItemIcon>
                                    <FiLogOut className='text-white ms-3 h-10 w-5'/>
                                </ListItemIcon>
                                <ListItemText primary={'Log Out'} className='text-white' />
                            </ListItemButton>
                        </List>
                        <IconButton onClick={handleDrawerClose} className='ms-auto'>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon className='bg-white' /> : <ChevronRightIcon />}
                        </IconButton>
                        <Divider />
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader />
                        <div className='home-container bg-[#F6F6F6] '>
                            <Dashboard />
                        </div>
                    </Main>
                </Box>
            </div>
        </>
    );
};

export default AdminHome;
