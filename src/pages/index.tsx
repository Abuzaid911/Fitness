import React from 'react';
import AboutSection from '~/components/AboutSection';
import OfferCard from "~/components/OfferCard";
import ContactSection from "~/components/ContactSection";
import {useRouter} from "next/router";
import {useEffect} from "react";


const HeroSection = () => {
  const heroImageUrl = 'https://images.hdqwalls.com/download/fitness-gym-girl-nb-1600x900.jpg';

  return (
      <div className="bg-cover bg-center text-white relative opacity-90" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="bg-black bg-opacity-50 flex flex-col items-center justify-center h-screen">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              {/* Large text */}
              <h1 className="mb-5 text-5xl font-bold uppercase leading-tight drop-shadow-lg shadow-white drop-shadow-2xl text-white">
                Join our life changing <br/> personal training experience
              </h1>
              {/* Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                    className="btn btn-outline btn-warning">
                  JOIN TODAY
                </button>
                <button
                    className="btn btn-outline btn-default font-bold">
                  View the Coaches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

const OfferSection = () => {
  return (
      <div className="bg-black text-white py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 text-orange-500 font-serif">WHAT WE OFFER</h2>
          <p className="text-xl mb-8">
            We're committed to bringing you the best workout experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          <OfferCard
              title="OUR SERVICES"
              imageUrl="https://image.gala.de/22939424/t/86/v1/w1440/r1.5/-/das-ist-die-beste-uhrzeit-fuer-ihr-workout.jpg"
          />
          <OfferCard
              title="CHECK OUT OUR CLASSES"
              imageUrl="https://www.regymenfitness.com/wp-content/uploads/2020/08/group-workout.jpg"
          />
          <OfferCard
              title="PERSONAL TRAINING"
              imageUrl="https://www.yanrefitness.com/wp-content/uploads/2022/05/4-16-1024x768.jpg"
          />
        </div>
      </div>
  );
};
const TestimonialCard = ({ image, name, age, quote }) => {
  return (
      <div className="bg-black text-white p-6 rounded-lg">
        <img src={image} alt={`${name}`} className="rounded-md mb-4" />
        <blockquote className="italic">"{quote}"</blockquote>
        <p className="mt-4 font-bold font-thin text-yellow-400">{name}, {age}</p>
      </div>
  );
};

const BeforeAfterSection = () => {
  return (
      <div className="py-12 bg-black">
        <h2 className="text-4xl text-center text-yellow-400 font-extrabold mb-8">BEFORE AND AFTER</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {/* Replace the image path, name, age, and quote with actual data */}
          <TestimonialCard image="https://static.independent.co.uk/2024/01/02/08/14160534-f2587b3c-1c58-401b-85cd-64e54240e39e.jpg" name="Donna Bleaker" age="31" quote="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." />
          <TestimonialCard image="https://img2.storyblok.com/800x707/smart/filters:quality(70)/f/147484/1000x884/7f9282328c/homepage5.jpg" name="Lauren Cross" age="44" quote="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." />
          <TestimonialCard image="https://as1.ftcdn.net/v2/jpg/01/25/77/18/1000_F_125771811_hE1lpcXIZXfOSbpGRdayISI0HcztmlBJ.jpg" name="Thomas Xue" age="29" quote="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." />
        </div>
      </div>
  );
};



const Home = () => {
  return (

      <div className="flex flex-col divide-y divide-yellow-400">
        <div className="p-1 bg-black">
          <HeroSection/>
        </div>
        <div className="p-0 bg-black">
          <AboutSection/>
        </div>
        <div className="p-1 bg-black">
          <OfferSection/>
        </div>
        <div className="p-0 bg-black">
            <BeforeAfterSection/>
         </div>
        <div className="p-1 bg-black">
          <ContactSection/>
        </div>
      </div>

  );
};

export default Home;