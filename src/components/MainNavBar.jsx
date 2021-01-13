import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import coderSchoolLogo from '../images/CoderSchool-Logo.svg';
import githubMark from '../images/GitHub-Mark-64px.png';

const MainNavBar = () => (
  <Navbar bg='light' expand='lg'>
    <Navbar.Brand>
      <img src={coderSchoolLogo} alt='CoderSchool' width='200px' />
    </Navbar.Brand>
    <Nav className='mr-auto'></Nav>
    <Nav>
      <a href='https://github.com/lethang7794' target='_blank' rel='noreferrer'>
        <img src={githubMark} alt='Github' width='32px' />
      </a>
    </Nav>
  </Navbar>
);

export default MainNavBar;
