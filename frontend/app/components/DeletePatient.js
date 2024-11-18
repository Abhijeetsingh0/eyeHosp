"use client";

import { useRouter } from 'next/navigation';
import axios from 'axios';

function DeletePatient({ slug }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      // Await the axios delete request to ensure it completes before redirecting
      const response = await axios.delete(`http://localhost:8000/patient/${slug}`);
      console.log('Delete response:', response.data);
      if (response.data.body.deletedCount === 0) {
        alert('No patient found to delete. Please try again.');
      } else {
        router.push('/patient');
      }
    } catch (error) {
      console.error('Delete failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <button
      className="border-2 px-6 py-3 rounded-xl bg-red-500 text-white flex justify-center items-center gap-2 hover:bg-red-600 transition duration-200"
      onClick={handleDelete}
    >
      <i className="fa-solid fa-trash"></i>
      <span>Delete</span>
    </button>
  );
}

export default DeletePatient;