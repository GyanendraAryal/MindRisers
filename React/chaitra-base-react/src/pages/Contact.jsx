import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        Have questions or want to collaborate? We would love to hear from you.
      </p>
      <div className="inline-block text-left bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <p className="text-gray-700 flex items-center gap-3">
          <span className="text-xl">📧</span> <strong className="font-semibold">Email:</strong> support@example.com
        </p>
        <p className="text-gray-700 flex items-center gap-3">
          <span className="text-xl">📞</span> <strong className="font-semibold">Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-gray-700 flex items-center gap-3">
          <span className="text-xl">📍</span> <strong className="font-semibold">Location:</strong> San Francisco, CA
        </p>
      </div>
    </section>
  );
};

export default Contact;
