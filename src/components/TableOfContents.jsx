import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import videography from '-!url-loader?name=videography-icon!../assets/videography-icon.png';
import applications from '-!url-loader?name=applications-icon!../assets/applications-icon.png';
import graphicdesign from '-!url-loader?name=graphicdesign-icon!../assets/graphicdesign-icon.png';


export default class TableOfContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }




  render() {

    const TocContainer = styled.div`
      grid-area: right;
      width: 100%;
      height: auto;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
    `
    const NavItem = styled.li`
      padding: 15% 0 15% 0;
      color: white;
      font-size: 1.5em;
      font-family: 'Montserrat';
      border-bottom: .2em solid black;
      transition: transform .2s ease-in-out, color .2s ease-in-out, font-weight .2s ease-in-out;
      letter-spacing: 3px;
      &:hover{
        color: #66bfec;
        cursor: pointer;
        transform: translateX(10px);
      }
    `

    const NavList = styled.ul`
      list-style-type: none;
      padding-left: 0;
      top: 40px;
      position: fixed;
    `

    const NavImg = styled.img`
      max-width: 80px;
    `

    return (
      <TocContainer>
        <NavList>
          <NavItem onClick={() => this.props.changeNavSize('sm')}>
            <NavLink
              className="navItem" exact to='/graphicdesign'>
              {
                this.props.navSize === '3fr 2fr' ?
                "GRAPHIC DESIGN" :
                <NavImg src={graphicdesign}/>
              }
            </NavLink>
          </NavItem>
          <NavItem onClick={() => this.props.changeNavSize('sm')}>
            <NavLink
              className="navItem" exact to='/photography'>
              {
                this.props.navSize === '3fr 2fr' ?
                "PHOTOGRAPHY" :
                <NavImg src={videography}/>
              }
            </NavLink>
          </NavItem>
          <NavItem onClick={() => this.props.changeNavSize('sm')}>
            <NavLink
              className="navItem" exact to='/videography'>
              {
                this.props.navSize === '3fr 2fr' ?
                "VIDEOGRAPHY" :
                <NavImg src={videography}/>
              }
            </NavLink>
          </NavItem>
          <NavItem onClick={() => this.props.changeNavSize('sm')}>
            <NavLink
              className="navItem" exact to='/applications'>
              {
                this.props.navSize === '3fr 2fr' ?
                "APPLICATIONS" :
                <NavImg src={applications}/>
              }
            </NavLink>
          </NavItem>
          <NavItem onClick={() => this.props.changeNavSize('sm')}>
            <NavLink
              className="navItem" exact to='/words'>
              {
                this.props.navSize === '3fr 2fr' ?
                "WORDS" :
                <NavImg src={videography}/>
              }
            </NavLink>
          </NavItem>
          <NavItem onClick={() => this.props.changeNavSize('lg')}>
            <NavLink
              className="navItem" exact to='/about'>
              {
                this.props.navSize === '3fr 2fr' ?
                "ABOUT" :
                <NavImg src={videography}/>
              }
            </NavLink>
          </NavItem>
        </NavList>
      </TocContainer>
    )

  }
}
