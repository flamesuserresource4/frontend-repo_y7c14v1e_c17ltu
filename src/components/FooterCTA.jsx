import React from 'react';
import { Shield, Smartphone, Sparkles } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">Ride smarter with Live ETA</h3>
            <p className="mt-2 text-white/70">Track buses in real-time, pay securely, and validate with a tap. Built for fast, reliable state transport.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-orange-400 mt-1" />
              <div>
                <p className="font-semibold">Secure Payments</p>
                <p className="text-sm text-white/70">Supports UPI, cards, and wallets with instant receipts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-orange-400 mt-1" />
              <div>
                <p className="font-semibold">Offline Ticket Cache</p>
                <p className="text-sm text-white/70">Access purchased tickets even without connectivity.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center md:justify-end">
            <a href="#search" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-lg hover:bg-orange-200 transition-colors">
              <Sparkles className="w-5 h-5" /> Get Started
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Smart State Bus • Made for modern transit
        </div>
      </div>
    </footer>
  );
}
