import { HomeDate } from '../utils/dateUtils';
import AirplaneImage from '../assets/Airplane.png';
import ClapImage from '../assets/Clap.png';


function HomePage() {
  return (
    <div className="home-page">
      <div className="home-header">
        <div className='date'> {HomeDate()}</div>
        <div className='home-hi-name'>안녕하세요<br />김민아님</div>
        <div className='home-header-card'>
          <HomeHeaderCard title={"여행"} />
          <HomeHeaderCard title={"크루"} />
        </div>
        <div></div>
      </div>
      <div>
        <div className='home-my-travel-title'>곧 떠날 여행이 있어요 🧳</div>
        <div className='home-my-travel-cards'>
        </div>
      </div>
    </div>
  );
}

function HomeHeaderCard({ title }: { title: string }) {
  return (
    <div className='card' style={{ position: 'relative' }}>
      <div className='card-title'>{title}</div>
      <img src={title === '여행' ? AirplaneImage : ClapImage} style={{
        width: title === '여행' ? 84 : 106,
        height: 'auto',
        position: 'absolute',
        bottom: title === '여행' ? 19 : 6,
        right: title === '여행' ? 20 : 0
      }} />
    </div>
  );
}



export default HomePage;