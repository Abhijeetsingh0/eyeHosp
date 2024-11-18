import axios from 'axios';
import util from 'util';
import DeletePatient from '@/app/components/DeletePatient';
import AddVisit from '@/app/components/AddVisit';

async function getData(slug) {
  try {
    // Fetch data based on the slug from an API using axios
    const response = await axios.get(`http://localhost:8000/patient/${slug}`);
    console.log(util.inspect(response.data, { showHidden: false, depth: null }));
    return response.data.body;
  } catch (error) {
    throw new Error('Failed to fetch data: ' + error.message);
  }
}

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const options = {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2024"
    month: 'long', // "July"
    day: 'numeric', // "15"
    hour: 'numeric', // "12 PM"
    minute: 'numeric', // "11"
  };
  return date.toLocaleDateString('en-US', options);
};

async function getHistory(slug) {
  try {
    // Fetch data based on the slug from an API using axios
    const response = await axios.get(`http://localhost:8000/visit/uid/${slug}`);
    
    // Log only the relevant part of the response (i.e., response.data)
    console.log(response.data.body);  // Just log response data
    
    return response.data.body;  // Assuming 'body' contains the visit history
  } catch (error) {
    throw new Error('Failed to fetch data: ' + error.message);
  }
}

export default async function PatientPage({ params }) {
  // Await the params object first (Next.js dynamic route params)
  const { slug } = await params; // <-- This is the fix: await params

  try {
    // Fetch data for this specific patient
    const data = await getData(slug);
    const histData = await getHistory(slug);
    
    return (
      <div className="flex">
        <div className="w-full space-y-12">
          {/* Patient Info and Add Visit Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:flex md:space-x-12">
            {/* Left Section: Patient Info */}
            <div className="flex-1 text-white space-y-4">
              <h1 className="text-3xl font-semibold">{data.name}</h1>
              <p className="text-lg"><strong>Date of Birth:</strong> {data.DOB}</p>
              <p className="text-lg"><strong>Contact:</strong> {data.contact}</p>
              <p className="text-lg"><strong>Place:</strong> {data.place}</p>
              <div className="flex justify-center items-center mt-6">
                <DeletePatient slug={slug} />
              </div>
            </div>

            {/* Right Section: Add Visit Form */}
            <div className="flex-1">
              <AddVisit slug={slug} />
            </div>
          </div>

          {/* Visit History Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Visit History</h2>
            
            <div className='mt-8'>
              {histData.map((visit, index) => (
                <div
                      key={index}
                      
                      className="mb-4 p-4 px-12 border rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition-all"
                  >
                      <li className="flex justify-between items-center text-gray-100">
                          <h1 className="text-xl font-semibold uppercase">
                              <strong>{visit.visit}</strong>
                          </h1>
                          <div className="ml-4 text-gray-100">
                              <p className="text-sm">
                                  <strong>Contact:</strong> {visit.amount}
                              </p>
                          </div>
                          <div className="ml-4 text-gray-100">
                              <p className="text-sm">
                                  <strong>FollowUp:</strong> {visit.followUpVisit}
                              </p>
                          </div>
                          <div className="ml-4 text-gray-100">
                              <p className="text-sm">
                                  <strong>Date:</strong> {formatDate(visit.createdAt)}
                              </p>
                          </div>
                      </li>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Error handling if fetch fails
    return <div className="text-center text-red-600 text-lg">Error: {error.message}</div>;
  }
}
