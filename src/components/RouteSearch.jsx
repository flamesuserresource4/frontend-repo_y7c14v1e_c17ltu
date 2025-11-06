import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';

export default function RouteSearch({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [useGPS, setUseGPS] = useState(false);

  useEffect(() => {
    if (!useGPS) return;
    if (!('geolocation' in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setFrom(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
      },
      () => setUseGPS(false),
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }, [useGPS]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to) return;
    onSearch?.({ from, to });
  };

  return (
    <section id="search" className="relative -mt-20 z-20">
      <div className="max-w-5xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-12 gap-4">
          <div className="md:col-span-5">
            <label className="text-sm font-medium text-gray-600">From</label>
            <div className="mt-2 flex items-center gap-2 border rounded-xl px-3 py-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter pickup stop or use GPS"
                className="w-full outline-none"
              />
              <button
                type="button"
                className={`text-xs px-2 py-1 rounded-md border ${useGPS ? 'bg-green-50 border-green-200 text-green-600' : 'bg-gray-50 border-gray-200 text-gray-600'}`}
                onClick={() => setUseGPS((v) => !v)}
                aria-pressed={useGPS}
              >
                Use GPS
              </button>
            </div>
          </div>

          <div className="md:col-span-5">
            <label className="text-sm font-medium text-gray-600">To</label>
            <div className="mt-2 flex items-center gap-2 border rounded-xl px-3 py-2">
              <Navigation className="w-5 h-5 text-gray-400" />
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Enter destination stop"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="md:col-span-2 flex items-end">
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl px-4 py-3 hover:bg-neutral-800 transition-colors">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
