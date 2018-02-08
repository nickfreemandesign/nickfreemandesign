import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class GraphicDesign extends React.Component {



  render() {
    const GraphicDesignContainer = styled.div`
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

    const GraphicDesignList = styled.div`
      grid-area: list;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    `;

    const Graphic = styled.div`
      min-height: 300px;
      min-width: 300px;
      background-color: blanchedalmond;
    `;

    return (
      <GraphicDesignContainer>
        <Title>GRAPHIC DESIGN</Title>
        <Subheader>Stock GraphicDesign for your next project</Subheader>
        <GraphicDesignList>
          <Graphic>Graphic 1</Graphic>
          <Graphic>Graphic 2</Graphic>
          <Graphic>Graphic 3</Graphic>
          <Graphic>Graphic 4</Graphic>
        </GraphicDesignList>
      </GraphicDesignContainer>
    )

  }
}
