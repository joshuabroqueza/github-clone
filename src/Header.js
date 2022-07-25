import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

export default function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          alt=''
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text'></input>
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={PeopleIcon} title='My Network' />
        <HeaderOption Icon={WorkIcon} title='Jobs' />
        <HeaderOption Icon={EmailIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar='https://media-exp1.licdn.com/dms/image/C5603AQFGdcepEK7D2g/profile-displayphoto-shrink_200_200/0/1620216562018?e=1663804800&v=beta&t=5W3Qre6adKCs8D2wx8I6bQY3zHx7s2xeOgzqyDWv-d4'
          title='me'
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}
