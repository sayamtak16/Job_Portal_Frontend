import React from "react";
import Navbar from "./Navbar";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            Terms of Service
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            These Terms of Service ("Terms") govern the use of the{" "}
            <span className="font-semibold text-blue-500">JobSphere</span>{" "}
            platform. By accessing or using JobSphere, users agree to be bound
            by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            1. Eligibility
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Users must be at least 18 years old or the age of majority in their
            jurisdiction to use the platform. By registering, users confirm they
            meet this requirement.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            2. Account Responsibilities
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Users are responsible for maintaining the confidentiality of their
            account credentials and for all activities conducted through their
            accounts. Any unauthorized use must be reported immediately.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            3. Platform Usage
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere is intended for lawful job-seeking and hiring purposes.
            Users agree not to upload false information, spam, or content that
            violates applicable laws or third-party rights.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            4. Content Ownership
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            All user-generated content remains the property of the user. By
            submitting content to JobSphere, users grant a non-exclusive license
            for the purpose of displaying and promoting the content within the
            platform.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            5. Termination
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere reserves the right to suspend or terminate accounts found
            in violation of these Terms, without prior notice. Users may also
            delete their accounts at any time.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere is not liable for any damages resulting from the use or
            inability to use the platform, including job outcomes or
            interactions with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
            7. Modifications
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            JobSphere reserves the right to update these Terms at any time.
            Continued use of the platform constitutes acceptance of any revised
            Terms.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-10">
            For any questions regarding these Terms, please contact our support
            team.
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

export default TermsOfService;
