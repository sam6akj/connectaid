import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCallCard = ({ call }) => {
  const navigate = useNavigate();
  const progress = Math.min((call.raised / call.goal) * 100, 100);

  return (
    <div className="donation-card bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
      <div className="relative w-full h-48">
        <img 
          src={call.image} 
          alt={call.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
          {call.category}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{call.title}</h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-1">{call.description}</p>
        <div className="mb-3">
          <div className="text-xs text-gray-500 flex justify-between mb-1">
            <span>PKR {call.raised} raised</span>
            <span>Goal: PKR {call.goal}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full transition-width duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <button
          onClick={() => navigate(`/donation-calls/${call.id}`)}
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonationCallCard;
