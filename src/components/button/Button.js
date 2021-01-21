import React from 'react';
import PropTypes from 'prop-types';
import WrapperButton from './StyledButton';

const Button = ({ onBtnClick, title }) => {
  return (
    <WrapperButton>
      <button type="submit" onClick={onBtnClick} className="Button">
        {title}
      </button>
    </WrapperButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
