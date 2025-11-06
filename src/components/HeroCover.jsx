import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-black text-white" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 border border-white/15 rounded-full px-4 py-1 backdrop-blur">
          Smart State Bus Ticketing System
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-orange-300 bg-clip-text text-transparent">
          Discover. Book. Ride. In Real-Time.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Live tracking, seamless payments, and QR/NFC validation — all in one modern, mobile-first web app.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="#search" className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-orange-200 transition-colors">
            Book a Ticket
          </a>
          <a href="#wallet" className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition-colors">
            View My Tickets
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
