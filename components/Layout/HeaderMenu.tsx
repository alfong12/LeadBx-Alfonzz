'use client';

import { Menu, Group, Center, Burger, Container, Stack, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import DrawerMenu from './Dragwer/DrawerMenu';

const links = [
  {
    link: '#0',
    label: 'NEW',
    links: [
      { link: '/New_Invent', label: 'New Vehicle Inventory' },
      { link: '/23FL', label: '2023 Ford Ligthning' },
      { link: '/23FB', label: '2023 Ford Bronco' },
      { link: '/NVS', label: 'New Vehicle Specials' },
    ],
  },
  {
    link: '#1',
    label: 'USED',
    links: [
      { link: '/New_Invent', label: 'New Vehicle Inventory' },
      { link: '/23FL', label: '2020 Ford Ligthning' },
      { link: '/23FB', label: '2020 Ford Bronco' },
      { link: '/NVS', label: 'New Vehicle Specials' },
    ],
  },
  { link: '/Services', label: 'SERVICES' },
  { link: '/PARTS', label: 'PARTS' },
  {
    link: '#2',
    label: 'ABOUT',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a date' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} className={classes.linkM}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
          shadow="sm"
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabe}>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown
            w={232}
            h={215}
            style={{ display: 'Flex', flexWrap: 'wrap', placeItems: 'center' }}
          >
            <Stack>{menuItems}</Stack>
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <header className={classes.header}>
        <Container size="xl">
          <div className={classes.inner}>
            <Image src="/images/LeadboxLogo.png" h={28} w={148.32} />
            <Group gap={50} visibleFrom="sm" justify="space-between">
              {items}
              <IconSearch size={32} strokeWidth={2} color="black" />
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" hiddenFrom="sm" />
          </div>
        </Container>
      </header>
      <DrawerMenu drawerOpened={drawerOpened} closeDrawer={closeDrawer} items={links} />
    </>
  );
}
