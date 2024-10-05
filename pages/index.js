import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Carousalcomponent from "../components/Carousalcomponent";
// import UserHome from "./userhome/index";
import Dashboard from "../components/userhome/dashboard";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const images = [
    '/images/temple2.jpg',
    '/images/temple3.jpg',
    '/images/temple4.jpg',
    '/images/temple5.jpg',
    '/images/temple6.jpg',
    '/images/temple7.jpg',
    '/images/temple8.jpg',
  ];

  useEffect(() => {
    setMounted(true);
    const userLoggedIn = session?.user;
    setIsLoggedIn(userLoggedIn);
  }, [session]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {!isLoggedIn ? (
          <>
          {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-300 to-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-4">Connect, Serve, and grow the Sanatan Dharma</h1>
          <p className="text-lg mb-3">Join our community of Gen X individuals dedicated to maintaining local neighborhoods and Hindu religious sites.</p>
          <Link href="/register" className="bg-white text-blue-500 text-center text-sm px-4 py-1 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Join Now
          </Link>
        </div>
      </section>

      {/* <Carousalcomponent images={images} /> */}

      {/* Unique Value Proposition */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Connect with Peers',
              description: "Build meaningful relationships with like-minded individuals who share your passion for preserving and promoting Sanatan Dharma. Our platform facilitates connections across generations, fostering a vibrant community of knowledge-sharing and mutual support.",
              color: {
                bg: 'bg-blue-100 dark:bg-blue-900',
                text: 'text-blue-800 dark:text-blue-200'
              }
            },
            {
              title: 'Serve Your Community',
              description: "Engage in impactful service projects that make a real difference in your local area. From temple renovations to cultural education initiatives, you'll have the opportunity to contribute your skills and time to causes that matter.",
              color: {
                bg: 'bg-green-100 dark:bg-green-900',
                text: 'text-green-800 dark:text-green-200'
              }
            },
            {
              title: 'Earn Karma Points',
              description: "Our unique Karma Points system recognizes and rewards your contributions. Accumulate points for your service activities, which can be redeemed for spiritual retreats, exclusive events, or used to support community projects you're passionate about.",
              color: {
                bg: 'bg-purple-100 dark:bg-purple-900',
                text: 'text-purple-800 dark:text-purple-200'
              }
            }].map(({ title, description, color }, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${color.bg}`}>
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{title}</h3>
                <p className={color.text}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Testimonials */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">What Our Members Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
                author: 'Priya S., Member since 2022',
                text: "Joining this community has been a transformative experience. I've connected with like-minded individuals who share my passion for preserving our cultural heritage. The karma points system is a great motivator!",
                color: {
                  bg: 'bg-blue-50 dark:bg-blue-900',
                  text: 'text-blue-800 dark:text-blue-200'
                }
              },
              {
                author: 'Rajesh K., Member since 2021',
                text: "I've always wanted to give back to my community, and this platform has provided the perfect opportunity. The local temple restoration project we organized was incredibly fulfilling. I'm proud to be part of this movement.",
                color: {
                  bg: 'bg-green-50 dark:bg-green-900',
                  text: 'text-green-800 dark:text-green-200'
                }
              },
              {
                author: 'Anita M., Member since 2023',
                text: "As a working professional, I found it challenging to find time for community service. This platform made it easy to contribute in meaningful ways, even with my busy schedule. It's been a rewarding journey.",
                color: {
                  bg: 'bg-purple-50 dark:bg-purple-900',
                  text: 'text-purple-800 dark:text-purple-200'
                }
              }].map(({ author, text, color }, index) => (
                <div key={index} className={`p-6 rounded-lg shadow-md ${color.bg}`}>
                  <p className={`mb-4 ${color.text} italic`}>
                    "{text}"
                  </p>
                  <p className="font-semibold text-blue-600 dark:text-blue-400">- {author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-8 text-center text-gray-800 dark:text-white">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                name: 'Anita Patel',
                position: 'Founder & Community Manager',
                image: '/images/person1.jpg',
                color: {
                  bg: 'bg-blue-50 dark:bg-blue-900',
                  text: 'text-blue-800 dark:text-blue-200'
                }
              },
              {
                name: 'Rahul Sharma',
                position: 'Tech Lead & Karma Points Architect',
                image: '/images/person2.jpg',
                color: {
                  bg: 'bg-green-50 dark:bg-green-900',
                  text: 'text-green-800 dark:text-green-200'
                }
              },
              {
                name: 'Priya Desai',
                position: 'Outreach Coordinator & Event Planner',
                image: '/images/person3.jpg',
                color: {
                  bg: 'bg-purple-50 dark:bg-purple-900',
                  text: 'text-purple-800 dark:text-purple-200'
                }
              }].map(({ name, position, image, color }, index) => (
                <div key={index} className={`${color.bg} p-6 rounded-lg shadow-md text-center`}>
                  <Image src={image} alt={name} width={100} height={100} className="rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{name}</h3>
                  <p className={`${color.text}`}>{position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {['How do I earn karma points?', 'Can I use my karma points for anything?'].map((question, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {/* Add answer here */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>

        ) : (
          <Dashboard  />
        )}
        

      

        {/* Contact and Support */}
        <section className="py-6 bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-3 text-center text-gray-800 dark:text-white">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-center mb-2 text-gray-600 dark:text-gray-300">Have questions or need support? We're here to help!</p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:support@genxcommunity.com" className="bg-blue-500 text-white px-6 py-1 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                  Email Us
                </a>
                <a href="tel:+1234567890" className="bg-indigo-500 text-white px-6 py-1 rounded-full font-semibold hover:bg-indigo-600 transition duration-300">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}