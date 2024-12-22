import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';

const DonationAppealsDashboard = () => {
  const [appeals, setAppeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppeals = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('/api/users/my-appeals', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppeals(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch appeals');
      } finally {
        setLoading(false);
      }
    };

    fetchAppeals();
  }, []);

  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Donation Appeals</h1>
        <button
          onClick={() => navigate('/main/add-donation')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          New Appeal
        </button>
      </div>

      {appeals.length === 0 ? (
        <div className="p-6 text-center text-gray-600">
          You haven't created any donation appeals yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appeals.map((appeal) => (
            <div key={appeal._id} className="overflow-hidden">
              <img 
                src={appeal.image} 
                alt={appeal.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{appeal.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Raised: PKR {appeal.raised}</span>
                    <span>Goal: PKR {appeal.goal}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${calculateProgress(appeal.raised, appeal.goal)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Views: {appeal.views}</span>
                  <span>Reaches: {appeal.reaches}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/main/edit-appeal/${appeal._id}`)}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    <PencilIcon className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`/donation-calls/${appeal._id}`)}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    <EyeIcon className="h-4 w-4" />
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationAppealsDashboard;