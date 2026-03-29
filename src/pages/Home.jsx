import React from 'react';
import SearchBox from '../components/SearchBox';
import './Home.css';
import { ArrowRight, Activity, Map, Train as TrainIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="live-dot"></span> 
            Live tracking for Indian Railways
          </div>
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Next-Gen <span className="text-gradient">Train Scheduler</span>
          </h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Track your journey in real-time. Beautifully designed for a seamless travel experience.
          </p>
          
          <div className="search-wrapper animate-fade-in" style={{ animationDelay: '0.3s' }}>
             <SearchBox />
          </div>
        </div>
      </div>

      <div className="features-section container animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">Why choose RailTrack?</h2>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon bg-blue">
              <Activity size={24} />
            </div>
            <h3>Real-Time Tracking</h3>
            <p>Get minute-by-minute updates on your train's live location and expected arrival timings.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon bg-green">
              <Map size={24} />
            </div>
            <h3>Interactive Maps</h3>
            <p>Visualize the route ahead and see delays clearly plotted against the real trajectory.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon bg-orange">
              <TrainIcon size={24} />
            </div>
            <h3>Comprehensive Data</h3>
            <p>Covering the entire IRCTC network with the most accurate and fastest schedule resolution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
