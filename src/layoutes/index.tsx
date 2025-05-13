import { Navbar, Sidebar, ContentBox, Footer, GridLayout } from "@/components";
import { NavLink, Outlet, } from "react-router";
import { Icon } from "@iconify/react";

function Layout() {

    return (
        <GridLayout>
            <Navbar.Navbar>
                <Navbar.NavbarLogo>MINIMAL TIMER TRACKER</Navbar.NavbarLogo>
            </Navbar.Navbar>
            <Sidebar.SidebarContainer>
                <Sidebar.SidebarLinks>

                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon icon="@custom:custome-icon:dashboard-alt" />
                        Dashboard
                    </NavLink>
                </Sidebar.SidebarLinks>
                <Sidebar.SidebarLinks>
                    <NavLink to="/clients" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon icon="@custom:custome-icon:group" />
                        Client</NavLink>
                </Sidebar.SidebarLinks>
            </Sidebar.SidebarContainer>
            <ContentBox>
                <Outlet />
            </ContentBox>
            <Footer>
                &copy; My Website
            </Footer>
        </GridLayout>
    );
}

export default Layout;