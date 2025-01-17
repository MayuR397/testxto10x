import React from 'react';
// import HackathonHeader from './firstDeploy/HackathonHeader';
 import HackathonHeader from './components/HackathonHeader';


import TenXSection from './firstDeploy/TenXSection';
import FindTeam from './components/FindTeam';
import ProfessionalImageComponent from './firstDeploy/ProfessionalImageComponent';
import SimpleAccordion from './firstDeploy/FAQAccordion';
import EventSchedule from './firstDeploy/EventSchedule';
import Dashboard from './components/Dashboard';
import NewLeaderBoard from './components/NewLeaderBoard';
import ProblemStatements from './components/ProblemStatements';
import Footer from './components/Footer';
import FAQAccordion from './firstDeploy/FAQAccordion';
import GoogleFormButton from './components/GoogleFormButton';
import ActiveUserTracker from './components/ActiveUserTracker';

const App = () => {
  return (
    <div className='bg-gray-50'>
      <HackathonHeader />
      <TenXSection/>
      {/* <Dashboard/> */}
      <GoogleFormButton/>
      <ProblemStatements/>
      <NewLeaderBoard/>
      <ProfessionalImageComponent/>
      <FindTeam/>
      <EventSchedule/>
      <FAQAccordion/>
      <ActiveUserTracker/>
      {/* <Footer/> */}
      
    </div>
  );
};

export default App;
