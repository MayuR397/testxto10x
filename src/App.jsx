import React from 'react';
import HackathonHeader from './firstDeploy/HackathonHeader';

import TenXSection from './firstDeploy/TenXSection';
import FindTeam from './components/FindTeam';
import ProfessionalImageComponent from './firstDeploy/ProfessionalImageComponent';
import SimpleAccordion from './firstDeploy/FAQAccordion';
import EventSchedule from './firstDeploy/EventSchedule';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className='bg-gray-50'>
      <HackathonHeader />
      <TenXSection/>
      <ProfessionalImageComponent/>
      <FindTeam/>
      <EventSchedule/>
      {/* <SimpleAccordion/> */}
    </div>
  );
};

export default App;
