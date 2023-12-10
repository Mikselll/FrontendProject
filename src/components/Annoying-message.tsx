import { useEffect, useState } from 'react';
import cn from 'classnames';

const AnnoyingMessage = () => {
  const [isActive, setIsActive] = useState(true);
  
  const messageClass = cn('annoying-message', {
    'annoying-message--active': isActive,
  });

  const hideMessage = () => setIsActive(false);

  useEffect(() => {    
    if (isActive) return;

    const twoMinutes = 120000;
    const timeoutId = setTimeout(() => setIsActive(true), twoMinutes);
    return () => clearTimeout(timeoutId);
  }, [isActive]);

  return (
    <>
      <div className={messageClass}>
        <button type="button" className="button button--close" onClick={hideMessage}></button>
        <img src="./src/images/annoying-image.png" alt="annoying image" />
      </div>
    </>
  );
};

export default AnnoyingMessage;
