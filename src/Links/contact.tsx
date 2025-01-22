import React, { useState } from 'react';
import { db } from '../../firebaseConfig';  // Assuming you have your Firebase config
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null); // Clear previous status

    try {
      // Add the form data to Firestore
      await addDoc(collection(db, 'contactMessages'), formData);

      setIsSubmitting(false);
      setSubmitStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="  flex items-center justify-center h-full w-full  mb-10  " id='contact'>
      <div className="  p-8  w-full m-10 md:w-5/6 mr-4 rounded-md bg-gradient-to-r from-orange-300 to-orange-50
      shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
                 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]  md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
      ">
        <h2 className="text-3xl font-semibold text-[#1B1833]  mb-6 text-center">Contact Me</h2>
        <p className=" mb-8 text-center text-[#1B1833] ">
          I would love to hear from you! Please fill out the form below to get in touch.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#1B1833]  " htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1B1833]  " htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1B1833] " htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className=" text-black w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 mt-4 bg-[#F96E2A] text-white font-semibold rounded-lg  focus:outline-none ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}
             md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]
       md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)]
     shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)]
            `}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Status message */}
        {submitStatus && (
          <div className="mt-4 text-center text-lg font-semibold">
            <p className={`${submitStatus.startsWith('Oops') ? 'text-red-500' : 'text-green-500'}`}>
              {submitStatus}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
