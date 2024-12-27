import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCallCard = ({ call }) => {
  const navigate = useNavigate();
  
  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const getStatusBadge = () => {
    switch (call.status) {
      case 'completed':
        return (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
            Completed
          </div>
        );
      case 'cancelled':
        return (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            Cancelled
          </div>
        );
      default:
        return (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
            Active
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        {getStatusBadge()}
        <img
          src={call.image || '/placeholder-image.jpg'}
          alt={call.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{call.title}</h3>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Raised: PKR {call.raised.toLocaleString()}</span>
            <span>Goal: PKR {call.goal.toLocaleString()}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className={`h-2 rounded-full ${
                call.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
              }`}
              style={{ width: `${calculateProgress(call.raised, call.goal)}%` }}
            ></div>
          </div>
        </div>
        <button
          onClick={() => navigate(`/main/donation-calls/${call._id}`)}
          disabled={call.status !== 'active'}
          className={`w-full py-2 rounded-md text-white ${
            call.status === 'active'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {call.status === 'active' ? 'Donate Now' : 'Donation Closed'}
        </button>
      </div>
    </div>
  );
};

export default DonationCallCard;