import { useCallback, useMemo, useState } from "react";

const Volume = () => {
 const [volume, setVolume] = useState(1);
 const handleVolChange = useCallback((newVol: number) => {
  setVolume(newVol);
  // chrome.runtime.sendMessage({ action: "setVolume", volume: newVol });
 }, []);
 const fixedVol = useMemo(() => (Number(volume) * 100).toFixed(0), [volume]);
 return (
  <div className="mt-4">
   <label htmlFor="volume" className="block text-sm font-medium text-center">
    Volume: {fixedVol}%
   </label>
   <input
    id="volume"
    type="range"
    min="0"
    max="6"
    step="0.1"
    value={volume}
    onChange={(e) => handleVolChange(parseFloat(e.target.value))}
    className="mt-1 block w-full"
   />
  </div>
 );
};
export default Volume;
