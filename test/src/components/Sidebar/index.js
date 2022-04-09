import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarMenu,SidebarLink,SidebarRouter} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='news' onClick={toggle}>News</SidebarLink>
                    <SidebarLink to='team'onClick={toggle}>Team</SidebarLink>
                    <SidebarLink to='roadmap'>Roadmap</SidebarLink>
                    <SidebarLink to='backer'>Backers</SidebarLink>
                    <SidebarLink to='/whitelist'>WhitelistSignUp</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/signin">Sign in</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
