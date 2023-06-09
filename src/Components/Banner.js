import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './styles/Banner.module.css'
import headshot from '../assets/headshot.png'

export default function Banner(props) {
    return(
        <Box component='a' href='/my-resume/' 
        sx={{display:'flex', 
        flexDirection: 'row',
        flexGrow: 1, 
        maxWidth: '100%', 
        marginBottom: '2rem',
        minHeight: '25vh',
        }}>
            <div className={styles.BannerText}>
                    <img className={styles.BannerImage} src={require('../assets/balcony.jpg')} alt="Jason Background"/>
                <div className={styles.Text}>
                    <img src = {require('../assets/headshot.png')} alt='Jason Profile' />
                    <Typography variant='h2'fontWeight={360}>jabekengineer</Typography>
                    <Typography variant='h5' fontWeight={800} 
                    sx={{
                        opacity:'60%'
                    }}>
                        MY ENGINEERING PORTFOLIO</Typography>
                </div>
            </div>
        </Box>
    )
}