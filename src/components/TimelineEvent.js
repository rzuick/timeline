import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
    return (
        <section className='hover'>
        <div className='timeline-event'>
            <div className='event-person'>{props.person}</div>
            <div className='event-status'>{props.status}</div>
            <div className='event-time'><Timestamp>{props.timestamp}</Timestamp></div>
        </div>
        </section>
    )
};

export default TimelineEvent;