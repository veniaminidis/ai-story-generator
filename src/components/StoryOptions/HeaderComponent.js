import React, { useState } from 'react';
import './optionTabs.css'; // Import your CSS file for styling
import CombinedOptionsPage from '../../pages/CombinedOptionsPage';

const HeaderComponent = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    props.parentCallback(tabName);
  };

  return (
    <div className="header">
      <div
        className={activeTab === '1' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('1')}
      >
        Home
      </div>
      <div
        className={activeTab === '2' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('2')}
      >
        About
      </div>
      <div
        className={activeTab === '3' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('3')}
      >
        Services
      </div>
      <div
        className={activeTab === '4' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('4')}
      >
        Contact
      </div>
    </div>
  );
};

export default HeaderComponent;