// App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

// För att se om datan från sqlite databasen kan kommas åt från frontend

// import React, { useState } from "react";
// import axios from "axios";

// const ImageFetcher: React.FC = () => {
//   const [imageSrc, setImageSrc] = useState<string | null>(null);

//   const fetchImage = async () => {
//     try {
//       const response = await axios.get("/image", {
//         params: { id: 1 }, // Replace with the actual image ID you want to fetch
//         responseType: "blob",
//       });

//       const url = URL.createObjectURL(new Blob([response.data]));
//       setImageSrc(url);
//     } catch (error) {
//       console.error("Error fetching image:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchImage}>Show Image</button>
//       {imageSrc && <img src={imageSrc} alt="Fetched from server" />}
//     </div>
//   );
// };

// export default ImageFetcher;
