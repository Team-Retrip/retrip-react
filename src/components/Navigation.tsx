import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ChattingPage from '../pages/ChattingPage';
import CrewPage from '../pages/CrewPage';
import MyTravelPage from '../pages/MyTravelPage';
import MyPage from '../pages/MyPage';
import CustomSvgImage from './SvgImage';
import HomeIcon from '../assets/Home.svg';
import CrewIcon from '../assets/Crew.svg';
import ChattingIcon from '../assets/Chatting.svg';
import MyTravelIcon from '../assets/MyTravel.svg';
import MyIcon from '../assets/My.svg';


function TabBar() {
  const location = useLocation();

  const tabs = [
    { name: '홈', path: '/home', icon: HomeIcon  },
    { name: '크루', path: '/crew', icon: CrewIcon },
    { name: '내여행', path: '/mytravel', icon: ChattingIcon },
    { name: '채팅', path: '/chatting', icon: MyTravelIcon },
    { name: 'MY', path: '/my', icon: MyIcon }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '18px 0px 13px 0px',
      width:'360px',
    }}>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.name}
            to={tab.path}
            style={{
              textDecoration: 'none',
              color: isActive ? 'black' : 'gray',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '10px'
            }}
          >
            <CustomSvgImage 
              iconName={tab.icon }
              color={isActive ? '#ff6347' : '#808080'}
            />
            <span style={{ marginTop: 'px' }}>{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

function Navigation() {
  return (
    <Router>
      <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/chatting" element={<ChattingPage />} />
          <Route path="/mytravel" element={<MyTravelPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
        <TabBar />
      </div>
    </Router>
  );
}

export { Navigation as MyTabs };