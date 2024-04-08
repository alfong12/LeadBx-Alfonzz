import { Image } from '@mantine/core';
import classes from './FeaturesCard.module.css';

const FeaturesCard = () => {
  const darC = {
    lin: '/images/image55.png',
    titulo: 'Proin in lorem tortor',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.',
  };

  return (
    <div className={classes.card}>
      <div className={classes.image_container}>
        <Image src={darC.lin} alt="Imagen"></Image>
      </div>
      <div className={classes.card_content}>
        <h2 className={classes.card_title}>{darC.titulo}</h2>
        <p className={classes.card_description}>{darC.descripcion}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
