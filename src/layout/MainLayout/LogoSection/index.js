import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import Logo from '../../../components/Logo/Logo';

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={'/'}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
