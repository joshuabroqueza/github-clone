import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/icons-material/AccountCircle';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItems'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?w=2000'
          alt=''
        ></img>
        <Avatar className='sidebar__avatar' />
        <h2>Joshua Broqueza</h2>
        <h4>wabroqueza@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,343</p>
        </div>

        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>5,043</p>
        </div>
      </div>

      <div className='sidebar__button'>
        <p>Recent</p>
        {recentItem('React js')}
        {recentItem('Node Js')}
        {recentItem('Integromat')}
        {recentItem('Design')}
        {recentItem('Developer')}
        {recentItem('Automation')}
      </div>
    </div>
  );
}

export default Sidebar;
