import React from 'react';
import '../../scss/App.scss';

export default function InputNumber(props) {

    return (
        <div className="number">
            <div className="number__field">
                <input
                    className="number__input"
                    type="number"
                    defaultValue="1"
                    min="1"
                />
            </div>
            <div className="number__spin minus"></div>
            <div className="number__spin plus"></div>
        </div>
    );
  }