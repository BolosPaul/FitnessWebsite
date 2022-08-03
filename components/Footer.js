import styles from '../styles/Home.module.css'
import * as React from 'react';
import Container from '@mui/material/Container';
import { SpaOutlined } from '@mui/icons-material';

function Footer(){
    return (
        <Container maxWidth="xxl" className={`${styles.Footer} ${styles.flexcontainer}`}>
          <p>© Copyright 2022. This website was Built by <span><a href='https://bolospaul.github.io'>Bolos Paul.</a></span></p>
        </Container>
    )
}

export default Footer;