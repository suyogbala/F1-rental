// // import React from "react";
// // import "./PropertyOwner.css";

// // const PropertyOwner = () => {
// //   return (
// //     <div className="property-owner-container">
// //       <div className="property-owner-banner">
// //         <h1>Hi Rental Owners</h1>
// //         <p>
// //           Are you looking to rent to students but worried about payment consistency or managing cosigners? We make it easy for you!
// //         </p>
// //       </div>

// //       <div className="property-owner-content">
// //         <div className="feature-card">
// //           <h2>Pre-Screened Student Tenants</h2>
// //           <p>
// //             We connect you with responsible students actively searching for accommodation.
// //           </p>
// //         </div>
// //         <div className="feature-card">
// //           <h2>Reliable Payments, Every Time</h2>
// //           <p>
// //             As your trusted cosigner, we ensure timely rent payments, minimizing your risk and providing peace of mind.
// //           </p>
// //         </div>
// //         <div className="feature-card">
// //           <h2>Simplified Leasing Process</h2>
// //           <p>
// //             We handle the paperwork and help bridge the gap between you and student tenants, making the entire process smooth and hassle-free.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="property-owner-footer">
// //         {/* <p>
// //           Let us take the stress out of renting to students so you can enjoy steady rental income with minimal effort.
// //         </p> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyOwner;

// import React, { useState } from "react";
// import "./PropertyOwner.css";


// const PropertyOwner = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     address: "",
//     price: "",
//     description: "",
//     images: [],
//     questionnaire: {}
//   });

//   const questionnaireList = [
//     "What's the preferred lease duration?",
//     "Are utilities included in the rent?",
//     "What's your pet policy?",
//     "What amenities are included?",
//     "What's your policy on subletting?"
//   ];

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     // const imagesArray = files.map(file => ({
//     //   name: file.name,
//     //   data: URL.createObjectURL(file) // Convert to Base64 for local storage
//     // }));
//     // setFormData(prev => ({ ...prev, images: imagesArray }));
//     setFormData(prev => ({ ...prev, images: files }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Create FormData for file upload
//     const submissionData = new FormData();
//     for (const key in formData) {
//       if (key === 'images') {
//         formData.images.forEach(image => {
//           submissionData.append('images', image);
//         });
//       } else {
//         submissionData.append(key, formData[key]);
//       }
//     }

//     try {
//       // Send to backend
//       const response = await fetch('http://localhost:5051/api/listings', {
//         method: 'POST',
//         body: submissionData
//       });
      
//       if (response.ok) {
//         alert('Listing saved successfully!');
//         setShowForm(false);
//       }
//     } catch (error) {
//       console.error('Error saving listing:', error);
//     }
//   };

//   return (
//     <div className="property-owner-container">
//       {/* Existing banner and content */}

//       <div className="add-listing-section">
//         <button 
//           className="cta-button"
//           onClick={() => setShowForm(!showForm)}
//         >
//           Add Rental Property
//         </button>

//         {showForm && (
//           <form className="property-form" onSubmit={handleSubmit}>
//             <h2>Property Listing Form</h2>
            
//             {/* Basic Information */}
//             <div className="form-group">
//               <label>Property Title:</label>
//               <input
//                 type="text"
//                 required
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               />
//             </div>

//             {/* Image Upload */}
//             <div className="form-group">
//               <label>Upload Images:</label>
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//               <div className="image-preview">
//                 {formData.images.map((image, index) => (
//                   <img key={index} src={image.data} alt={image.name} />
//                 ))}
//               </div>
//             </div>

//             {/* Questionnaire */}
//             <div className="form-group">
//               <h3>Property Details</h3>
//               {questionnaireList.map((question, index) => (
//                 <div key={index} className="question-item">
//                   <label>{question}</label>
//                   <textarea
//                     rows="3"
//                     onChange={(e) => setFormData(prev => ({
//                       ...prev,
//                       questionnaire: {
//                         ...prev.questionnaire,
//                         [question]: e.target.value
//                       }
//                     }))}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button type="submit" className="submit-button">Save Listing</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PropertyOwner;

import React, { useState } from "react";
import "./PropertyOwner.css";

const PropertyOwner = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    price: "",
    description: "",
    images: [],
    questionnaire: {}
  });

  const questionnaireList = [
    "What's the preferred lease duration?",
    "Are utilities included in the rent?",
    "What's your pet policy?",
    "What amenities are included?",
    "What's your policy on subletting?"
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, images: files })); // keep File objects
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submissionData = new FormData();
    for (const key in formData) {
      if (key === 'images') {
        formData.images.forEach(image => {
          submissionData.append('images', image);
        });
      } else {
        submissionData.append(key, typeof formData[key] === 'object'
          ? JSON.stringify(formData[key])
          : formData[key]);
      }
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/listings`, {
        method: 'POST',
        body: submissionData
      });
      
      if (response.ok) {
        alert('Listing saved successfully!');
        setShowForm(false);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error saving listing:', error);
    }
  };

  return (
    <div className="property-owner-container">
      {/* 🔹 Banner Section */}
      <div className="property-owner-banner">
        <h1>Hi Rental Owners</h1>
        <p>
          Are you looking to rent to students but worried about payment consistency or managing cosigners? We make it easy for you!
        </p>
      </div>

      {/* 🔹 Feature Cards */}
      <div className="property-owner-content">
        <div className="feature-card">
          <h2>Pre-Screened Student Tenants</h2>
          <p>We connect you with responsible students actively searching for accommodation.</p>
        </div>
        <div className="feature-card">
          <h2>Reliable Payments, Every Time</h2>
          <p>As your trusted cosigner, we ensure timely rent payments, minimizing your risk and providing peace of mind.</p>
        </div>
        <div className="feature-card">
          <h2>Simplified Leasing Process</h2>
          <p>We handle the paperwork and help bridge the gap between you and student tenants, making the entire process smooth and hassle-free.</p>
        </div>
      </div>

      {/* 🔹 Listing Form Section */}
      <div className="add-listing-section">
        <button className="cta-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Rental Property"}
        </button>

        {showForm && (
          <form className="property-form" onSubmit={handleSubmit}>
            <h2>Property Listing Form</h2>

            <div className="form-group">
              <label>Property Title:</label>
              <input
                type="text"
                required
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                required
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                required
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                rows="3"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Upload Images:</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
              <div className="image-preview">
                {formData.images.map((img, idx) => (
                  <p key={idx}>{img.name}</p>
                ))}
              </div>
            </div>

            <div className="form-group">
              <h3>Property Details</h3>
              {questionnaireList.map((question, index) => (
                <div key={index} className="question-item">
                  <label>{question}</label>
                  <textarea
                    rows="2"
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        questionnaire: {
                          ...prev.questionnaire,
                          [question]: e.target.value
                        }
                      }))
                    }
                  />
                </div>
              ))}
            </div>

            <button type="submit" className="submit-button">Save Listing</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PropertyOwner;
