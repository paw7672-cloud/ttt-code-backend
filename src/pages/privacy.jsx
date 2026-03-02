import React from "react";

const Privacy = () => {
  return (
    <div className="bg-yellow-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#FFD42A] to-[#FFC107] text-black py-14 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg opacity-90">
          Your trust is important to us.
        </p>
        <p className="mt-4 text-sm opacity-80">
          Last updated: January 2026
        </p>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        {[
          {
            title: "Who we are",
            text: "Our website address is: https://thetruetopper.com."
          },
          {
            title: "Comments",
            text: "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection."
          },
          {
            title: "Media",
            text: "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included."
          },
          {
            title: "Cookies",
            text: "If you leave a comment you may opt-in to saving your name, email address and website in cookies for your convenience."
          },
          {
            title: "Embedded content from other websites",
            text: "Articles on this site may include embedded content like videos, images, or articles from other websites."
          },
          {
            title: "Who we share your data with",
            text: "If you request a password reset, your IP address will be included in the reset email."
          },
          {
            title: "How long we retain your data",
            text: "If you leave a comment, the comment and its metadata are retained indefinitely."
          },
          {
            title: "What rights you have over your data",
            text: "If you have an account on this site, you can request an exported file of the personal data we hold about you."
          },
          {
            title: "Where we send your data",
            text: "Visitor comments may be checked through an automated spam detection service."
          }
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white border border-yellow-200 rounded-3xl shadow-md p-10 transition duration-500 hover:shadow-xl hover:-translate-y-2"
          >
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {section.text}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Privacy;
