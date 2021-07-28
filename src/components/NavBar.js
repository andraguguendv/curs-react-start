import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between px-4">
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/transactions">Transactions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
