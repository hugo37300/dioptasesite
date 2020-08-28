import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import SvgLogoDioptase from "../_svg/LogoDioptase";

export default class NavBarMenu extends React.Component {
    render() {
        return (
            <div className="header">
                    <Navbar className="sidebar-location-wrapper sidebar-stock" dark expand="md">
                        <div className="menu-header">
                            <NavbarToggler/>
                            <Collapse navbar>
                                <Nav navbar>
                                    <NavbarBrand
                                        href="/"
                                        className="logo-header"
                                    >
                                        <SvgLogoDioptase height="2em" fill="#fff"/>
                                    </NavbarBrand>
                                    <NavItem>
                                        <NavLink
                                            href="/logiciels"
                                        >
                                            Logiciels
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/applications"
                                        >
                                            Applications
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/produits"
                                        >
                                            Produits
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/materiels"
                                        >
                                            Matériels
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/comptabilite"
                                        >
                                            Comptabilité
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/Support"
                                        >
                                            Support
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/Contact"
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
            </div>
        );
    }
}

