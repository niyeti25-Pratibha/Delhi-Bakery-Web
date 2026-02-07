
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, MapPin, Clock } from 'lucide-react';
import { POPULAR_ITEMS, REVIEWS, FEATURES, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-orange-50 pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full">
                Freshly Baked Every Day
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-bakery-brown leading-tight mb-6">
                Fresh Bakery & Cakes <br />
                <span className="text-orange-600">in Asarwa, Ahmedabad</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Daily freshly baked cakes, pastries, biscuits, khari, toast & bread — hygienic preparation, consistent taste, and affordable prices.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <div className="flex items-center text-sm text-stone-500">
                  <MapPin className="w-4 h-4 mr-1 text-orange-600" />
                  <span>Asarwa, Ahmedabad</span>
                </div>
                <div className="flex items-center text-sm text-stone-500">
                  <Clock className="w-4 h-4 mr-1 text-orange-600" />
                  <span>{CONTACT_INFO.hours}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition-all transform hover:-translate-y-1"
                >
                  WhatsApp Order Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://picsum.photos/id/488/800/600"
                  alt="Freshly baked products"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-orange-50">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-bakery-brown">"The best biscuits in Asarwa!"</p>
                <p className="text-xs text-stone-500">- Local Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-bakery-brown mb-2">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-bakery-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-2">Our Popular Items</h2>
              <p className="text-stone-600">Taste the quality in every bite</p>
            </div>
            <Link to="/about" className="text-orange-600 font-bold hover:underline inline-flex items-center">
              Learn about our baking process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-bakery-brown text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bakery-brown mb-2">{item.name}</h3>
                  <p className="text-stone-500 text-sm mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-orange-600 font-bold text-sm">Fresh Today</span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=I want to order ${item.name}`}
                      className="text-stone-800 hover:text-orange-600 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center p-8 bg-orange-600 rounded-2xl text-white shadow-xl">
             <h3 className="text-2xl font-bold mb-2">Accepting Bulk & Party Orders</h3>
             <p className="mb-6 opacity-90">Celebrating a birthday or hosting an event? Get custom cakes and large bakery orders at special rates.</p>
             <a href={`tel:${CONTACT_INFO.phone}`} className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-stone-50 transition-colors">
               Contact for Bulk Orders
             </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-orange-500 text-orange-500' : 'fill-orange-200 text-orange-200'}`} />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4">What Our Customers Say</h2>
            <p className="text-stone-600 font-medium">4.2 Rating on Google Reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-orange-50/30 border border-orange-100 p-8 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
                <div>
                  <div className="text-orange-400 mb-4">
                    <svg className="w-8 h-8 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-stone-700 italic mb-6 leading-relaxed">“{review.text}”</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-700">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-bakery-brown">{review.author}</h4>
                    {review.role && <p className="text-xs text-stone-500 uppercase tracking-wider">{review.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bakery-brown rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Order Fresh Bakery Items Today</h2>
              <p className="text-orange-200 text-lg mb-10 max-w-2xl mx-auto">
                Whether it's for your morning tea or a special celebration, we have the freshest treats waiting for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                >
                  WhatsApp for Quick Orders
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                >
                  Call for Custom Cakes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
