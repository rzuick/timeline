import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log('The value of timelineData is', timelineData);
  console.log('We should use timelineData in our project somehow...');

  return (
    <body >
      <header className='App-header'> 
      <h1 className='App-title'>{timelineData.person}'s Social Media App</h1>
      </header>
      <div className='App-main'>
      <Timeline eventData={timelineData.events}></Timeline>
      <TimelineEvent></TimelineEvent>
      </div>
  </body>)
  ;
}

export default App;