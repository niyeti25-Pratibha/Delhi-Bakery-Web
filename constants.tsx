
import React from 'react';
import { Product, Review } from './types';
import { Cake, ShoppingBag, Clock, MapPin, Phone, CheckCircle } from 'lucide-react';

export const CONTACT_INFO = {
  address: "A/3, Anandji Kalyanji Block, Opposite Arvind Mills, Naroda Road, Aditya Nagar, Asarwa, Ahmedabad – 382345",
  phone: "099241 05903",
  whatsapp: "919924105903",
  hours: "6:00 AM – 10:00 PM (Daily)",
  plusCode: "2JV8+G2 Ahmedabad",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.551717650462!2d72.6074903!3d23.040228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e840d54070a79%3A0x6b4f747863116892!2sDelhi%20Bakery%20%26%20Cake%20Shop!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const POPULAR_ITEMS: Product[] = [
  { id: '1', name: 'Birthday Cakes', category: 'Cake', image: 'https://picsum.photos/id/102/600/400', description: 'Freshly baked custom birthday cakes' },
  { id: '2', name: 'Anniversary Cakes', category: 'Cake', image: 'https://picsum.photos/id/103/600/400', description: 'Elegant cakes for your special day' },
  { id: '3', name: 'Custom Pastries', category: 'Cake', image: 'https://picsum.photos/id/104/600/400', description: 'Creamy and delicious mini treats' },
  { id: '4', name: 'Crispy Khari', category: 'Bakery', image: 'https://picsum.photos/id/105/600/400', description: 'Light, flaky and perfect for tea' },
  { id: '5', name: 'Butter Biscuits', category: 'Bakery', image: 'https://picsum.photos/id/106/600/400', description: 'Rich, melt-in-mouth cookies' },
  { id: '6', name: 'Milk Bread', category: 'Bakery', image: 'https://picsum.photos/id/107/600/400', description: 'Soft, daily-baked white bread' },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Nitin Rathod',
    role: 'Local Guide',
    rating: 5,
    text: 'Lovely shop for cookies, biscuits, khari bread and toast. Consistent quality always.'
  },
  {
    id: 'r2',
    author: 'Hemant Agrawal',
    rating: 4,
    text: 'Cake and pastry available and it gives quality product. Great for quick pickups.'
  },
  {
    id: 'r3',
    author: 'Verified Customer',
    rating: 4,
    text: 'Good variety of bakery items. The staff is polite and the hygiene is well-maintained.'
  }
];

export const FEATURES = [
  { icon: <Clock className="w-6 h-6" />, title: 'Freshly Baked Daily', desc: 'Prepared every morning for peak freshness.' },
  { icon: <CheckCircle className="w-6 h-6" />, title: 'Hygienic Preparation', desc: 'Clean environment and quality ingredients.' },
  { icon: <ShoppingBag className="w-6 h-6" />, title: 'Trusted Local Shop', desc: 'Serving the Asarwa community with pride.' },
  { icon: <Phone className="w-6 h-6" />, title: 'Bulk Orders', desc: 'Accepting party and bulk cake orders.' }
];
