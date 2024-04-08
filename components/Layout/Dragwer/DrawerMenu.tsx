'use client';

import { Divider, Drawer, Accordion, rem, ScrollArea, Stack } from '@mantine/core';
import React from 'react';
import classes from './DrawerMenu.module.css';

interface Iitems {
  link: string;
  label: string;
  links?: Link[];
}

interface Link {
  link: string;
  label: string;
}

const DrawerMenu = ({
  drawerOpened,
  closeDrawer,
  items,
}: {
  drawerOpened: boolean;
  closeDrawer: () => void;
  items: Iitems[];
}) => {
  const Nlinks = items.map((item) => {
    const menuItems = item.links?.map((Slink) => (
      <Accordion.Panel key={Slink.label}>
        <a
          key={Slink.label}
          href={Slink.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {Slink.label}
        </a>
      </Accordion.Panel>
    ));

    if (menuItems) {
      return (
        <Accordion defaultValue="" key={item.label}>
          <Accordion.Item key={item.label} value={item.label}>
            <Accordion.Control>{item.label}</Accordion.Control>
            {menuItems}
          </Accordion.Item>
        </Accordion>
      );
    }

    return (
      <a
        key={item.label}
        href={item.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {item.label}
      </a>
    );
  });

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="50%"
      padding="md"
      title="Navigation"
      hiddenFrom="sm"
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
        <Divider my="sm" />
        <Stack>{Nlinks}</Stack>
      </ScrollArea>
    </Drawer>
  );
};

export default DrawerMenu;
