'use client';

import { Center, Container, Title } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import CardCarruV from './CardCarruV';

export interface IdataC {
  title: string;
  img: string;
  stat: string;
}

const FeaturesVehicules = () => {
  const matches = useMediaQuery('(min-width: 56.25em)');

  const dataCard: IdataC[] = [
    {
      title: '2016 Tesla Model X P90D Ludicrous',
      img: '/images/image10.png',
      stat: 'SOLD',
    },
    {
      title: '2016 Tesla Model X P90D Ludicrous',
      img: '/images/image10.png',
      stat: 'SOLD',
    },
    {
      title: '2016 Tesla Model X P90D Ludicrous',
      img: '/images/image10.png',
      stat: 'SOLD',
    },
    {
      title: '2016 Tesla Model X P90D Ludicrous',
      img: '/images/image10.png',
      stat: 'SOLD',
    },
    {
      title: '2016 Tesla Model X P90D Ludicrous',
      img: '/images/image10.png',
      stat: 'SOLD',
    },
  ];

  const slidCar = dataCard.map((src, index) => (
    <Carousel.Slide key={index}>
      <CardCarruV dataC={src} />
    </Carousel.Slide>
  ));

  return (
    <Container mah="683px" maw="1920px" size="xl" p="lg" bg="#F2F2F2" mt={16}>
      <Center mb={matches ? 52 : 32}>
        <Title ta="center" c="#333333">
          FEATURED VEHICLES
        </Title>
      </Center>
      <Carousel
        loop
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: 'md' }}
        align="start"
        controlsOffset="-35"
        controlSize={35}
        styles={{
          control: {
            color: '#4F4F4F',
          },
        }}
      >
        {slidCar}
      </Carousel>
    </Container>
  );
};

export default FeaturesVehicules;
