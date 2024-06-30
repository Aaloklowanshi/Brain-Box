import React from 'react';
import Image1 from "../assets/man_4140048.png";
import Image from "next/image";
import { motion } from 'framer-motion';

type Testimonial = {
  name: string;
  title: string;
  company: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Jhon Doe',
    title: 'ceo',
    company: 'conic.co ',
    image: '/placeholder-user.jpg',
    rating: 3,
    text: 'The customer service I received was exceptional. The support team went above and beyond to address my concerns.'
  },
  // {
  //   name: 'Jane Smith',
  //   title: 'Marketing Manager',
  //   company: 'Globex Corp.',
  //   image: '/placeholder-user.jpg',
  //   rating: 4,
  //   text: "I'm amazed by the quality of the products and the ease of use. It's been a game-changer for my business."
  // },
  {
    name: 'Abhishek Raghuwanshi',
    title: 'student',
    company: 'abc public',
    image: '/placeholder-user.jpg',
    rating: 5,
    text: 'The services i got was amazing. I am 10th grad student and I was weak in maths now my git above 90%.Thank you'
  },
  {
    name: 'Michael Johnson',
    title: 'Product Manager',
    company: 'Stark Industries',
    image: '/placeholder-user.jpg',
    rating: 5,
    text: 'This product exceeded my expectations. The build quality is excellent and the functionality is top-notch.'
  },
  {
    name: 'Radhika Bandil',
    title: 'student',
    company: 'Emereld Heights ',
    image: '/placeholder-user.jpg',
    rating: 4,
    text: 'I loved the doubt solving session , my doubt gets cleared as early as possible'
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${filled ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);


const TestimonialCard: React.FC<Testimonial> = ({ name, title, company, image, rating, text }) => (
  <div 
  id='Testimonial'
  className="rounded-lg w-[50%]  bg-slate-100 p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl shadow-yellow-300 scroll-mt-14">
    
    <div className="flex items-start">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
        <Image 
        className="aspect-square h-full w-full" 
        alt={name}
        src={Image1} 
        />
      </span>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}, {company}</p>
        <div className="flex items-center gap-0.5 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
        </div>
      </div>
    </div>
    <blockquote className="mt-4 text-lg font-medium leading-relaxed">
      {text}
    </blockquote>
  </div>
);

const TestimonialSection: React.FC = () => (
  <section className="bg-background py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-6 overflow-hidden relative">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Hear from our satisfied customers about their experience with our products and services.
        </p>
      </div>
      <div className="mt-12 flex space-x-6 animate-marquee">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        display: flex;
        width: calc(200% + 24px);
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </section>
);

export default TestimonialSection;
