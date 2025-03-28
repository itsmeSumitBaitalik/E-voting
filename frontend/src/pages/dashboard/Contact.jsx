import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast, {Toaster} from 'react-hot-toast'
import { api } from '../../lib/axios';

export default function Contact() {
  const [loading,setLoading] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
    // const handleMessage = (e)=>{
    //   e.preventDefault()
    //   toast.success("Successfull Message Send",formData)
    // }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await api.post('/contact', formData);
        toast.success(response.data.message || 'Message sent successfully!');
        
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to send message.');
      }
  
      setLoading(false);
    };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Toaster/>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ContactInfo
              icon={<Phone className="w-5 h-5 text-blue-600" />}
              title="Phone"
              info="+91 22015-0533-000"
            />
            <ContactInfo
              icon={<Mail className="w-5 h-5 text-blue-600" />}
              title="Email"
              info="support@votesystem.com"
            />
            <ContactInfo
              icon={<MapPin className="w-5 h-5 text-blue-600" />}
              title="Address"
              info="Sector 12, Delhi"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                required
              >
                <option value="">Select a subject</option>
                <option value="technical">Technical Support</option>
                <option value="voting">Voting Information</option>
                <option value="registration">Voter Registration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 border"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              // onClick={handleSubmit}
              className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{info}</p>
      </div>
    </div>
  );
}
