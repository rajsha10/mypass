// Assets
import down from '../assets/angle-down-solid.svg';
import { useState } from 'react';

// Sample data (normally this would be imported from your JSON file)
const genres = ["Sports", "Blockchain", "Hackathon", "Cultural", "Technology", "Startup", "Literary", "Art"];
const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const Sort = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="sort">
      <div className="sort__select">
        <p>Select Your Genre</p>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">Select Genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
        <img src={down} alt="Dropdown" />
      </div>

      <div className="sort__select">
        <p>Select Your Dates</p>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
        <img src={down} alt="Dropdown" />
      </div>

      <div className="sort__select">
        <p>Select Your Distance</p>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
        <img src={down} alt="Dropdown" />
      </div>
    </div>
  );
};

export default Sort;
