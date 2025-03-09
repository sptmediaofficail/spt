'use client';
import React from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  SubMenu,
} from 'react-pro-sidebar';
import {
  FaClipboardList,
  FaHome,
  FaServicestack,
  FaUserCircle,
  FaWallet,
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const menuConfig = [
  {
    label: 'home',
    icon: <FaHome />,
    href: '/home',
  },
  {
    label: 'services',
    icon: <FaServicestack />,
    href: '/services',
    submenu: [
      {
        label: 'order_spare_part',
        href: '/services/order-spare-part',
      },
      {
        label: 'sell_junk_car',
        href: '/services/sell-junk-car',
      },
    ],
  },
  {
    label: 'orders',
    icon: <FaClipboardList />,
    href: '/orders',
  },
  {
    label: 'store',
    icon: <FaClipboardList />,
    href: '/store',
  },
  {
    label: 'wallet',
    icon: <FaWallet />,
    href: '/wallet',
  },
  {
    label: 'manage_account',
    icon: <FaUserCircle />,
    submenu: [
      {
        label: 'my_profile',
        href: '/my-profile',
      },
      {
        label: 'create_store',
        href: '/create-store',
      },
    ],
  },
];

const SideNav: React.FC = () => {
  const t = useTranslations('sidenav');

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#ffffff',
          color: '#333',
          position: 'fixed',
          borderLeft: '1px solid #e0e0e0',
        },
      }}
      width="240px"
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
            cursor: 'pointer',

            '&:hover &.active': {
              backgroundColor: '#28478A1A',
              color: '#28478A',
            },

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
                    component={<Link href={subItem.href} />}
                  >
                    <p className={'mx-11'}>{t(subItem.label)}</p>
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }
          return (
            <MenuItem
              key={index}
              component={<Link href={menuItem.href} />}
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
