import React, { useState } from "react";

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I register as a worker?",
      answer:
        "You can register through our website by filling out the online application form with your personal details, skills, and work experience. Our team will review your application within 3 business days.",
    },
    {
      question: "What documents are required for registration?",
      answer:
        "You'll need a valid passport, educational certificates, professional certifications (if any), and proof of previous work experience. Specific requirements may vary by job category.",
    },
    {
      question: "How long does the recruitment process take?",
      answer:
        "The process typically takes 2-4 weeks from application to deployment, depending on the position and required clearances. Some specialized roles may take longer.",
    },
    {
      question: "Do you charge any fees from workers?",
      answer:
        "No, we do not charge any fees to workers. All our services are completely free for job seekers. Beware of any imitators asking for payment.",
    },
    {
      question: "What countries do you recruit for?",
      answer:
        "We currently facilitate recruitment for positions in the Middle East (UAE, Qatar, Saudi Arabia), Europe, and Southeast Asia. We're expanding to new markets regularly.",
    },
    {
      question: "Can I apply if I don't have experience?",
      answer:
        "Yes, we have entry-level positions available. While experience is preferred for many roles, we also work with employers who provide on-the-job training.",
    },
    {
      question: "How can employers verify worker credentials?",
      answer:
        "All our workers go through a rigorous verification process. Employers receive complete documentation including verified certificates, background checks, and skill assessments.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into chunks for responsive display
  const chunkSize = window.innerWidth >= 768 ? 2 : 1;
  const faqChunks = [];
  for (let i = 0; i < faqs.length; i += chunkSize) {
    faqChunks.push(faqs.slice(i, i + chunkSize));
  }

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none ${
                activeIndex === index ? "bg-gray-50" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {faq.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`px-6 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFaqs;
