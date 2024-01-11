import React, { useState } from 'react';
import './Options.css';

function SettingChoices({ onSelectSetting }) {
    const [selectedSetting, setSelectedSetting] = useState('');

    const handleSettingChange = (e) => {
        setSelectedSetting(e.target.value);
    };

    const handleSettingSubmit = () => {
        onSelectSetting(selectedSetting);
    };

    return (
        <div>
            {/* Setting choices inputs */}
            <button onClick={handleSettingSubmit}>Next</button>
        </div>
    );
}

export default SettingChoices;
