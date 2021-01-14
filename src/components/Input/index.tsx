import React, { useState, InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  answer?: string;
  option?: string;
}

const Input: React.FC<InputProps> = ({
  answer,
  option = 'default',
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      {option === 'input-radio' ? (
        <div className="option">
          <input {...rest} /> {answer && answer}
        </div>
      ) : (
        <div className={focus ? 'answer-input focus' : 'answer-input'}>
          <input
            {...rest}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />{' '}
          {answer && answer}
        </div>
      )}
    </>
  );
};

export default Input;
