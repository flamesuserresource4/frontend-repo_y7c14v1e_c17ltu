import React from 'react';
import { Bus, Clock, Gauge, Ticket } from 'lucide-react';

const sampleBuses = [
  { id: 'MH12-AB-1234', category: 'AC Express', eta: '6 min', occupancy: 0.72, speed: 38 },
  { id: 'MH14-CD-5678', category: 'Ordinary', eta: '12 min', occupancy: 0.34, speed: 29 },
  { id: 'MH01-EF-9012', category: 'Express', eta: '18 min', occupancy: 0.95, speed: 41 },
];

function OccupancyBar({ value }) {
  const pct = Math.round(value * 100);
  const color = value > 0.85 ? 'bg-red-500' : value > 0.6 ? 'bg-yellow-500' : 'bg-green-500';
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function LiveBuses({ query }) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Live buses on your route</h2>
            {query?.from && query?.to && (
              <p className="text-gray-600">From <span className="font-medium">{query.from}</span> to <span className="font-medium">{query.to}</span></p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sampleBuses.map((b) => (
            <div key={b.id} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{b.id}</p>
                    <p className="text-sm text-gray-500">{b.category}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-md">
                  <Clock className="w-4 h-4" /> {b.eta}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Occupancy</span>
                  <span className="font-medium">{Math.round(b.occupancy * 100)}%</span>
                </div>
                <OccupancyBar value={b.occupancy} />

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><Gauge className="w-4 h-4" /> {b.speed} km/h</span>
                  <span className="inline-flex items-center gap-1"><Ticket className="w-4 h-4" /> From ₹{b.category.includes('AC') ? 35 : 20}</span>
                </div>
              </div>

              <button className="mt-5 w-full bg-black text-white py-2.5 rounded-xl font-semibold hover:bg-neutral-800 transition-colors">
                Select & Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
