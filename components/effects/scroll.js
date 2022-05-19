import React, { useEffect, useRef } from 'react';

const Comp = () => {
  const ref = useRef();

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    console.log(offset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (<div ref={ref}>Contents of your component</div>)
}

export default Comp;