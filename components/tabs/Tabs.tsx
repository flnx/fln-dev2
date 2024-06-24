'use client';
import { Tab, Tabs as TabsNext } from '@nextui-org/tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tabs = () => {
  const pathname = usePathname();

  return (
    <TabsNext
      aria-label="Options"
      selectedKey={pathname}
      size="lg"
      radius="sm"
      fullWidth
      color="primary"
      className="max-w-screen-sm"
      variant="light"
    >
      <Tab key="/about" title="About" as={Link} href="/about" />
      <Tab key="/about/contact" href="/about/contact" title="Contact" as={Link} />
    </TabsNext>
  );
};
