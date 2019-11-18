import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SUDOKU-FINDER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/Home">Home
               </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/Contribute">Contribute</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Policies
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/PrivacyPolicies">
                    Privacy Policies
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/Disclaimer">
                    Disclaimer
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/TermsofService">
                    Terms of Service
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/ContactUs">
                    Contact Us
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
