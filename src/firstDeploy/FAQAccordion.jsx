import React, { useState } from "react";

const FAQAccordion = () => {
  // Data for categories and FAQs
  const categories = [
    { id: 1, name: "General Questions" }
  ];

  const FAQData = {
    1: [
      { ques: "What if I leave the course in between?", ans: "You can contact support for further details." },
      { ques: "Do I have to take the first job I am offered?", ans: "No, you can discuss this with your career mentor." },
    ]
  };

  // State for active category and active accordion index
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex gap-8 bg-gray-50">
      {/* Categories Section */}
      <div className="w-1/4 bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Questions Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`p-3 rounded-lg cursor-pointer ${
                activeCategory === category.id
                  ? "bg-red-100 text-red-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="w-3/4 bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {categories.find((cat) => cat.id === activeCategory).name}
        </h3>
        <div className="space-y-4">
          {FAQData[activeCategory].map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
              <button
                className="w-full text-left flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-gray-800 font-medium">{faq.ques}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
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
              {activeIndex === index && (
                <div className="p-4 bg-white border-t border-gray-300">
                  <p className="text-gray-700">{faq.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
