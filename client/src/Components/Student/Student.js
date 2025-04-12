import React, { useState, useEffect } from "react";
import "./Student.css";
import StudentApartmentCard from "../StudentApartmentCard/StudentApartmentCard";
import SearchBar from "../SearchBar/SearchBar";

const Student = () => {
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [apartments, setApartments] = useState([]);

  // Fetch apartments when component mounts
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/listings`);
        const data = await response.json();
  
        if (Array.isArray(data)) {
          // Prepend the image URL with the server path
          const updatedData = data.map((apartment) => ({
            ...apartment,
            image: `${process.env.REACT_APP_API_BASE_URL}/uploads/${apartment.images?.[0]}`, // Assuming 'images' contains filenames
            specifications: apartment.specifications ?? [], // Default empty array for specifications
          }));
          setApartments(updatedData); // Set apartments with updated image URL
        } else {
          console.error("Received data is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };
  
    fetchApartments();
  }, []);

  const handleSearch = (query) => {
    const results = apartments.filter((apartment) =>
      apartment.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredApartments(results);
  };

  return (
    <div className="student-page">
      {/* Welcome Section */}
      <section className="student-welcome">
        <h1>Welcome Students!</h1>
        <p>Find the best apartments near your university, tailored to your needs.</p>
      </section>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Apartments Section */}
      <section className="student-apartments">
        <h2>Available Apartments</h2>
        <div className="apartments-grid">
          {(filteredApartments.length > 0 ? filteredApartments : apartments).map(
            (apartment, index) => (
              <StudentApartmentCard key={index} {...apartment} />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Student;

