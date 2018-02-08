import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class Photography extends React.Component {



  render() {
    const PhotographyContainer = styled.div`
      font-family: 'Montserrat';
      background-color: black;
      color: white;
      display: grid;
      grid-template-columns: 1fr 10fr 1fr;
      grid-template-areas: '.. tit   ..'
                           '.. subt  ..'
                           '.. list  ..';
    `;

    const Title = styled.div`
      font-weight: bold;
      margin-top: 40px;
      grid-area: tit;
      font-size: 4em;
    `;

    const Subheader = styled.div`
      grid-area: subt;
      font-size: 1.5em;
      font-style: italic;
      font-family: 'Helvetica';
    `;

    const PhotographyList = styled.div`
      grid-area: list;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    `;

    const Photo = styled.div`
      min-height: 300px;
      min-width: 300px;
      background-color: blanchedalmond;
    `;

    return (
      <PhotographyContainer>
        <Title>PHOTOGRAPHY</Title>
        <Subheader>Stock photography for your next project</Subheader>
        <PhotographyList>
          <Photo>Photo 1</Photo>
          <Photo>Photo 2</Photo>
          <Photo>Photo 3</Photo>
          <Photo>Photo 4</Photo>
        </PhotographyList>
      </PhotographyContainer>
    )

  }
}
