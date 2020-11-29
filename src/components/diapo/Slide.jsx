import React, {useRef} from 'react';
import useSlide from '../../hooks/useSlide';


const Slide = ({img}) => {
  const slideImg = useRef(null);
  const slideTxt = useRef(null);
  const {rightDirection,leftDirection} = useSlide(slideImg,slideTxt,img);

  return (
    <div ref={slideImg} className="wrap_home">
      <div className="">
        <button onClick={rightDirection}>
            right
        </button>
        <div className=''>
            <p ref={slideTxt}></p>
        </div>
        <button onClick={leftDirection}>
            left
        </button>
      </div>
    </div>
  )
}

export default Slide;
