'use client';
import React from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  SubMenu,
} from 'react-pro-sidebar';
import { FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { HouseIcon } from './assests/house';
import { useTranslations } from 'next-intl';

const menuConfig = [
  {
    label: 'sidenav.home',
    icon: <HouseIcon />,
  },
  {
    label: 'Calendar',
    href: '/calendar',
    icon: <HouseIcon />,
  },
  {
    label: 'E-commerce',
    href: '/e-commerce',
    icon: <FaShoppingCart />,
  },
  {
    label: 'Users',
    icon: <FaUsers />,
    submenu: [
      { label: 'Admins', href: '/users/admins' },
      { label: 'Customers', href: '/users/customers' },
    ],
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <FaCog />,
  },
];

const SideNav: React.FC = () => {
  const t = useTranslations();
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#ffffff',
          color: '#333', // Default text color
          height: '100vh', // Full viewport height
          borderLeft: '1px solid #e0e0e0', // Light border on the right
        },
      }}
      width="250px"
      transitionDuration={300}
    >
      <Menu
        className={'mt-4'}
        menuItemStyles={{
          button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            color: '#333',
            transition: 'all 0.3s ease',
            position: 'relative',
            textDecoration: 'none',
            // Ensure the entire area is clickable
            cursor: 'pointer',

            // Hover state
            '&:hover': {
              backgroundColor: '#28478A1A', // Primary solid blue color on hover
              color: '#28478A', // Primary text color on hover
            },

            // Active state
            '&.active': {
              backgroundColor: '#28478A', // Primary solid blue color on active
              color: '#28478A', // White text on active
            },

            // After pseudo-element for blue bar on the right
            '&.active::after, &:hover::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              top: '0',
              height: '100%',
              width: '4px',
              backgroundColor: '#28478A',
              borderRadius: '0 4px 4px 0',
            },
          },
          icon: {
            color: 'inherit',
          },
          label: {
            // Ensure label takes up remaining space
            flex: 1,
            marginLeft: '10px',
          },
        }}
      >
        {menuConfig.map((menuItem, index) => {
          if (menuItem.submenu) {
            return (
              <SubMenu
                key={index}
                label={t(menuItem.label)}
                icon={menuItem.icon}
              >
                {menuItem.submenu.map((subItem, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    component={<a href={subItem.href} />}
                  >
                    {t(subItem.label)}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }
          return (
            <MenuItem
              key={index}
              component={<a href={menuItem.href} />}
              icon={menuItem.icon}
            >
              {t(menuItem.label)}
            </MenuItem>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
