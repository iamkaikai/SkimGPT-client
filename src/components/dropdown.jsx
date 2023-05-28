import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Dropdown() {
  return (
    <div>
      <div className="dropdown-btn">
        Select One
        <div id="expand-icon">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown-options">
        <div className="dropdown-item">Straightforward</div>
        <div className="dropdown-item">Nice</div>
        <div className="dropdown-item">Aggressive</div>
        <div className="dropdown-item">Controversial</div>
      </div>
    </div>

  );
}

export default Dropdown;
