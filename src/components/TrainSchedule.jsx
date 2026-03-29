import React from 'react';
import { Circle, Navigation, CheckCircle2 } from 'lucide-react';
import './TrainSchedule.css';

const TrainSchedule = ({ schedule, currentIndex }) => {
  return (
    <div className="timeline-container glass-panel">
      {schedule.map((station, index) => {
        const isPast = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isFuture = index > currentIndex;

        return (
          <div 
            key={station.stationCode} 
            className={`timeline-item ${isPast ? 'past' : ''} ${isCurrent ? 'current' : ''} ${isFuture ? 'future' : ''}`}
          >
            <div className="timeline-times">
              <span className="time-arrival">{station.arrival}</span>
              {station.departure !== 'Destination' && <span className="time-departure">{station.departure}</span>}
            </div>

            <div className="timeline-line">
              <div className="timeline-dot">
                {isPast && <CheckCircle2 size={24} className="icon-past text-success" />}
                {isCurrent && (
                  <div className="current-pulse-wrapper">
                    <div className="pulse-ring"></div>
                    <Navigation size={20} className="icon-current text-accent" />
                  </div>
                )}
                {isFuture && <Circle size={16} className="icon-future" />}
              </div>
              {index !== schedule.length - 1 && <div className="timeline-connector"></div>}
            </div>

            <div className="timeline-content">
              <div className="station-header">
                <h3>{station.stationName}</h3>
                <span className="station-code">{station.stationCode}</span>
              </div>
              <div className="station-details">
                <span>Distance: {station.distance}</span>
                <span className="dot-sep">•</span>
                <span>Day {station.day}</span>
                <span className="dot-sep">•</span>
                <span>Platform {station.platform}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainSchedule;
