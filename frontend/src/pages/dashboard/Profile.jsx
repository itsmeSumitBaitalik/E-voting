import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import {
  UserIcon,
  ShieldCheckIcon,
  IdentificationIcon,
  BellIcon,
  DevicePhoneMobileIcon,
  UserMinusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const profileSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().optional(),
  address: z.string().optional(),
  preferred_language: z.string(),
  email_notifications: z.boolean(),
  sms_alerts: z.boolean(),
});

const sections = [
  { id: 'personal', name: 'Personal Information', icon: UserIcon },
  { id: 'security', name: 'Security & Authentication', icon: ShieldCheckIcon },
  { id: 'voter', name: 'Voter Information', icon: IdentificationIcon },
  { id: 'notifications', name: 'Notifications & Preferences', icon: BellIcon },
  { id: 'devices', name: 'Device & Session Management', icon: DevicePhoneMobileIcon },
  { id: 'account', name: 'Account Management', icon: UserMinusIcon },
  { id: 'help', name: 'Help & Support', icon: QuestionMarkCircleIcon },
];

export default function ProfileSettings() {
  const [activeSection, setActiveSection] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: 'John Doe',
      email: 'john@example.com',
      phone_number: '+1234567890',
      preferred_language: 'en',
      email_notifications: true,
      sms_alerts: true,
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log('Updating profile:', data);
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`${
                    activeSection === section.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full`}
                >
                  <section.icon
                    className={`${
                      activeSection === section.id ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                    } flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
                  />
                  <span className="truncate">{section.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="md:col-span-9 mt-5 md:mt-0">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
              {activeSection === 'personal' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                      <button
                        type="button"
                        onClick={() => setIsEditing(!isEditing)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        {isEditing ? 'Cancel' : 'Edit'}
                      </button>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Profile Picture */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                        <div className="mt-1 flex items-center">
                          <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <UserIcon className="h-full w-full text-gray-300" />
                          </span>
                          <button
                            type="button"
                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Change
                          </button>
                        </div>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          {...register('full_name')}
                          disabled={!isEditing}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.full_name && (
                          <p className="mt-1 text-sm text-red-600">{errors.full_name.message}</p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          disabled={true} // Always read-only if verified
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 sm:text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          disabled={!isEditing}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="tel"
                            {...register('phone_number')}
                            disabled={!isEditing}
                            className="flex-1 block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm"
                          >
                            Verify
                          </button>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <textarea
                          {...register('address')}
                          disabled={!isEditing}
                          rows={3}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      {isEditing && (
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save Changes
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                )}
                
                {activeSection === 'security' && (
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-6">Security & Authentication</h3>
                    
                    {/* Password Management */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Password Management</h4>
                        <div className="mt-2 space-y-2">
                          <button className="text-indigo-600 hover:text-indigo-500">Change Password</button>
                          <button className="block text-indigo-600 hover:text-indigo-500">Reset Password</button>
                        </div>
                      </div>

                      {/* 2FA */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                        <div className="mt-2">
                          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            Enable 2FA
                          </button>
                        </div>
                      </div>

                      {/* Biometric Authentication */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Biometric Authentication</h4>
                        <div className="mt-2">
                          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            Set Up Biometric Login
                          </button>
                        </div>
                      </div>

                      {/* Security Questions */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Security Questions</h4>
                        <div className="mt-2">
                          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            Manage Security Questions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'voter' && (
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-6">Voter Information</h3>
                    
                    <div className="space-y-6">
                      {/* Voter ID */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Voter ID</label>
                        <input
                          type="text"
                          disabled
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 sm:text-sm"
                          value="VOT123456789"
                        />
                      </div>

                      {/* Linked Government IDs */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Linked Government IDs</h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span>SSN</span>
                            <span className="text-green-600">Verified</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span>Driver's License</span>
                            <button className="text-indigo-600">Link</button>
                          </div>
                        </div>
                      </div>

                      {/* Voting Status */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Voting Status</h4>
                        <div className="mt-2 p-3 bg-green-50 text-green-700 rounded-md">
                          Eligible to Vote
                        </div>
                      </div>

                      {/* Election History */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Election Participation History</h4>
                        <div className="mt-2 space-y-2">
                          <div className="p-3 border rounded-md">
                            <div className="font-medium">2024 General Election</div>
                            <div className="text-sm text-gray-500">Participated</div>
                          </div>
                          <div className="p-3 border rounded-md">
                            <div className="font-medium">2023 Local Election</div>
                            <div className="text-sm text-gray-500">Participated</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'notifications' && (
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-6">Notifications & Preferences</h3>
                    
                    <div className="space-y-6">
                      {/* Email Notifications */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                          <p className="text-sm text-gray-500">Receive election updates via email</p>
                        </div>
                        <button
                          type="button"
                          className={`${
                            true ? 'bg-indigo-600' : 'bg-gray-200'
                          } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                          <span className="sr-only">Enable email notifications</span>
                          <span
                            className={`${
                              true ? 'translate-x-5' : 'translate-x-0'
                            } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                          />
                        </button>
                      </div>

                      {/* SMS Alerts */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">SMS Alerts</h4>
                          <p className="text-sm text-gray-500">Receive important updates via SMS</p>
                        </div>
                        <button
                          type="button"
                          className={`${
                            true ? 'bg-indigo-600' : 'bg-gray-200'
                          } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                          <span className="sr-only">Enable SMS alerts</span>
                          <span
                            className={`${
                              true ? 'translate-x-5' : 'translate-x-0'
                            } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                          />
                        </button>
                      </div>

                      {/* Language Preference */}
                      <div>
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                          Preferred Language
                        </label>
                        <select
                          id="language"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'devices' && (
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-6">Device & Session Management</h3>
                    
                    {/* Active Sessions */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">Active Sessions</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">Current Device</div>
                              <div className="text-sm text-gray-500">Chrome on MacOS • New York, USA</div>
                            </div>
                            <button className="text-indigo-600 hover:text-indigo-500">Logout</button>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">iPhone 13</div>
                              <div className="text-sm text-gray-500">iOS App • Los Angeles, USA</div>
                            </div>
                            <button className="text-indigo-600 hover:text-indigo-500">Logout</button>
                          </div>
                        </div>
                      </div>

                      {/* Login History */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">Recent Login History</h4>
                        <div className="space-y-3">
                          <div className="p-4 border rounded-lg">
                            <div className="font-medium">Chrome on Windows</div>
                            <div className="text-sm text-gray-500">Yesterday at 15:30 • Chicago, USA</div>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <div className="font-medium">Safari on iPhone</div>
                            <div className="text-sm text-gray-500">3 days ago • Miami, USA</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Logout from All Devices
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'account' && (
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-6">Account Management</h3>
                    
                    <div className="space-y-6">
                      {/* Deactivate Account */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Deactivate Account</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Temporarily disable your account. You can reactivate it anytime.
                        </p>
                        <button className="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Deactivate Account
                        </button>
                      </div>

                      {/* Delete Account */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Delete Account</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <button className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'help' && (
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-6">Help & Support</h3>
                    
                    <div className="space-y-6">
                      {/* FAQs */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Frequently Asked Questions</h4>
                        <div className="mt-2 space-y-2">
                          <button className="block text-indigo-600 hover:text-indigo-500">
                            How do I verify my voter ID?
                          </button>
                          <button className="block text-indigo-600 hover:text-indigo-500">
                            What documents do I need for verification?
                          </button>
                          <button className="block text-indigo-600 hover:text-indigo-500">
                            How can I update my address?
                          </button>
                        </div>
                      </div>

                      {/* Contact Support */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Contact Support</h4>
                        <div className="mt-2 space-y-3">
                          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Start Live Chat
                          </button>
                          <button className="block text-indigo-600 hover:text-indigo-500">
                            Send Email
                          </button>
                          <button className="block text-indigo-600 hover:text-indigo-500">
                            Submit Support Ticket
                          </button>
                        </div>
                      </div>

                      {/* Report Issue */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Report an Issue</h4>
                        <div className="mt-2">
                          <textarea
                            rows={4}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Describe the issue you're experiencing..."
                          />
                          <button className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}