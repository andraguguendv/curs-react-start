import React from 'react';
import {faChartLine, faEnvelopeOpen, faGlobeAmericas, faPeace} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from 'react-router-dom';
import classNames from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const navItems = [
    {
        label: 'home',
        path: 'home',
        icon: faChartLine,
        allowedRoles: [
            'user', 'publisher'
        ]
    },
    {
        label: 'departments',
        path: 'departments',
        icon: faGlobeAmericas,
        allowedRoles: [
            'user', 'publisher'
        ]
    },
    {
        label: 'transactions',
        path: 'transactions',
        icon: faEnvelopeOpen,
        allowedRoles: [
            'user', 'publisher'
        ]
    },
    {
        label: 'me',
        path: 'me',
        icon: faPeace,
        allowedRoles: [
            'user', 'publisher'
        ]
    }
];

const NavItem = ({navItem}) => {
    const location = useLocation();
    const isCurrentRoute = location.pathname === `/${navItem.path}`;
    const classes = classNames({
        'px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex': true,
        'text-gray-600 hover:text-blue-500 transform hover:translate-x-1 transition ease-in-out duration-100': !isCurrentRoute,
        'bg-gradient text-black font-bold shadow-lg': isCurrentRoute
    })
    return (
        <Link to={navItem.path} className={classes}>
            <div className="flex items-center">
                <div className="mr-o sm:mr-4">
                    <FontAwesomeIcon icon={navItem.icon}/>
                </div>
                <span className="hidden sm:block">
                    {navItem.label}
                </span>
            </div>
        </Link>
    )
}

const NavItemContainer = ({children}) => (
    <div>{children}</div>
)

const SideNav = () => {
    return (
        <section className="h-screen">
            <div className="w-16 sm:w-24 m-auto">
            </div>
            <div className="mt-20">
                {navItems.map((navItem, i) => (
                    <NavItemContainer key={i}>
                        <NavItem navItem={navItem}/>
                    </NavItemContainer>
                ))}
            </div>
        </section>
    )
}

export default SideNav;
