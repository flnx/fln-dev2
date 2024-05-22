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
      className="max-w-screen-md"
      variant="light"
    >
      <Tab key="/about" title="Profile" as={Link} href="/about" />

      <Tab
        key="/about/tech-background"
        href="/about/tech-background"
        title="Tech Background"
        as={Link}
      />
      <Tab key="/about/contact" href="/about/contact" title="Contact" as={Link} />
    </TabsNext>
  );
};
