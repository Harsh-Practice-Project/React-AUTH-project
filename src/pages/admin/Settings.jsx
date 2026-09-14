import React from "react";

const Settings = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold">Settings</h1>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">Application Name</label>

          <input
            type="text"
            defaultValue="React Auth Project"
            className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Support Email</label>

          <input
            type="email"
            defaultValue="support@example.com"
            className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
          />
        </div>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
