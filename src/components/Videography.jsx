import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class Videography extends React.Component {



  render() {
    const VideographyContainer = styled.div`
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

    const VideographyList = styled.div`
      grid-area: list;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    `;

    const Video = styled.div`
      min-height: 300px;
      min-width: 300px;
      background-color: blanchedalmond;
    `;

    return (
      <VideographyContainer>
        <Title>VIDEOGRAPHY</Title>
        <Subheader>Stock videography for your next project</Subheader>
        <VideographyList>
          <Video>Video 1</Video>
          <Video>Video 2</Video>
          <Video>Video 3</Video>
          <Video>Video 4</Video>
        </VideographyList>
      </VideographyContainer>
    )

  }
}
