
import React from 'react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-bakery-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-6">About Delhi Bakery & Cake Shop</h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            A trusted local bakery in Asarwa, Ahmedabad, serving the community with love and fresh bakes for many years.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-bakery-brown mb-8">Our Heritage & Commitment</h2>
              <div className="space-y-6 text-stone-700 leading-relaxed">
                <p>
                  Delhi Bakery & Cake Shop is a trusted local establishment in Asarwa, Ahmedabad. We have spent years perfecting our recipes to bring you the best in traditional bakery items and modern cake designs.
                </p>
                <p>
                  Our primary focus is on consistency and hygiene. Every batch of khari, every loaf of bread, and every single cake is prepared with the same level of care and attention to detail that our customers have come to expect.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl italic text-bakery-brown">
                  "Every product is prepared with care to maintain taste, freshness and quality."
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-bakery-brown mb-2 text-lg">Focus Areas:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span> Daily fresh preparation</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span> Quality ingredients</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span> Hygienic environment</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span> Customer satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://picsum.photos/id/225/800/1000"
                  alt="Bakery Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Mission</h2>
          <p className="text-2xl font-serif text-stone-300 max-w-3xl mx-auto leading-relaxed">
            "To provide fresh, tasty and affordable bakery products to our local community while maintaining hygiene and consistency."
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-bakery-brown">What Makes Us Different?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">01</div>
              <h3 className="font-bold text-bakery-brown text-xl mb-3">Fresh Baking Daily</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Everything in our shop is baked within the last 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">02</div>
              <h3 className="font-bold text-bakery-brown text-xl mb-3">Traditional Taste</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Simple recipes that have been loved for generations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">03</div>
              <h3 className="font-bold text-bakery-brown text-xl mb-3">Easy Accessibility</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Located conveniently in the heart of Asarwa.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">04</div>
              <h3 className="font-bold text-bakery-brown text-xl mb-3">Honest Pricing</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Quality products that won't break your budget.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
