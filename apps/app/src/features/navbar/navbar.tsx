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
import { Link } from '@nextui-org/link';
import { useUserStore } from '../auth/user-store';
import { useAuthenticationServicePostSharedAuthLogout } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useRouter } from 'next/navigation';
import { OpenAPI } from '../../../../../libs/api-sdk/src/lib/gen2/requests';

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const { user } = useUserStore();
  const { mutateAsync } = useAuthenticationServicePostSharedAuthLogout();

  const handleLogout = async () => {
    console.log('Logging out', OpenAPI);
    await mutateAsync({});
    useUserStore.setState({ user: null, token: null });
    router.push('/login');
  };

  return (
    <NextUINavbar isBordered maxWidth="full">
      {/* Left Side: Logo and Search */}
      <NavbarContent justify="start" className="flex-1">
        <NavbarBrand className="mr-4 flex items-center gap-32">
          <Image src={LogoColored} alt="SPT Logo" width={100} height={30} />
          <Input
            classNames={{
              base: 'w-full h-8 hidden md:block',
              mainWrapper: 'h-full',
              input: 'text-xs',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/10',
            }}
            placeholder={t('placeholder.search')}
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
        {/* User Avatar Dropdown */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={user?.avatar}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {/*<DropdownItem key="profile" className="h-14 gap-2">*/}
            {/*  <p className="font-semibold">Signed in as</p>*/}
            {/*  <p className="font-semibold">zoey@example.com</p>*/}
            {/*</DropdownItem>*/}
            <DropdownItem onClick={handleLogout} key="logout" color="danger">
              تسجيل الخروج
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          isOpen={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          className="ml-4 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link href={item.href} color="foreground" className="w-full">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* Additional Mobile Menu Items (Optional) */}
        <NavbarMenuItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={user?.avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}
