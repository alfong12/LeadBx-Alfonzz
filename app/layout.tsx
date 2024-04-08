import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderMenu } from '@/components/Layout/HeaderMenu';
import { FooterSet } from '@/components/Layout/FooterSet';

export const metadata = {
  title: 'Prueba Tecnica Leadbox',
  description: 'Prueba Tecnica de Alfonzo Fong',
};

const LBiconref =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABL0lEQVR4Ae3WAUcEQRTA8aATlAB9hAMcIEIDHKwEi8I2XSy7djnXFxi4DdwBONDWh6hTd7miAiAcA6Rv0YLXvLWTwXriTOfO4DcYj/cfYDYAYKnK44V5QHlmnsQ5wfOW6NwA6Twf4WzvadDtTYdAqQ9wAYdegQtN6v6+CmiKzq2k5aIMmAyCy+lQmtTSggwwX2sDRiwU4Pt+I47jPS0Mw81/DUiShKnFoEVRtL8eAS7ABbiAGTve1V4PjrbtBNSrvbQVMJ/7jc8Z29J+A07yybfhw1bA11tbKqCZAWCQLmBVAtAFRpjSNN2xH0DAGRdgLUB/ySg4Yy1gUX8NKBRpOr1+LL/lDzxrjoMrSeJ9US57bwfVQlNBBhAkzt3xfmt8lgGJZ6MqoItLKC5AByzVD6YrvTfJZELEAAAAAElFTkSuQmCC';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href={LBiconref} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMenu />
          {children}
          <FooterSet />
        </MantineProvider>
      </body>
    </html>
  );
}
