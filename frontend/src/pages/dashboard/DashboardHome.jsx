import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Vote, Users, BarChart } from 'lucide-react';

export default function DashboardHome() {
  const { user } = useAuth();
  const {voterCount} = useAuth()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-gray-600">Here's what's happening with the current election.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Vote className="w-8 h-8 text-green-600" />}
          title="Active Elections"
          value={voterCount}
          description="Current ongoing elections"
        />
        <StatCard
          icon={<Users className="w-8 h-8 text-blue-600" />}
          title="Registered Voters"
          value="15,234"
          description="Total registered voters"
        />
        <StatCard
          icon={<BarChart className="w-8 h-8 text-purple-600" />}
          title="Voter Turnout"
          value="67%"
          description="Current participation rate"
        />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Elections</h2>
        <div className="space-y-4">
          <ElectionItem
            title="City Council Election"
            date="March 15, 2024"
            status="Registration Open"
            type="Local"
          />
          <ElectionItem
            title="State Governor Election"
            date="April 5, 2024"
            status="Coming Soon"
            type="State"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, description }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ElectionItem({ title, date, status, type }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">Date: {date}</p>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{type}</span>
      </div>
      <div className="text-right">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          {status}
        </span>
      </div>
    </div>
  );
}
