import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
  <footer className = 'fixed bottom-0 w-full p-2 ml-[6rem]'>
    <div className = 'absolute flex w-full h-full justify-end items-center bottom-0 left-0 pr-[6rem]'>
      <a href = 'https://github.com/sliit-foss/cli-explorer' target = '_blank'><img src = {github} className = 'w-14 h-14 m-2 mb-6 mr-6'></img></a>
    </div>
    <h1 className = 'relative z-50 text-center'>With <span className='text-red-500'>❤</span> from <a href = 'https://sliitfoss.org/' target = '_blank' className='text-blue-primary'>SLIIT FOSS</a></h1>
  </footer>
);

export default Footer;
