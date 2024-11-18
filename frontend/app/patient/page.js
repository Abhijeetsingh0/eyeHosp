"use client"

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from 'react-icons/fa';

const Patient = () => {
    const [patients, setPatients] = useState(null);   // Patient data state
    const [loading, setLoading] = useState(true);   // Loading state
    const [error, setError] = useState(null);       // Error state
    const [isOpen, setIsOpen] = useState(false);
    const [searchType, setSearchType] = useState(null);
    const [query, setQuery] = useState('');

    const router = useRouter();

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const fetchPatientData = async () => {
            axios.get('http://localhost:8000/patient')
                .then(function (response) {
                    setPatients(response.data.body);
                })
                .catch(function (error) {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchPatientData();  // Call the function to fetch data
    }, []);

    if (loading) {
        return <div>Loading...</div>;  // Show loading text while fetching data
    }

    if (error) {
        return <div>{error}</div>;  // Show error message if something goes wrong
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchType === "contact") {
            axios.get(`http://localhost:8000/patient/contact/${query}`)
                .then(function (response) {
                    setPatients(response.data.body);
                })
                .catch(function (error) {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                    console.log("l0")
                });
        } else if (searchType === "name") {
            axios.get(`http://localhost:8000/patient/name/${query}`)
                .then(function (response) {
                    setPatients(response.data.body);
                })
                .catch(function (error) {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                    console.log("l1")
                });
        } else {
            axios.get('http://localhost:8000/patient')
                .then(function (response) {
                    setPatients(response.data.body);
                })
                .catch(function (error) {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                    console.log("l2")
                });
        }
    };

    // Check if both searchType and query are filled
    const isSearchActive = searchType && query;

    return (
        <div>
            <h1 className="text-6xl">Patient page</h1>
            <div className="mt-12">
                <button className="border-4 p-4 text-4xl rounded-xl px-16">
                    <Link href="patient/addNewPatient"> <i className="fa-solid fa-plus"></i> </Link>
                </button>
            </div>

            <div className="mt-4 flex items-center space-x-4">
                {/* Dropdown Button */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {searchType != null && searchType !== "" ? searchType : "Select Option"}
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <li
                                onClick={() => {
                                    setSearchType("contact");
                                    setIsOpen(false);
                                }}
                                className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                                Contact
                            </li>
                            <li
                                onClick={() => {
                                    setSearchType("name");
                                    setIsOpen(false);
                                }}
                                className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                                Name
                            </li>
                        </ul>
                    )}
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSubmit} className="relative w-full max-w-xs">
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search..."
                        className="w-full px-4 py-2 pl-10 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ${!isSearchActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isSearchActive} // Disable button if searchType or query is empty
                    >
                        <FaSearch className="w-5 h-5" />
                    </button>
                </form>
            </div>

            <div className="mt-4">
                <ul>
                    {patients.map((patient, index) => (
                        <div
                            key={index}
                            onClick={() => router.push("/patient/" + patient._id)}
                            className="mb-4 p-4 px-12 border rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition-all"
                        >
                            <li className="flex justify-between items-center text-gray-100">
                                <h1 className="text-xl font-semibold uppercase">
                                    <strong>{patient.name}</strong>
                                </h1>
                                <div className="ml-4 text-gray-100">
                                    <p className="text-sm">
                                        <strong>Contact:</strong> {patient.contact}
                                    </p>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Patient;
