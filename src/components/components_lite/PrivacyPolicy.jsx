import React from "react";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-blue-500">JobSphere</span>,
            protecting the privacy of our users is a top priority. This Privacy
            Policy outlines how JobSphere collects, uses, and safeguards
            personal information provided by users.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            1. Information Collection
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere collects personal information such as name, email address,
            contact number, resume details, and employment preferences when
            users register, apply for jobs, or interact with the platform.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            2. Use of Information
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            The information collected is used to match users with job
            opportunities, communicate updates, personalize user experiences,
            and improve our services. JobSphere may also use aggregated,
            non-identifiable data for research and analysis purposes.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            3. Sharing of Information
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere shares user information with prospective employers only
            with the user's consent. Information may also be shared with service
            providers assisting in platform operations under strict
            confidentiality agreements.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere employs robust security measures to protect personal
            information from unauthorized access, alteration, or disclosure.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            5. User Rights
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Users have the right to access, update, or delete their personal
            information at any time. Requests can be submitted through user
            account settings or by contacting our support team.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere reserves the right to update this Privacy Policy as
            needed. Users will be notified of significant changes through
            platform announcements or email notifications.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-10">
            By using JobSphere, users agree to the terms outlined in this
            Privacy Policy. For any questions or concerns, please contact our
            support team.
          </p>

          <div className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
