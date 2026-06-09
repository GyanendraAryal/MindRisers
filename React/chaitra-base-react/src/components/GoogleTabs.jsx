// import React, { useState } from "react";
// import All from "./All";
// import Images from "./Images";
// import Videos from "./Videos";

// function GoogleTabs() {
//   const [activeTab, setActiveTab] = useState('all');

//   // Map tab identifiers to their respective components
//   const tabComponents = {
//     all: <All />,
//     images: <Images />,
//     videos: <Videos />
//   };

//   return (
//     <>
//       <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
//         {['all', 'images', 'videos'].map((tab) => (
//           <li 
//             key={tab}
//             className={`cursor-pointer h-8 px-2 mt-1 rounded-2xl transition-colors duration-200 ${
//               activeTab === tab ? "bg-amber-400 font-semibold" : "bg-amber-200"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </li>
//         ))}
//       </ul>

//       {/* Dynamically render the active component */}
//       <div className="mt-4">
//         {tabComponents[activeTab]}
//       </div>
//     </>
//   );
// }

// export default GoogleTabs;

























import React, { useState } from "react";
import All from "./All";
import Images from "./Images";
import Videos from "./Videos";

function GoogleTabs() {
  const [tabs, setTabs] = useState('all')

  const allHandler = () => {
    setTabs('all')
  }
  const imageHandler = () => {
    setTabs('images')
  }
  const videosHandler = () => {
    setTabs('videos')
  }

  return (
    <>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", marginBottom: "2rem"}}>
        <li className={`cursor-pointer h-8 px-2 mt-1 rounded-2xl bg-amber-200 ${tabs === 'all' ? 'bg-amber-600' : ''}`} onClick={allHandler}>All</li>
        <li className={`cursor-pointer h-8 px-2 mt-1 rounded-2xl bg-amber-200 ${tabs === 'images' ? 'bg-amber-600' : ''}`} onClick={imageHandler}>Images</li>
        <li className={`cursor-pointer h-8 px-2 mt-1 rounded-2xl bg-amber-200 ${tabs === 'videos' ? 'bg-amber-600' : ''}`} onClick={videosHandler}>Videos</li>
      </ul>

      {tabs === 'all' ? <All /> : tabs === 'images' ? <Images /> : <Videos />}
    </>
  );
}

export default GoogleTabs;
