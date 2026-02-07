
import React from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-bakery-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-6">Visit Our Shop</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Find us in Asarwa, Ahmedabad. We're open daily to serve you the freshest bakery items.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-bakery-brown mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Address</h3>
                      <p className="text-stone-600 leading-relaxed text-sm">
                        {CONTACT_INFO.address}
                      </p>
                      <p className="text-stone-400 text-xs mt-2 italic">Plus Code: {CONTACT_INFO.plusCode}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Phone / WhatsApp</h3>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-orange-600 font-bold block hover:underline">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Timing</h3>
                      <p className="text-stone-600 text-sm">
                        {CONTACT_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-100">
                <h3 className="text-xl font-bold text-bakery-brown mb-4">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-xl font-bold border border-green-100 hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="https://maps.google.com/?q=Delhi+Bakery+%26+Cake+Shop+Asarwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-3 h-[500px] lg:h-auto min-h-[400px]">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <iframe
                  title="Delhi Bakery Location"
                  src={CONTACT_INFO.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Common Info */}
      <section className="py-20 bg-bakery-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-bakery-brown mb-8">Quick Takeaway & Delivery</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
                <p className="text-stone-700 leading-relaxed">
                    We offer <strong>fast takeaway service</strong>. Most of our bakery items are ready and packed for immediate pickup.
                </p>
                <p className="text-stone-700 leading-relaxed">
                    For <strong>custom cake orders</strong>, please give us a call or WhatsApp us at least 24 hours in advance to ensure the best design and taste.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
