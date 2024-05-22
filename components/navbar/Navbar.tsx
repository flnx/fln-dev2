'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch';
import { GithubIcon } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = (bool: boolean) => setIsOpen(bool);
  const isActive = (path: string) => path === pathname;
  const activeClass = (path: string) => path === pathname ? 'text-primary' : 'foreground';

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="py-5"
      shouldHideOnScroll
      isMenuOpen={isOpen}
      onMenuOpenChange={handleMenu}
    >
      {/* Logo */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            aria-current={isActive('/') ? 'page' : false}
            className={clsx(
              'font-bold text-2xl text-inherit',
              activeClass('/')
            )}
            href="/"
            onClick={() => handleMenu(false)}
          >
            webdevkalo
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Github + ThemeSwitcher */}
      <NavbarContent className="flex gap-3 sm:gap-2 max-w-fit" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>

      {/* Desktop links */}
      <NavbarContent className="hidden sm:flex max-w-fit" justify="end">
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                aria-current={isActive(item.href) ? 'page' : false}
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  activeClass(item.href),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Hamburger Icon */}
      <NavbarContent className="sm:hidden max-w-fit pl-0.5 sm:pl-2" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu>
        <div className="mt-8 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.href} isActive={isActive(item.href)}>
              <NextLink
                href={item.href}
                className={clsx('text-foreground text-base', activeClass(item.href))}
                aria-current={isActive(item.href) ? 'page' : false}
                onClick={() => handleMenu(false)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
