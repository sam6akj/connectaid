import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('/api/users/my-contributions', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setContributions(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Contributions</h1>
      
      {contributions.length === 0 ? (
        <div className="p-6 text-center text-gray-600">
          You haven't made any donations yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((contribution) => (
            <div key={contribution._id} className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {contribution.donationAppeal.title}
              </h3>
              <div className="text-gray-600 mb-4">
                <p>Amount: PKR {contribution.amount}</p>
                <p>Date: {new Date(contribution.createdAt).toLocaleDateString()}</p>
                <p>Status: {contribution.status}</p>
              </div>
              {contribution.message && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm italic">{contribution.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserContributions;