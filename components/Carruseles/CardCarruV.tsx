import React from 'react';
import { Box } from '@mantine/core';
import classes from './CardCarruV.module.css';

const CardCarruV = ({ dataC }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataCard = {
    title: '2016 Tesla Model X P90D Ludicrous',
    img: '/images/image10.png',
    stat: 'SOLD',
  };
  return (
    <Box className={classes.card} h={400}>
      <div className={classes.card_content}>
        <p className={classes.card_title}>{dataC.title}</p>
      </div>
      <div className={classes.card_overlay}>
        <p className={classes.card_overlay_text}>{dataC.stat}</p>
      </div>
    </Box>
  );
};

export default CardCarruV;
