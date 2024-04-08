'use client';

import {
  Text,
  Container,
  Grid,
  SimpleGrid,
  Stack,
  Image,
  Select,
  ActionIcon,
  Group,
} from '@mantine/core';
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';
import { useState } from 'react';
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
  },
  {
    title: 'Tuesday: 8:00am-8:00pm',
  },
  {
    title: 'Wednesday: 8:00am-8:00pm',
  },
  {
    title: 'Thursday: 8:00am-8:00pm',
  },
  {
    title: 'Friday: 8:00am-8:00pm',
  },
  {
    title: 'Saturday: 8:00am-5:00pm',
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
  const [value, setValue] = useState<string | null>('');
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text c="white" key={index} fz={14} fw={400}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text c="white">{group.title}</Text>
        {links}
      </div>
    );
  });

  const horarios = dataD.map((hor, i) => (
    <Text size="14p" c="white" key={i}>
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
      <Container size="xl" p="md">
        <Grid justify="center" align="start">
          <Grid.Col span="content">{groups}</Grid.Col>
          <Grid.Col span={5}>
            <Stack align="center" gap="sm">
              <Image src="/images/LeadboxLw.png" h={28} w={148.32} />
              <Group mt={30}>{RRSS}</Group>
              <span className={classes.info}>
                Sitemap | Terms and Conditions | Privacy Policy | Dealership © 2022 | Powered by
                Leadbox
              </span>
            </Stack>
          </Grid.Col>
          <Grid.Col span="content">
            <Select
              data={['SALES', 'SERVICE', 'PARTS']}
              placeholder="SALES"
              value={value}
              onChange={setValue}
            />
            <SimpleGrid cols={2} verticalSpacing="xs" spacing="xs">
              {horarios}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
}
