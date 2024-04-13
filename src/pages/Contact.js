import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-800">
        Have a question or need assistance? We're here to help! Feel free to reach out to us using any of the methods below:
      </p>
      <div className="mt-4">
        <p className="text-lg text-gray-800 mb-2">Email:</p>
        <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>
      </div>
      <div className="mt-4">
        <p className="text-lg text-gray-800 mb-2">Phone:</p>
        <p className="text-lg">(123) 456-7890</p>
      </div>
      <div className="mt-4">
        <p className="text-lg text-gray-800 mb-2">Address:</p>
        <p className="text-lg">1234 Main Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
