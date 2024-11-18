"use client"

import { useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');
  const [place, setPlace] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if(contact.length != 10){
      setError("Contact number must be ten digits, Please check the number!")
    }else{
    // Data to be sent to the backend
      setName(String(name).toLowerCase())
      const patientData = { name:name, DOB:dob, contact:contact, place:place };
      console.log(dob)
      try {
        // Replace with your actual API endpoint
        const response = await axios.post('http://localhost:8000/patient', patientData);

        setLoading(false);
        setSuccess(true);
        setName('');
        setDob('');
        setContact('');
        setPlace('');

        // Optionally redirect to the patient list or the new patient's page
        router.push('/patient');
      } catch (err) {
        setLoading(false);
        setError('Error adding patient. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-800 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-semibold mb-6">Add New Patient</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">Patient added successfully!</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-large text-slate">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 text-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-lg font-medium text-slate">Date of Birth</label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 block text-slate-900 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block text-lg font-medium text-slate">Contact Number</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1 block text-slate-900 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="place" className="block text-lg font-medium text-slate">Place</label>
          <input
            type="text"
            id="place"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="mt-1 block w-full text-slate-900 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md focus:outline-none hover:bg-blue-700 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? 'Adding Patient...' : 'Add Patient'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
