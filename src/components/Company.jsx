import React from 'react';

function Company() {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mission</h2>
        <p>To foster a just and respectful atmosphere for clients, employees, vendors, and the community.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Vision</h2>
        <p>To provide optimal solutions to clients and expand our range of services by diversifying into additional infrastructure disciplines, ensuring sustained growth.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <p>
          Infrastructure forms the bedrock of our country’s vision, encompassing crucial elements such as roads, dams, power facilities, and affordable housing...
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Leadership</h2>
        <p>
          Under the inspiring leadership at PCIPL, the company has risen to prominence as one of MP’s largest construction firms...
        </p>
      </div>
    </div>
  );
}

export default Company;
