import styled from 'styled-components';

const Navbar = styled.nav`
  grid-area: navbar;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const NavbarLogo = styled.div`
  font-size: 1.5rem;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export default { Navbar, NavbarLogo, NavbarLinks };