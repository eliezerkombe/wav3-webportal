import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import './LandingPage.css';

function NavigationBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md w-full bg-black-500">
      <h1 className="text-lg font-semibold text-gray-700">Wav3 Admin Portal</h1>
      <div class="flex-auto w-64 ..."/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Login
      </button>
    </nav>
  );
}

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 bg-gradient-to-b from-red-400 to-purple-500">
      <NavigationBar/>
      <h1 className="text-4xl font-bold text-gray-700 mt-8">Welcome to my landing page</h1>
      <p className="text-lg font-light text-gray-700 mt-4">This is a sample landing page built with React and Tailwind CSS.</p>
      <button className="mx-auto mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Sign Up
      </button>
    </div>
  );
}

const BusinessInfoCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    businessName: 'The Cheers Pub',
    address: '123 Main St, Anytown, USA',
    description: 'A cozy bar with a friendly atmosphere, offering a wide selection of beers on tap and tasty pub food.',
    musicGenre: 'Rock',
    venueType: 'Bar',
  });

  const Item = ({ icon, label, value }) => {
    if (isEditing) {
      return (
        <div className="flex items-center mb-2">
          <i className={`${icon} fa-lg text-gray-500 mr-2`}></i>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
            <input
              className="w-full rounded-md px-2 py-1 text-sm text-gray-700 border-2 border-gray-300 focus:border-gray-500 focus:outline-none"
              type="text"
              defaultValue={value}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center mb-2">
          <i className={`${icon} fa-lg text-gray-500 mr-2`}></i>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
            <div className="text-sm text-gray-600">{value}</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-lg bg-white min-w-300">
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-700">Business Info</h3>
        <div className="mt-4">
          <Item
            icon="fas fa-building"
            label="Business Name"
            value={values.businessName}
          />
          <Item
            icon="fas fa-map-marker-alt"
            label="Address"
            value={values.address}
          />
          <Item
            icon="fas fa-info-circle"
            label="Description"
            value={values.description}
          />
          <Item
            icon="fas fa-music"
            label="Music Genre"
            value={values.musicGenre}
          />
          <Item
            icon="fas fa-home"
            label="Venue Type"
            value={values.venueType}
          />
        </div>
                <div className="mt-6 flex justify-end">
          {isEditing ? (
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white hover:bg-green-600"
            >
              <i className="fas fa-save mr-1"></i>
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <i className="fas fa-edit mr-1"></i>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-lg bg-white min-w-300">
      {/* first card */}
    </div>
  )
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    { name: "Conference", date: "12/13/2022" },
    { name: "Meeting", date: "12/15/2022" },
    { name: "Workshop", date: "12/17/2022" },
  ]);

  const handleDelete = (event) => {
    setEvents(events.filter((e) => e !== event));
  };

  const handleAdd = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-lg bg-white min-w-300">
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-700">Upcoming Events</h3>
        <div className="mt-4">
          {events.map((event) => (
            <div key={event.name} className="mb-4">
              <p>
                {event.name}: {event.date}
              </p>
              <button onClick={() => handleDelete(event)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Event name"
            className="border rounded-lg p-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <input
            type="date"
            className="border rounded-lg p-2 flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <button onClick={(e) => {handleAdd(e.target.value); e.target.value = "";}}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-200">
      <div className={`w-64 bg-white shadow-md ${menuOpen ? 'block' : 'hidden'}`}>
        <nav className="py-4 px-2 h-full">
          <h3 className="text-lg font-semibold text-gray-700">Menu</h3>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="block px-2 py-1 text-gray-600 hover:bg-gray-300">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block px-2 py-1 text-gray-600 hover:bg-gray-300">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block px-2 py-1 text-gray-600 hover:bg-gray-300">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="flex justify-between items-center px-4 py-3">
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-300 rounded-full bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fas fa-bars fa-lg"></i>
            </button>
            <div class="flex-auto w-64 ..."/>
            <a href="#" className="px-2 py-1 text-gray-600 hover:bg-gray-300">Dashboard</a>
          </div>
        </header>
        <main className="h-full p-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <BusinessInfoCard />
          <UpcomingEvents />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
    </div>
  );
};

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([
//     { name: "Conference", date: "12/13/2022" },
//     { name: "Meeting", date: "12/15/2022" },
//     { name: "Workshop", date: "12/17/2022" },
//   ]);

//   const handleDelete = (event) => {
//     setEvents(events.filter((e) => e !== event));
//   };

//   const handleAdd = (event) => {
//     setEvents([...events, event]);
//   };

//   return (
//     <div className="border rounded-lg p-6 bg-white">
//       <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
//       {events.map((event) => (
//         <div key={event.name} className="mb-4 flex justify-between items-center">
//           <p>
//             {event.name}: {event.date}
//           </p>
//           <button className="text-xs" onClick={() => handleDelete(event)}>
//             <i className="fas fa-trash-alt"></i>
//           </button>
//         </div>
//       ))}
//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Event name"
//           className="border rounded-lg p-2 flex-1 mr-2"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleAdd(e.target.value);
//               e.target.value = "";
//             }
//           }}
//         />
//         <input
//           type="date"
//           className="border rounded-lg p-2 flex-1"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleAdd(e.target.value);
//               e.target.value = "";
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };


function App() {
  return (
    <>
      <Router>
          <Dashboard />
      </Router>
    </>
  );
}

export default App;
