'use client';

import React, { useState } from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import Image from 'next/image';
import Logo from './assets/svg/logo.svg';

const loginLink = 'https://spt-three.vercel.app/login';
const registerLink = 'https://spt-three.vercel.app/register';

const navbarItems = [
  { label: 'الرئيسية', href: '#', isActive: true },
  { label: 'الشركاء', href: '#partners', isActive: false },
  { label: 'خدماتنا', href: '#services', isActive: false },
  { label: 'العروض', href: '#offers', isActive: false },
  { label: 'عن SPT', href: '#about', isActive: false },
  { label: 'كيف تضمن حقوقك', href: '#rights', isActive: false },
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
      <NavbarContent
        justify="start"
        className="flex flex-row-reverse justify-between"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-primary"
        />
        <NavbarBrand as={Link} href="/">
          <Image src={Logo} alt="Logo" className="w-[86px] md:w-[120px]" />
        </NavbarBrand>
      </NavbarContent>

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
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full text-white"
            color="primary"
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
            href={loginLink}
            variant="bordered"
          >
            تسجيل الدخول
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu
          className="md:hidden absolute top-[7rem] w-full bg-white" // Position menu below header
        >
          {navbarItems.map((item, index) => (
            <NavbarItem key={index} isActive={item.isActive}>
              <Link
                href={item.href}
                color={item.isActive ? 'primary' : 'foreground'}
                onClick={() => setIsMenuOpen(false)} // Close menu on item click
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <Button
              as={Link}
              className="rounded-full text-white"
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
              className="rounded-full text-primary border-primary border-1"
              href={loginLink}
              variant="bordered"
            >
              تسجيل الدخول
            </Button>
          </NavbarItem>
        </NavbarMenu>
      )}
    </NextUiNavbar>
  );
};
