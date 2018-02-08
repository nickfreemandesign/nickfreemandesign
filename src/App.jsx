import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeCTA from './components/HomeCTA';
import TableOfContents from './components/TableOfContents';
import GraphicDesign from './components/GraphicDesign';
import Photography from './components/Photography';
import Videography from './components/Videography';
import Applications from './components/Applications';
import Words from './components/Words';
import About from './components/About';

export default class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        gridContainerSize: '3fr 2fr',
      };
      this.changeNavSize = this.changeNavSize.bind(this);
    }

    changeNavSize(size) {
      console.log(`this isnt running`)
      if (size === 'lg') {
        this.setState({gridContainerSize: '3fr 2fr'});
      } else {
        this.setState({gridContainerSize: '8fr 1fr'});
      }

    }


  render() {



    const AppContainer = styled.div`
    display: grid;
    margin: -20px;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;

    @media screen and (min-width: 1024px){
      grid-template-columns: ${this.state.gridContainerSize};
      grid-template-areas: 'left right';

    }
    `;

    return (
      <AppContainer>
       <TableOfContents changeNavSize={this.changeNavSize} navSize={this.state.gridContainerSize}/>
       <Route exact path="/" component={ HomeCTA } />
       <Route exact path="/graphicdesign" component={ GraphicDesign } />
       <Route exact path="/photography" component={ Photography } />
       <Route exact path="/videography" component={ Videography } />
       <Route exact path="/applications" component={ Applications } />
       <Route exact path="/words" component={ Words } />
       <Route exact path="/about" component={ About } />
     </AppContainer>
    )

  }
}
