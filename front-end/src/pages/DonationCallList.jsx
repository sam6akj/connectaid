import React, { useState } from 'react';
import DonationFilterBar from '../components/DonationFilterBar';
import DonationCallCard from '../components/DonationCallCard';
import '../styles/donation-list.css';

const DonationCallsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const donationCalls = [
    {
      id: 1,
      title: "Help Build a School in Kenya",
      description: "We aim to construct new classrooms and provide educational materials for children in rural Kenya.",
      image: "https://via.placeholder.com/600x400",
      category: "Education",
      goal: 5000,
      raised: 2000
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Providing access to clean and safe drinking water to communities without a reliable water source.",
      image: "https://via.placeholder.com/600x400",
      category: "Health",
      goal: 3000,
      raised: 1500
    },
    {
      id: 3,
      title: "Planting Trees in the Amazon",
      description: "Restore deforested areas by planting thousands of trees and preserving biodiversity.",
      image: "https://via.placeholder.com/600x400",
      category: "Environment",
      goal: 10000,
      raised: 2500
    },
    {
      id: 4,
      title: "Community Center for Youth",
      description: "A safe space for youth to learn, play, and receive mentorship in underserved neighborhoods.",
      image: "https://via.placeholder.com/600x400",
      category: "Community",
      goal: 4000,
      raised: 1000
    }
  ];

  const filteredCalls = donationCalls.filter(call => {
    const matchesSearch = call.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || call.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCalls = [...filteredCalls].sort((a, b) => {
    if (sortOption === "recent") {
      return b.id - a.id;
    } else if (sortOption === "goal_asc") {
      return a.goal - b.goal;
    } else if (sortOption === "goal_desc") {
      return b.goal - a.goal;
    }
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-blue-600 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="hero-title text-4xl font-extrabold text-white mb-2">Make a Difference</h1>
          <p className="hero-subtitle text-white text-lg">
            Explore and support life-changing donation calls.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 mt-4">
        <DonationFilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSortChange={setSortOption}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Donation Calls Grid */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        {sortedCalls.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedCalls.map(call => (
              <DonationCallCard key={call.id} call={call} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-20">
            <p>No donation calls found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination / Load More (Mock) */}
      {/* In a real scenario, you'd implement actual pagination or infinite scroll */}
      {sortedCalls.length > 0 && (
        <div className="max-w-7xl mx-auto mb-10 px-4 text-center">
          <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DonationCallsList;
