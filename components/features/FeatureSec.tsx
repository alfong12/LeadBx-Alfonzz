import React from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import FeaturesCard from './FeaturesCard';

const FeatureSec = () => {
  const i = 1;
  return (
    <Container size="xl">
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'sm' }}
        my={16}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </SimpleGrid>
    </Container>
  );
};

export default FeatureSec;
