import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledLink = ({ to, children }) => (
    <NavLink to={to} end={true} style={({ isActive }) => isActive ? ({ color: 'red' }) : undefined }>
        {children}
    </NavLink>
);
 
export default StyledLink;
