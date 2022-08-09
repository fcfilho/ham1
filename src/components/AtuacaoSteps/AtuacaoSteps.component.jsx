import React, { useEffect, useState, useRef } from 'react';
import * as Styled from './AtuacaoSteps.styles';

function SliderImage({ imageId, image, activeImage }) {
  return <img src={image} alt="" className={activeImage === imageId ? 'isActive' : null} />;
}

function AtuacaoSteps({ children, bg, size: imgSize, ...props }) {
  const [activeImage, setActiveImage] = useState(0);
  const sliderInterval = useRef();

  useEffect(() => {
    if (Array.isArray(bg)) {
      sliderInterval.current = setInterval(() => {
        setActiveImage((prevState) => prevState < bg.length - 1 ? prevState += 1 : 0);
      }, 5000)
    }

    return () => clearInterval(sliderInterval.current);
  }, [bg]);

  function renderImages() {
    if (Array.isArray(bg)) {
      return (
        <div className="fader">
          {bg.map((image, idx) => (
            <SliderImage key={idx} imageId={idx} image={image} activeImage={activeImage} />
          ))}
        </div>
      );
    }

    return <img src={bg} alt="" />;
  }

  return <Styled.AtuacaoSteps {...props} imgSize={imgSize} >
    <div className="content">{children}</div>
    {renderImages()}
  </Styled.AtuacaoSteps>;
}

export default AtuacaoSteps;
