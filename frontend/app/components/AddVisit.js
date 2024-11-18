'use client';

import { useState } from 'react';
import axios from 'axios';

const AddVisit = ({ slug }) => {
  const [formData, setFormData] = useState({
    uid: slug,
    visit: '', // Visit type (Consultant, Operation, Follow-up)
    amount: '',
    notes: '',
    followUpVisit: '', // Follow-up visit as a date
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Reset error message

    try {
      // Send the visit data to the backend (assumed endpoint is POST to /visit)
      const response = await axios.post(`http://localhost:8000/visit`, formData);
      console.log('Visit added successfully:', response.data);
      setFormData({ visit: '', amount: '', notes: '', followUpVisit: '' }); // Reset form
    } catch (err) {
      setError('Failed to add visit: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-6">Add Visit</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Visit Type Dropdown */}
        <div>
          <label htmlFor="visit" className="block text-lg font-medium">Visit Type</label>
          <select
            id="visit"
            name="visit"
            value={formData.visit}
            onChange={handleChange}
            className="bg-gray-800 text-white border-2 border-gray-600 p-3 rounded-md w-full"
            required
          >
            <option value="">Select Visit Type</option>
            <option value="consultant">Consultant</option>
            <option value="operation">Operation</option>
            <option value="followup">Follow-up</option>
          </select>
        </div>

        {/* Amount Field */}
        <div>
          <label htmlFor="amount" className="block text-lg font-medium">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="bg-gray-800 text-white border-2 border-gray-600 p-3 rounded-md w-full"
            required
          />
        </div>

        {/* Notes Field */}
        <div>
          <label htmlFor="notes" className="block text-lg font-medium">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="bg-gray-800 text-white border-2 border-gray-600 p-3 rounded-md w-full"
            rows="4"
          />
        </div>

        {/* Follow-Up Visit Date Field */}
        <div>
          <label htmlFor="followUpVisit" className="block text-lg font-medium">Follow-Up Visit</label>
          <input
            type="date"
            id="followUpVisit"
            name="followUpVisit"
            value={formData.followUpVisit}
            onChange={handleChange}
            className="bg-gray-800 text-white border-2 border-gray-600 p-3 rounded-md w-full"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding Visit...' : 'Add Visit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVisit;
