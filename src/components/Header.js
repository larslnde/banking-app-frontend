import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Banking App</h1>
        <NavLink to="/Dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/new-application" activeClassName="is-active">New Application</NavLink>
    </header>
);

export default Header;