import React from 'react';
import { QrCode, CalendarClock, MapPinned, Wallet } from 'lucide-react';

const tickets = [
  {
    id: 'TCK-24-00123',
    route: 'Shivajinagar → Hinjewadi',
    validTill: 'Today, 2:10 PM',
    status: 'Active',
    fare: 45,
  },
  {
    id: 'TCK-24-00098',
    route: 'Swargate → Kothrud',
    validTill: 'Yesterday, 6:40 PM',
    status: 'Expired',
    fare: 25,
  },
];

export default function TicketWallet() {
  return (
    <section id="wallet" className="py-12 bg-gradient-to-b from-white to-orange-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">My Tickets</h2>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-neutral-800">
            <Wallet className="w-4 h-4" /> Add Money
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tickets.map((t) => (
            <div key={t.id} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Ticket ID</p>
                  <p className="font-semibold">{t.id}</p>
                </div>
                <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                  <QrCode className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPinned className="w-4 h-4" />
                  <span className="font-medium">{t.route}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarClock className="w-4 h-4" />
                  <span>Valid till: {t.validTill}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${t.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}>
                    {t.status}
                  </span>
                  <span className="text-sm text-gray-700">Paid: ₹{t.fare}</span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-neutral-800">Show QR</button>
                <button className="w-full border py-2 rounded-xl font-semibold hover:bg-gray-50">Receipt</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
