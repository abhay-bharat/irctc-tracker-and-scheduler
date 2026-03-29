import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Navigation, Calendar } from 'lucide-react';
import TrainScheduleComponent from '../components/TrainSchedule';
import { trainsDatabase } from '../utils/mockData';
import './Schedule.css';

const Schedule = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const train = trainsDatabase.find(t => t.trainNumber === id);

  if (!train) {
    return (
      <div className="schedule-container error-state">
        <div className="glass-panel p-8 text-center animate-fade-in">
          <h2 className="text-2xl mb-4 text-white">Train Not Found</h2>
          <p className="text-secondary mb-6">We couldn't find schedule data for train {id}.</p>
          <button className="back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={18} /> Back to Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="schedule-container animate-fade-in">
      <button className="back-link" onClick={() => navigate('/')}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="schedule-header glass-panel">
        <div className="train-title-bar">
          <div>
            <span className={`badge ${train.status === 'ON_TIME' ? 'success' : 'warning'}`}>
              {train.status === 'ON_TIME' ? 'On Time' : `Delayed by ${train.delayMinutes} min`}
            </span>
            <h1 className="train-title">{train.trainNumber} - {train.trainName}</h1>
          </div>
          <div className="duration-box">
            <Clock size={16} />
            <span>{train.duration}</span>
          </div>
        </div>

        <div className="route-summary">
          <div className="route-point">
            <span className="point-label">Origin</span>
            <div className="point-value text-white">
              <MapPin size={18} className="text-accent" />
              {train.origin}
            </div>
            <span className="time-val">{train.departureTime}</span>
          </div>
          
          <div className="route-divider">
            <div className="divider-line"></div>
            <div className="train-icon-center"><Navigation size={16} /></div>
          </div>

          <div className="route-point text-right">
            <span className="point-label">Destination</span>
            <div className="point-value text-white justify-end">
              {train.destination}
              <MapPin size={18} className="text-danger" />
            </div>
            <span className="time-val">{train.arrivalTime}</span>
          </div>
        </div>
      </div>

      <div className="schedule-body">
        <h2 className="section-heading"><Calendar size={20} /> Live Route & Schedule</h2>
        <TrainScheduleComponent schedule={train.schedule} currentIndex={train.currentStationIndex} />
      </div>
    </div>
  );
};

export default Schedule;
