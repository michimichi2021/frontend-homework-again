import React from 'react';
import {Link} from 'react-router-dom';

const Welcome= () => {
  return (
    <div className="Welcome_content">
      <div>
        <h1 className="Welcome_title">Welcome</h1>
        <div className="Welcome_buttonGroup">
          <Link to="/signup">
            <button className="Welcome_button">登録する</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;