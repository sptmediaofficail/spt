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

const navbarItems = [
  { label: 'الرئيسية', href: '#', isActive: true },
  { label: 'الشركاء', href: '#', isActive: false },
  { label: 'خدماتنا', href: '#', isActive: false },
  { label: 'العروض', href: '#', isActive: false },
  { label: 'عن SPT', href: '#', isActive: false },
  { label: 'كيف تضمن حقوقك', href: '#', isActive: false },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUiNavbar
      className="h-20"
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
            href="#"
            variant="solid"
          >
            انشاء حساب
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            className="rounded-full text-primary border-primary border-1"
            as={Link}
            href="#"
            variant="bordered"
          >
            تسجيل الدخول
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="md:hidden">
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
        <NavbarItem>
          <Button
            as={Link}
            className="text-white rounded-full"
            color="primary"
            href="#"
            variant="solid"
          >
            انشاء حساب
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-primary rounded-full border-primary border-1"
            href="#"
            variant="bordered"
          >
            تسجيل الدخول
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </NextUiNavbar>
  );
};
