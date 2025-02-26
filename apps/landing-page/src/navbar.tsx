'use client';
import React, { useState } from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import Image from 'next/image';
import Logo from './assets/svg/logo.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Icon for menu toggle
const loginLink = 'https://services.spt.sa/login';
const registerLink = 'https://services.spt.sa/register';

const navbarItems = [
  { label: 'الرئيسية', href: '/', isActive: true },
  { label: 'الشركاء', href: '/#partners', isActive: false },
  { label: 'خدماتنا', href: '/#services', isActive: false },
  { label: 'العروض', href: '/#offers', isActive: false },
  { label: 'عن SPT', href: '/#about', isActive: false },
  { label: 'كيف تضمن حقوقك', href: '/#rights', isActive: false },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUiNavbar
      className="h-20 relative"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={'xl'}
    >
      {/* Navbar Content (Logo and Toggle Button) */}
      <NavbarContent
        justify="start"
        className="flex flex-row-reverse justify-between items-center p-2"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-primary text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the mobile menu
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </NavbarMenuToggle>
        <NavbarBrand as={Link} href="/">
          <Image src={Logo} alt="Logo" className="w-[86px] md:w-[120px]" />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} isActive={item.isActive}>
            <Link
              href={item.href}
              color={item.isActive ? 'primary' : 'foreground'}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Authentication Buttons (Desktop) */}
      <NavbarContent justify="end" className="hidden md:flex space-x-4">
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full text-white"
            color="primary"
            target={'_blank'}
            href={registerLink}
            variant="solid"
          >
            انشاء حساب
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            className="rounded-full text-primary border-primary border-1"
            as={Link}
            target={'_blank'}
            href={loginLink}
            variant="bordered"
          >
            تسجيل الدخول
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        className={`md:hidden absolute top-[7rem] w-full bg-white shadow-lg transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!isMenuOpen} // Hide from screen readers when closed
        role="menu"
      >
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} isActive={item.isActive}>
            <Link
              href={item.href}
              color={item.isActive ? 'primary' : 'foreground'}
              className="block p-4 text-lg text-gray-700 hover:bg-gray-100 rounded-md transition-all"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}

        {/* Authentication Buttons (Mobile) */}
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full text-white bg-primary py-2 px-4 w-full mt-4"
            color="primary"
            href={registerLink}
            variant="solid"
          >
            انشاء حساب
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full text-primary border-primary border-2 py-2 px-4 w-full mt-4"
            href={loginLink}
            variant="bordered"
          >
            تسجيل الدخول
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </NextUiNavbar>
  );
};
