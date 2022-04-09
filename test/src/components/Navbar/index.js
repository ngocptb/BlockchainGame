import React from 'react';
import { GrLanguage } from "react-icons/gr";
import {FaBars} from 'react-icons/fa';
import { Nav , NavbarContainer , NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink,} from './NavbarElements';
import symbol from '../../images/symbol.png';

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <img src={symbol} alt="" height="80px" />
                  <NavLogo to='/'>
                      dolla 
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="overview">Overview</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="whitepaper">Whitepaper</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="nfts">NFTS item</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="token">Tokenomics</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="news">News</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="team">Team</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="roadmap">Roadmap</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks to="backer">Backers</NavLinks>
                      </NavItem>
                      <NavItem>
                            <NavLinks><GrLanguage size="10x" />EN</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks><NavBtnLink to="/signin">WhiteList</NavBtnLink></NavLinks>
                           
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;
