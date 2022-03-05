import React from 'react';
import PropTypes from 'prop-types';

import i18next from 'i18next';
import cookies from 'js-cookie';


import globe from '../../../media/globe.svg';

import './LanguageSelection.scss';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'pl',
    name: 'Polski',
    country_code: 'pl',
  },
  {
    code: 'cn',
    name: '中國',
    country_code: 'cn',
  },
  
];

const Component = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  
  return (
    <div className='language_selection mobile_language_selection'>
        <div className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={globe} alt='globe'/>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({code, name, country_code}) => 
                <li key={country_code}>
                <button 
                    className="dropdown-item" 
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                >
                    <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                    {name}
                </button>
                </li>
            )}
            </ul>
        </div>
    </div>
  )
};

Component.propTypes = {
  children: PropTypes.node,
};


export {
  Component as LanguageSelection,
  Component as LanguageSelectionComponent,
};
