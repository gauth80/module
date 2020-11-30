import React, {useRef} from 'react';
import useSlide from '../../hooks/useSlide';


const Slide = ({img}) => {
  const slideImg = useRef(null);
  const slideTxt = useRef(null);
  const {rightDirection,leftDirection} = useSlide(slideImg,slideTxt,img);

  return (
    <div ref={slideImg} className="wrap_home row">
      <div className="col-12 diapo">
        <div className="col-4 diapo_left">
          <button onClick={rightDirection}>
            Suivant
          </button>
        </div>
        <div className="col-4 diapo_center">
            <p ref={slideTxt}></p>
        </div>
        <div className="col-4 diapo_right">
          <button onClick={leftDirection}>
            Prescédant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slide;
