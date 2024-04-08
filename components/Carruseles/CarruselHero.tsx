'use client';

import { Carousel } from '@mantine/carousel';
import { Container, Image } from '@mantine/core';
import React from 'react';

const sliderimg = [
  {
    link: '/images/image75.png',
  },
  {
    link: '/images/image75.png',
  },
  {
    link: '/images/image75.png',
  },
];

const CarruselHero = () => {
  const slidCar = sliderimg.map((src, index) => (
    <Carousel.Slide key={index}>
      <Image src={src.link} alt="imagenCarrusel1" mah="673px" maw="1920px" fit="contain" />
    </Carousel.Slide>
  ));

  return (
    <Container mah="673px" maw="1920px" p={0} m={0}>
      <Carousel loop>{slidCar}</Carousel>
    </Container>
  );
};

export default CarruselHero;
