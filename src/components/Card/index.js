import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#0aa" />
      </header>
      <p>Complete the server migration</p>
      <img
        src="https://api.adorable.io/avatars/200/abott@adorable.png"
        alt="avatar"
      />
    </Container>
  );
}
