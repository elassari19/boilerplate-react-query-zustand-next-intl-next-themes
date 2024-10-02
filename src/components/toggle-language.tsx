'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ToggleLanguage = () => {
  const t = useTranslations('');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {/* <Globe className="h-[1.2rem] w-[1.2rem]" /> */}
          <span className="">{t('lang')} </span>
          <ChevronDown className="w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/en">🇬🇧 English {t('lang') === 'en' && '✓'}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/de">🇩🇪 Deutsch {t('lang') === 'de' && '✓'}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleLanguage;
