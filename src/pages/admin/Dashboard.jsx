import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="mt-3 text-3xl font-bold text-indigo-600">124</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="mt-3 text-3xl font-bold text-green-600">98</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">New Registrations</h2>
          <p className="mt-3 text-3xl font-bold text-orange-500">12</p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">System Overview</h2>

        <p className="text-gray-600">
          Welcome to the Admin Dashboard. Here you can manage users, monitor
          activity, and control application settings.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
