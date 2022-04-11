import React from 'react';
import { useNavigate } from 'react-router-dom';
import Spacer from '../Spacer';

import './GoBack.scss';

function GoBack() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Spacer
      space={{
        mobile: 24,
        tablet: 24,
        desktop: 56,
      }}
    >
      <button type="button" className="go-back-button" onClick={goBack}>
        Go Back
      </button>
    </Spacer>
  );
}

export default GoBack;
