import { HomeDate } from '../utils/dateUtils';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-header">
        <div className='date'> {HomeDate()}</div>
        <div className='home-hi-name'>안녕하세요<br/>김민아님</div>
        <div className= 'home-header-card'>
          <HomeHeaderCard title={"여행"} imageSrc={"무제-1.png"} />
          <HomeHeaderCard title={"여행"} imageSrc={"무제-1.png"} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

function HomeHeaderCard({title , imageSrc}: {title: string, imageSrc: string}) {

  return (
    <div className='card'>
      <div className='home-header-card-travel'>{title}</div>
      <div className='home-header-card-crew'>{imageSrc}</div>
    </div>
  );
}

/* Frame 260863049 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 10px 16px;
// gap: 10px;
// isolation: isolate;

// width: 154px;
// height: 118px;

// background: #FFFFFF;
// box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
// border-radius: 12px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;


// /* 여행 */

// width: 29px;
// height: 98px;

// font-family: 'Paperlogy';
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 24px;
// /* or 150% */
// text-align: center;

// color: #333333;


// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
// z-index: 0;


// /* 무제-1 1 */

// position: absolute;
// width: 84px;
// height: 35.25px;
// left: 50px;
// top: 63px;

// background: url(무제-1.png);

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
// z-index: 1;


export default HomePage;