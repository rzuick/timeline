import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({eventData}) => {
    let eventsData = eventData;
    const timelineComponent = eventsData.map((oneEvent, i) => {
        return (
        <section key={i}>
            <p><TimelineEvent person={oneEvent.person} status={oneEvent.status}
        timestamp={oneEvent.timestamp}></TimelineEvent></p>
        </section>);
    }
    );
    return (
        <div className='timeline'>{timelineComponent}</div>
    );
};

export default Timeline;