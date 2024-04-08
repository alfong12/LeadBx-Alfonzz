import { Image } from '@mantine/core';
import classes from './FeaturesCard.module.css';

export interface IdarC {
  lin: string;
  titulo: string;
  descripcion: string;
}

const FeaturesCard = ({ darC }: { darC: IdarC }) => (
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

export default FeaturesCard;
