'use client';

import { Text, Grid, SimpleGrid, Stack, Image, Select, ActionIcon, Group } from '@mantine/core';
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './FooterSet.module.css';

const data = [
  {
    title: 'number street, city, province, postal code',
    links: [
      { label: 'Sales: (XXX) XXX-XXXX' },
      { label: 'Parts: (XXX) XXX-XXXX' },
      { label: 'Service: (XXX) XXX-XXXX' },
    ],
  },
];
const dataD = [
  {
    title: 'Monday: 8:00am-8:00pm',
    fw: 600,
  },
  {
    title: 'Tuesday: 8:00am-8:00pm',
    fw: 400,
  },
  {
    title: 'Wednesday: 8:00am-8:00pm',
    fw: 600,
  },
  {
    title: 'Thursday: 8:00am-8:00pm',
    fw: 400,
  },
  {
    title: 'Friday: 8:00am-8:00pm',
    fw: 600,
  },
  {
    title: 'Saturday: 8:00am-5:00pm',
    fw: 400,
  },
  {
    title: 'Sunday: Closed',
  },
];
const Icondat = [
  {
    icon: IconBrandFacebookFilled,
    link: 'https://www.facebook.com/',
  },
  {
    icon: IconBrandTwitterFilled,
    link: 'https://twitter.com/',
  },
  {
    icon: IconBrandYoutubeFilled,
    link: 'https://www.youtube.com/',
  },
  {
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/',
  },
  {
    icon: IconBrandPinterest,
    link: 'https://www.pinterest.com/',
  },
  {
    icon: IconBrandLinkedin,
    link: 'https://www.linkedin.com/',
  },
];

//! Revisar las opsiones moviles para que este correcto(telefono)
export function FooterSet() {
  const [value, setValue] = useState<string | null>('SALES');

  const matches = useMediaQuery('(min-width: 37.5em)');

  const contatc = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text c="white" key={index} fz={14} fw={400} mt={15}>
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title}>
        <Text c="white">{group.title}</Text>
        {links}
      </div>
    );
  });

  const horarios = dataD.map((hor, i) => (
    <Text size="14px" c="white" key={i} fw={value === 'SALES' ? hor.fw : 400}>
      {hor.title}
    </Text>
  ));
  const RRSS = Icondat.map((dat, i) => (
    <ActionIcon
      key={i}
      variant="outline"
      color="rgba(255, 255, 255, 1)"
      radius="xl"
      aria-label="Settings"
      component="a"
      href={dat.link}
      size="lg"
      target="_blank"
      style={{ borderWidth: '2px' }}
      // onClick={(event) => event.preventDefault()}
    >
      <dat.icon style={{ width: '23.04px', height: '24px' }} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <footer className={classes.footer}>
      <Grid justify="center" align="start">
        <Grid.Col span={{ base: 12, md: 4, lg: 3 }} order={{ base: 1, md: 1, lg: 1 }}>
          {!matches && <Image src="/images/LeadboxLw.png" h={28} w={148.32} mb={30} />}

          {contatc}
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 5 }} order={{ base: 3, md: 2, lg: 2 }}>
          <Stack align="center" gap="sm">
            {matches && <Image src="/images/LeadboxLw.png" h={28} w={148.32} />}
            <Group mt={30}>{RRSS}</Group>
            <span className={classes.info}>
              Sitemap | Terms and Conditions | Privacy Policy | Dealership © 2022 | Powered by
              Leadbox
            </span>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 3 }} order={{ base: 2, md: 3, lg: 3 }}>
          <Select
            data={['SALES', 'SERVICE', 'PARTS']}
            placeholder="SALES"
            value={value}
            onChange={setValue}
            mb={9}
          />
          <SimpleGrid cols={2} verticalSpacing="xs" spacing="xs">
            {horarios}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </footer>
  );
}
