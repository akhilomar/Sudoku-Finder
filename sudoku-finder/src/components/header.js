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
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{color:"white", fontWeight: "1000"}}>SUDOKU-FINDER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/Home" style={{color:"white", fontWeight: "600"}}>Home
               </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/About" style={{color:"white", fontWeight: "600"}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/Contribute" style={{color:"white", fontWeight: "600"}}>Contribute</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color:"white", fontWeight: "600"}}>
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
