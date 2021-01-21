import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WrapperSearchForm from './styledSearchbar';

const Searchbar = ({ getQuery }) => {
  const [state, setImages] = useState('');

  const onHandleChange = e => {
    setImages(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    getQuery(state);
  };

  return (
    <WrapperSearchForm className="Searchbar">
      <form className="SearchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <label>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onHandleChange}
            value={state}
          />
        </label>
      </form>
    </WrapperSearchForm>
  );
};

Searchbar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default Searchbar;
