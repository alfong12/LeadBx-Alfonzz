import React from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import FeaturesCard from './FeaturesCard';

export interface IdarC {
  lin: string;
  titulo: string;
  descripcion: string;
}

const FeatureSec = () => {
  const darC = [
    {
      lin: '/images/image55.png',
      titulo: 'Proin in lorem tortor',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.',
    },
    {
      lin: '/images/image76.png',
      titulo: 'Proin in lorem tortor',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.',
    },
    {
      lin: '/images/image77.png',
      titulo: 'Proin in lorem tortor',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.',
    },
  ];

  const cardF = darC?.map((d) => <FeaturesCard darC={d} key={d.lin} />);
  return (
    <Container size="xl">
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'sm' }}
        my={16}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {cardF}
      </SimpleGrid>
    </Container>
  );
};

export default FeatureSec;
