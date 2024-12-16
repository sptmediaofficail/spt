'use client';
import React, { useState } from 'react';
import LogoColored from '../../assets/logo-colored.svg';
import Image from 'next/image';
import { Input } from '@nextui-org/input';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import SearchIcon from './search-icon';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { useTranslations } from 'next-intl';
import { useUserStore } from '../auth/user-store';
import { useLogout } from '../auth/login/use-logout';

import {
  FaClipboardList,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaServicestack,
  FaTwitter,
  FaUserCircle,
  FaWallet,
  FaWhatsapp,
} from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import NewNotificationSvg from './assets/new-notifications.svg';
import MenuIcon from './assets/menu-icon.svg';
import MenuIconOpened from './assets/menu-icon-opened.svg';
import { Divider } from '@nextui-org/divider';
import { cn } from '@nextui-org/theme';
import Link from 'next/link';
import { PrimaryButton } from '../../ui/primary-button';
import { Card } from '@nextui-org/card';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'home', href: '/home', icon: <FaHome /> },
  {
    label: 'services',
    href: '/services',
    icon: <FaServicestack />,
  },
  {
    label: 'orders',
    href: '/orders',
    icon: <FaClipboardList />,
  },
  {
    label: 'wallet',
    href: '/wallet',
    icon: <FaWallet />,
  },
  {
    label: 'profile',
    href: '/profile',
    icon: <FaUserCircle />,
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: <FaTwitter />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    label: 'WhatsApp',
    href: 'https://www.whatsapp.com',
    icon: <FaWhatsapp />,
  },
];

const links = [
  { label: 'about_app', href: '/about' },
  { label: 'terms', href: '/terms' },
  { label: 'privacy', href: '/privacy' },
];

export default function Navbar() {
  const t = useTranslations('sidenav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const isLinkActive = (href: string) => path === href;
  const { user } = useUserStore();
  const { logout } = useLogout();

  return (
    <NextUINavbar isBordered maxWidth="full">
      {/* Left Side: Logo and Search */}
      <NavbarContent justify="start" className="flex-1">
        <NavbarBrand className="mx-0 lg:mx-4 flex items-center gap-32">
          <Image src={LogoColored} alt="SPT Logo" width={100} height={30} />
          <Input
            classNames={{
              base: 'w-full h-8 hidden md:block',
              mainWrapper: 'h-full',
              input: 'text-xs',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/10',
            }}
            placeholder={t('search')}
            size="sm"
            startContent={
              <SearchIcon className="fill-[#05B5B4] scale-x-[-1]" />
            }
            type="search"
            radius="full"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Right Side: User Avatar and Mobile Menu Toggle */}
      <NavbarContent justify="end" className="flex-1 flex items-center">
        <button className="w-9 h-9 rounded-full transform hover:scale-105 shadow-sm duration-100">
          <Image src={NewNotificationSvg} alt="Notification" layout={'fixed'} />
        </button>

        {/* User Avatar Dropdown */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="hidden lg:flex items-center gap-4 cursor-pointer">
              <Avatar
                isBordered
                className="transition-transform"
                color="secondary"
                name={'PP'}
                size="sm"
                src={user?.avatar}
              />
              <span className="text-sm flex gap-2 items-center">
                {user?.name}
                <RiArrowDownSLine
                  className={`mt-0.5 transform ${isMenuOpen && 'rotate-180'}`}
                />
              </span>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem onClick={logout} key="logout" color="danger">
              {t('logout')}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          icon={
            isMenuOpen ? (
              <Image src={MenuIconOpened} alt={'Close menu'} />
            ) : (
              <Image src={MenuIcon} alt={'Open menu'} />
            )
          }
          className="md:hidden h-9 w-9"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="px-4 py-0 bg-white border border-t border-gray-100 md:hidden flex flex-col justify-between">
        <div>
          <Card className="p-4 w-full rounded-xl shadow-sm border flex flex-row gap-4 mt-4">
            {user?.avatar ? (
              <Image
                src={user?.avatar}
                alt="Provider Avatar"
                width={48}
                height={48}
                className={'rounded-full'}
              />
            ) : (
              <FaUserCircle className="h-12 w-12 text-primary" />
            )}
            <div className={'flex flex-col self-start'}>
              <h3 className={'text-lg font-bold'}>{user?.name}</h3>
              <button className="text-[#05B5B4] font-semibold text-sm">
                {t('edit_profile')}
              </button>
            </div>
          </Card>

          {menuItems.map((item) => (
            <>
              <NavbarMenuItem className={`py-4`} key={item.href}>
                <Link
                  href={item.href}
                  color="foreground"
                  className={cn(
                    'w-full flex items-center gap-1.5 font-medium opacity-80',
                    isLinkActive(item.href) && 'text-primary opacity-100'
                  )}
                >
                  {item.icon}
                  <span className="ml-2">{t(item.label)}</span>
                </Link>
              </NavbarMenuItem>
              <Divider className={'bg-gray-100'} />
            </>
          ))}
        </div>

        <NavbarMenuItem className={`py-3`} key={'logout'}>
          <PrimaryButton size={'lg'} text={'تسجيل الخروج'} onPress={logout} />

          <div className="flex flex-col justify-center items-center gap-6 w-full mt-8">
            <div className="flex justify-center items-center gap-4">
              <span className="text-sm text-gray-600">{t('follow_us')}</span>
              {socialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  target={'_blank'}
                  className={'text-primary'}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className={'text-xs font-semibold'}
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>

            {/*  rights reserved */}
            <RightsReserved />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}

const RightsReserved = () => {
  const t = useTranslations('sidenav');
  const year = new Date().getFullYear();
  return (
    <div>
      <span className="text-sm text-gray-500">
        {t('rights_reserved') + ' ' + year + ' SPT©'}
      </span>
    </div>
  );
};
