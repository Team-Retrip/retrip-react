import React from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import ChattingPage from './ChattingPage';
import CrewPage from './CrewPage';
import MyTravelPage from './MyTravelPage';
import MyPage from './MyPage';
import CustomSvgImage from '../components/SvgImage';
import HomeIcon from '../assets/Home.svg';
import CrewIcon from '../assets/Crew.svg';
import ChattingIcon from '../assets/Chatting.svg';
import MyTravelIcon from '../assets/MyTravel.svg';
import MyIcon from '../assets/My.svg';

function TabBar() {
  const location = useLocation();

  const tabs = [
    { name: '홈', path: '/home', icon: HomeIcon },
    { name: '크루', path: '/crew', icon: CrewIcon },
    { name: '내여행', path: '/mytravel', icon: MyTravelIcon },
    { name: '채팅', path: '/chatting', icon: ChattingIcon },
    { name: 'MY', path: '/my', icon: MyIcon }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-around',
      // padding: '18px 0px 13px 0px',
      width: '360px',
    }}>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <a
            key={tab.name}
            href={tab.path}
            style={{
              textDecoration: 'none',
              color: isActive ? 'black' : 'gray',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '10px', 
              padding: '18px 0',
              flex: 1,
            }}
          >
            <CustomSvgImage
              iconName={tab.icon}
              color={isActive ? '#ff6347' : '#808080'}
            />
            <span style={{ marginTop: '8px' }}>{tab.name}</span>
          </a>
        );
      })}
    </div>
  );
}

function MainPage() {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case '/home':
        return <HomePage />;
      case '/crew':
        return <CrewPage />;
      case '/chatting':
        return <ChattingPage />;
      case '/mytravel':
        return <MyTravelPage />;
      case '/my':
        return <MyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className='main-container'>
      <div style={{ paddingBottom: '80px'  }}>
        {renderContent()}
      </div>
      <TabBar />
    </div>
  );
}

export { MainPage };