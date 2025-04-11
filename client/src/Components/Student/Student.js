// import React, { useState } from "react";
// import "./Student.css";
// import StudentApartmentCard from "../StudentApartmentCard/StudentApartmentCard";
// import SearchBar from "../SearchBar/SearchBar";

// const Student = () => {

//     const [filteredApartments, setFilteredApartments] = useState([]);
//     const [apartments] = useState([
//         {
//             image: "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_auto,f_auto/4295-228/lyle-apartments-exterior",
//             name: "Greenfield Apartments",
//             address: "123 University St, Cityville",
//             price: "1200",
//             specifications: ["2 Beds", "2 Baths", "Near Campus", "Pet Friendly"],
//         },
//         {
//             image: "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
//             name: "Campus View Residences",
//             address: "456 College Ave, Townsville",
//             price: "900",
//             specifications: ["1 Bed", "1 Bath", "Gym Included", "Furnished"],
//         },
//         {
//             image: "https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.jpg?s=2048x2048&w=is&k=20&c=dW_OrTouBOaSjW1TLyLdY3cgksL1EdpV90Siecr_4n0=",
//             name: "Hillside Apartments",
//             address: "789 Dorm Rd, Cityville",
//             price: "1500",
//             specifications: ["3 Beds", "2 Baths", "Pool Access", "Parking Included"],
//         },
//     ]);

//     const handleSearch = (query) => {
//         const results = apartments.filter((apartment) =>
//             apartment.address.toLowerCase().includes(query.toLowerCase())
//         );
//         setFilteredApartments(results);
//     };

//     return (
//         <div className="student-page">
//             {/* Welcome Section */}
//             <section className="student-welcome">
//                 <h1>Welcome Students!</h1>
//                 <p>Find the best apartments near your university, tailored to your needs.</p>
//             </section>

//             {/* Search Bar */}
//             <SearchBar onSearch={handleSearch} />

//             {/* Apartments Section */}
//             <section className="student-apartments">
//                 <h2>Available Apartments</h2>
//                 <div className="apartments-grid">
//                     {(filteredApartments.length > 0 ? filteredApartments : apartments).map(
//                         (apartment, index) => (
//                             <StudentApartmentCard key={index} {...apartment} />
//                         )
//                     )}
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default Student;
import React, { useState, useEffect } from "react";
import "./Student.css";
import StudentApartmentCard from "../StudentApartmentCard/StudentApartmentCard";
import SearchBar from "../SearchBar/SearchBar";

const Student = () => {
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [apartments, setApartments] = useState([ 
    // Static fallback apartments if the API isn't ready
    // {
    //   image: "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_auto,f_auto/4295-228/lyle-apartments-exterior",
    //   name: "Greenfield Apartments",
    //   address: "123 University St, Cityville",
    //   price: "1200",
    //   specifications: ["2 Beds", "2 Baths", "Near Campus", "Pet Friendly"],
    // },
    // {
    //   image: "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
    //   name: "Campus View Residences",
    //   address: "456 College Ave, Townsville",
    //   price: "900",
    //   specifications: ["1 Bed", "1 Bath", "Gym Included", "Furnished"],
    // },
    // {
    //   image: "https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.jpg?s=2048x2048&w=is&k=20&c=dW_OrTouBOaSjW1TLyLdY3cgksL1EdpV90Siecr_4n0=",
    //   name: "Hillside Apartments",
    //   address: "789 Dorm Rd, Cityville",
    //   price: "1500",
    //   specifications: ["3 Beds", "2 Baths", "Pool Access", "Parking Included"],
    // }
  ]);

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
            image: `${process.env.REACT_APP_API_BASE_URL}/api/listings/uploads/${apartment.images?.[0]}`, // Assuming 'images' contains filenames
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

