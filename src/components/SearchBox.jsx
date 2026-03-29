import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import './SearchBox.css';
import { trainsDatabase } from '../utils/mockData';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('pnr'); // pnr, train
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Find train
      const trainInfo = trainsDatabase.find(t => t.trainNumber === query || t.trainName.toLowerCase().includes(query.toLowerCase()));
      if (trainInfo) {
        navigate(`/train/${trainInfo.trainNumber}`);
      } else {
        alert("Train not found in mock data. Try 12951 or 12004.");
      }
    }
  };

  return (
    <div className="search-box glass-panel animate-fade-in">
      <div className="search-tabs">
        <button 
          className={`tab-btn ${activeTab === 'pnr' ? 'active' : ''}`}
          onClick={() => setActiveTab('pnr')}
        >
          Check PNR
        </button>
        <button 
          className={`tab-btn ${activeTab === 'train' ? 'active' : ''}`}
          onClick={() => setActiveTab('train')}
        >
          Train Status
        </button>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="input-group">
          <div className="input-icon">
            {activeTab === 'pnr' ? <MapPin size={20} /> : <Search size={20} />}
          </div>
          <input 
            type="text" 
            placeholder={activeTab === 'pnr' ? "Enter 10-digit PNR" : "Enter Train No. (e.g., 12951)"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <button type="submit" className="search-submit">
          Check Now
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
