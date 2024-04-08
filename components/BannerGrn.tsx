import { Title, Text, Container, Overlay, Image } from '@mantine/core';
import classes from './BannerGrn.module.css';

export function BannerGrn() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#219653" opacity={0.7} zIndex={1} />
      <div className={classes.flex}>
        <div className={classes.innerImg}>
          <Image src="/images/image66.png" mah={344} maw={800} />
        </div>
        <div className={classes.inner}>
          <Title fw={700} className={classes.title}>
            ABOUT US
          </Title>

          <Container maw={640}>
            <Text fz={14} className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel quam nec metus
              pellentesque iaculis. Cras lobortis odio a nulla condimentum blandit. Donec laoreet
              euismod diam, in lobortis odio tincidunt in.
            </Text>
            <Text fz={14} className={classes.description}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Vivamus eleifend, metus ut rutrum dignissim, erat diam pulvinar urna, laoreet
              convallis odio lorem at elit. Morbi iaculis metus et vestibulum commodo. Etiam lectus
              augue, congue vitae vestibulum sit amet, mattis finibus nulla. Duis dictum condimentum
              viverra. Curabitur cursus, nisi sit amet maximus imperdiet, odio augue tincidunt
              neque, nec condimentum lectus enim at est. Praesent accumsan sed quam id rutrum.
              Quisque quis turpis eget ex euismod fermentum. Fusce id nisi lacus. Vestibulum et
              aliquet purus.
            </Text>
          </Container>
        </div>
      </div>
    </div>
  );
}
