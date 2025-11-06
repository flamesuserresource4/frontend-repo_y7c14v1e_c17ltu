import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import RouteSearch from './components/RouteSearch';
import LiveBuses from './components/LiveBuses';
import TicketWallet from './components/TicketWallet';
import FooterCTA from './components/FooterCTA';

function App() {
  const [query, setQuery] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroCover />
      <RouteSearch onSearch={setQuery} />
      <LiveBuses query={query} />
      <TicketWallet />
      <FooterCTA />
    </div>
  );
}

export default App;
