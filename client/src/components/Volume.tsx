import { useState } from "react";

const Volume = () => {
 const [volume, setVolume] = useState(1);
 const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newVolume = parseFloat(event.target.value);
  setVolume(newVolume);
  // chrome.runtime.sendMessage({ action: "setVolume", volume: newVolume });
 };
 return (
  <div className="mt-4">
   <label htmlFor="volume" className="block text-sm font-medium text-gray-700">
    Volume
   </label>
   <input id="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="mt-1 block w-full" />
  </div>
 );
};
export default Volume;
