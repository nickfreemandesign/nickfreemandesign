import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NFDLogo from '-!url-loader?name=nfd-logo!../assets/nfd-logo.gif';

export default class HomeCTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {

  }



  render() {

    const HomeCtaContainer = styled.div`
      grid-area: left;
      display: grid;
      grid-template-rows: 2fr 1fr;
      width: 100%;
      height: auto;
      background-color: black;
      position: relative;
    `;

    const Logo = styled.div`
      grid-area: 1/1/1/1;
      margin: auto;
    `

    const NFDTitle = styled.div`
      grid-area: 2/1/2/1;
      display: flex;
      justify-content:center;
      ${'' /* align-items: center; */}
      color: white;
      font-size: 3em;
      font-family: 'Montserrat';
      font-weight: bold;
    `;


    return (
      <HomeCtaContainer>

        <Logo>
          <img src={NFDLogo}/>
        </Logo>


        <NFDTitle>
          GRAPHIC • MEDIA • WEB
        </NFDTitle>
      </HomeCtaContainer>
    )

  }
}
