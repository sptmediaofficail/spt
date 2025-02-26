'use client';
import React, { useState } from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import { Button } from '@heroui/button';
import Image from 'next/image';
import Logo from './assets/svg/logo.svg';
import { Link } from '@heroui/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

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
  const router = useRouter();
  const handlePress = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

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
        {/*<NavbarMenuToggle*/}
        {/*  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}*/}
        {/*  className="md:hidden text-primary text-3xl"*/}
        {/*  onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the mobile menu*/}
        {/*>*/}
        {/*  {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}*/}
        {/*</NavbarMenuToggle>*/}

        <Button
          className={`md:hidden text-primary text-3xl p-0 min-w-0`}
          variant="light"
          disableAnimation={true}
          disableRipple={true}
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <LuMenu />}
        </Button>

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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col p-4 border-t bg-white"
        >
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              className="block p-4 text-lg text-gray-700 hover:bg-gray-100 rounded-md transition-all"
              onPress={() => handlePress(item.href)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Authentication Buttons */}
          <Button
            as={Link}
            className="rounded-full text-white bg-primary py-2 px-4 w-full mt-4"
            href={registerLink}
          >
            انشاء حساب
          </Button>
          <Button
            as={Link}
            className="rounded-full text-primary border-primary border-2 py-2 px-4 w-full mt-4"
            href={loginLink}
            variant="bordered"
          >
            تسجيل الدخول
          </Button>
        </motion.div>
      )}
    </NextUiNavbar>
  );
};
