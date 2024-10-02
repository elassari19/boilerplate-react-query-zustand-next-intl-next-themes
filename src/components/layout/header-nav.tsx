import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '../toggle-theme';
import ToggleLanguage from '../toggle-language';
import { Button } from '../ui/button';

const HeaderNav = () => {
  return (
    <header className="flex justify-between items-center p-4 px-8 text-gray-300 border-b">
      <div className="logo flex-1">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      <nav className="flex space-x-4">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <Link href="/map" className="hover:text-foreground">
          Map
        </Link>
        <Link href="/properties" className="hover:text-foreground">
          Properties
        </Link>
        <Link href="/learn" className="hover:text-foreground">
          Learn
        </Link>
        <Link href="/chat" className="hover:text-foreground">
          Chat
        </Link>
        <Link href="/blog" className="hover:text-foreground">
          Blog
        </Link>
        <Link href="/pricing" className="hover:text-foreground">
          Pricing
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-end space-x-4">
        <ToggleLanguage />
        <ModeToggle />
        <Button variant="ghost">Sign Up</Button>
        <Button className="rounded-full px-4">Sign In</Button>
      </div>
    </header>
  );
};

export default HeaderNav;
