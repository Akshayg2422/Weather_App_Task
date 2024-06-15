import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Weather Dashboard</h1>
            <div className={'cloud'}>   </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/event-planner">Event Planner</NavLink>
                <NavLink to="/farmer">Farmer</NavLink>
            </nav>

        </header>
    );
};

export default Header;
