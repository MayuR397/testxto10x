import React, { useState } from "react";

const EventSchedule = () => {
  const schedule = [
    {
      day: "Friday",
      time: "11:30AM - 12:00PM",
      activity: "Kickoff – Let’s Go Live!",
    },
    {
      day: "Friday",
      time: "12:00PM - 12:30PM",
      activity: "Welcome Note – The Spirit of Hackathon",
    },
    {
      day: "Friday",
      time: "12:30PM - 1:30PM",
      activity: "Problem Statement Rollout & Team Brainstorming",
    },
    {
      day: "Friday",
      time: "1:30PM - 2:30PM",
      activity: "Wireframing and Documentation and Initial Form Submission",
    },
    {
      day: "Friday",
      time: "6:00PM - 6:30PM",
      activity: "Word War",
    },
    {
      day: "Saturday",
      time: "12:00AM - 12:30AM",
      activity: "Alumni Encore",
    },
    {
      day: "Saturday",
      time: "03:00AM - 03:30AM",
      activity:
        "Chai Pe Kharcha By Jeetu Bhaiyya ",
    },
    {
      day: "Saturday",
      time: "07:00AM - 07:30AM",
      activity: "Morning Groove",
    },
    {
      day: "Saturday",
      time: "02:00PM - 02:30PM",
      activity: "Behind the scenes : Masai Edition",
    },
    {
      day: "Sunday",
      time: "12:00AM - 12:30AM",
      activity: "Connect with Experts",
    },
    {
      day: "Sunday",
      time: "03:00AM - 03:30AM",
      activity: "Chill & Chat( Random non-official talk )",
    },
    {
      day: "Sunday",
      time: "09:00AM - 09:30AM",
      activity: "Reel Reveal Gala",
    },
    {
        day: "Sunday",
        time: "11:00AM - 12:00PM",
        activity: "Project Submission",
    },
    {
      day: "Sunday",
      time: "12:00PM - 12:30PM",
      activity: "Closing Note - Final Bytes By Yogesh Bhat",
    },
    {
      day: "Sunday",
      time: "12:30PM - 01:00PM",
      activity: "The Way Forward",
    },
  ];

  const [selectedDay, setSelectedDay] = useState("Friday");

  const days = ["Friday", "Saturday", "Sunday"];
  const scheduleByDay = days.map((day) => ({
    day,
    events: schedule.filter((item) => item.day === day),
  }));

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Navbar-style Days */}
        <div className="flex justify-center mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`px-6 py-2 font-semibold text-lg rounded-lg transition duration-300 mx-4 ${
                selectedDay === day
                  ? "bg-red-400 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule for Selected Day */}
        {scheduleByDay
          .filter((item) => item.day === selectedDay)
          .map((daySchedule, index) => (
            <div key={index}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-red-400 text-white">
                      <th className="px-6 py-4 text-sm font-medium">Time</th>
                      <th className="px-6 py-4 text-sm font-medium">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daySchedule.events.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        <td className="px-6 py-4 text-gray-700">{item.time}</td>
                        <td className="px-6 py-4 text-gray-700">{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventSchedule;
