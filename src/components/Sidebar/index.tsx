import type { JSX } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  background-color: #222;
  color: white;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarLinks = styled.div<{ icon?: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

   &::before {
    content: '';
    background: url(${(props) => props.icon}) no-repeat center;
    background-size: 20px 20px;
    position: absolute;
    left: 0.75rem;
    width: 20px;
    height: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    display: block;

    &.active {
      background-color: #444; /* highlight color */
      font-weight: bold;
    }

    &:hover {
      background-color: #444;
    }


     svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }

 
`;

const SidebarGroupTitle = styled.button`
  background: none;
  border: none;
  color: white;
  text-align: left;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const SubMenu = styled.div<{ open?: boolean }>`
  margin-left: 1rem;
  display: flex !important;
  gap: 0.5rem;
  flex-direction: column;
  display: ${({ open }) => (open ? 'block' : 'none')};
  a {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`;


const SidebarItem = ({ title, children }: { title: string, children: JSX.Element }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SidebarGroupTitle onClick={() => setOpen(!open)}>
        {title} {open ? '▲' : '▼'}
      </SidebarGroupTitle>
      <SubMenu open={open}>{children}</SubMenu>
    </div>
  );
};



export default { SidebarContainer, SidebarLinks, SidebarGroupTitle, SubMenu, SidebarItem };