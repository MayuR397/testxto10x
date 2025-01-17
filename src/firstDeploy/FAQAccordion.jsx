import React, { useState } from "react";

const FAQAccordion = () => {
  // Data for categories and FAQs
  const categories = [
    { id: 1, name: "General Questions" }
  ];

  const FAQData = {
    1: [
      { 
        ques: "How are teams decided?", 
        ans: "We have intentionally grouped participants from different learning stages into each team. Some of you may be a bit further along in your journey, while others may be just starting out. The idea is to foster collaboration, where everyone can learn from each other and contribute based on their skills and experiences." 
      },
      { 
        ques: "How should we divide our work?", 
        ans: "As a team, start by identifying each member’s strengths. For instance, if someone is strong in backend development, have them focus on backend tasks. If there’s a pro in frontend, let them handle the frontend. If there is a junior member, guide them by assigning tasks they can manage while learning. Also, choose one person to act as a team leader or captain to coordinate everyone’s efforts and keep the project on track. This collaborative approach helps ensure that all responsibilities are covered and everyone has a chance to contribute effectively."
      },
      { 
        ques: "What is the judging criteria?", 
        ans: `
          We will be evaluating your work based on the following factors: <br />
          <strong>Relevance:</strong><br />
          - How effectively does your solution address the problem you’re solving? <br />
          - How impactful is your approach? <br />
          <strong>Experience, Design, and Quality:</strong><br />
          - For applications or websites, we’ll check visual appeal and usability. <br />
          - For data analytics, we’ll look at quality and clarity of data visualizations. <br />
          - For testing, we’ll focus on thoroughness, attention to detail, and the use of automation tools. <br />
          <strong>Originality & Creativity:</strong><br />
          - Does your solution offer a new perspective? <br />
          - Does it introduce an innovative approach? <br />
          <strong>Usage of AI:</strong><br />
          - We’ll examine how you’ve integrated AI throughout your project. <br />
          - Don’t forget to highlight AI usage during your presentation (e.g., AI-powered design tools or other implementations).<br />
        `
      },
      { 
        ques: "Can I opt out of it? Is hackathon optional?", 
        ans: "No, participation is mandatory. Taking part in the hackathon also carries weightage for your movement to the next unit (UM)." 
      },
      { 
        ques: "Can I change my team member? Can I move to another team?", 
        ans: "No, we have already finalized the teams, and you’ll need to work with the members assigned. However, if you face any serious issues, such as a team member not participating or responding after multiple follow-ups, please let us know, and we will look into it." 
      },
      { 
        ques: "How do I select my project? How do I submit my project?", 
        ans: `
          You can submit your project through our website using the designated form, which will be active starting at 12:30 PM. Please ensure you provide the following details:<br />
            - Team Key Code. <br />
            - Create GitHub Repository: The repository must be named after your Team Key Code (case-sensitive). Each team should have only one repository. <br />
            - GitHub Repository Owner's User ID. <br />
            - Project Selected. <br />
            - Team Captain's Contact Number. <br />
          Ensure that all details are correctly filled out to complete the submission process.
        `
      }
    ]
  };

  // State for active category and active accordion index
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row gap-8 bg-gray-50">
      {/* Categories Section */}
      <div className="w-full sm:w-1/4 bg-white shadow-md rounded-xl p-4 mb-8 sm:mb-0">
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
      <div className="w-full sm:w-3/4 bg-white shadow-md rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-400 mb-6">
          Frequently Asked Questions
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
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: faq.ans }}
                  />
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
