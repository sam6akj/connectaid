import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCallCard = ({ call }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
      <img 
        src={call.image} 
        alt={call.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{call.title}</h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{call.description}</p>
        <button
          onClick={() => navigate(`/donation-calls/${call.id}`)}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonationCallCard;
