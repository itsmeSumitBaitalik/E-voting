import React, { useState } from 'react';
import { Bell, Lock, Eye, EyeOff } from 'lucide-react';

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    browser: true,
  });

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

          <div className="space-y-6">
            {/* Password Section */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Password Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Password</label>
                  <div className="mt-1 relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                  />
                </div>
                <button className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Update Password
                </button>
              </div>
            </div>

            {/* Notifications Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </h3>
              <div className="space-y-4">
                <NotificationToggle
                  label="Email Notifications"
                  description="Receive updates about elections and voting"
                  checked={notifications.email}
                  onChange={() => handleNotificationChange('email')}
                />
                <NotificationToggle
                  label="SMS Notifications"
                  description="Get text messages for important updates"
                  checked={notifications.sms}
                  onChange={() => handleNotificationChange('sms')}
                />
                <NotificationToggle
                  label="Browser Notifications"
                  description="Receive desktop notifications"
                  checked={notifications.browser}
                  onChange={() => handleNotificationChange('browser')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationToggle({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium text-gray-800">{label}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          checked ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onClick={onChange}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
