import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = ['Home', 'BMI', 'Plans'];

function Navbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className={styles.drawer}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* <Image src={LOGO} width={100} height={80} responsive={true}/> */}
        <div className={styles.logo}></div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={`#${item}`}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ background: 'rgb(34, 34, 34)', color: 'white', height: '6rem'}} className={styles.AppBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, padding: '1rem 0em 0 4rem' }}>
                    {/* <img src={Logo} alt="Fitness Center"/> */}
                    {/* <Image src={LOGO} width={100} height={80} responsive={true}/> */}
                    <div className={styles.logo}></div>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, padding: '1rem 3rem 0 4rem', margin: '0 1rem 0 0'}}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff'}} href={`#${item}`} className={styles.navbartext}>
                        {item}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: "rgb(34, 34, 34);"
                  }
                }}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
            </Box>
      </Box>
    )
}

export default Navbar;