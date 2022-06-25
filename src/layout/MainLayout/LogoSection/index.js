import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
// import Logo from '../../../components/Logo/Logo';
import Logo from '../../../assets/logo.svg'
import { useTheme } from '@mui/material';

const LogoSection = () => {
    const themes = useTheme()
    return (
        <ButtonBase disableRipple component={Link} to={'/'}>
            {/* <Logo /> */}
            <img src={Logo} style={{ width: 50 }} />
            <h3
                style={{
                    marginLeft: 10,
                    color: themes.palette.primary.main
            }}
            >Auction</h3>
        </ButtonBase>
    )
};

export default LogoSection;
