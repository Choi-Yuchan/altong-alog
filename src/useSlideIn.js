import { useRef, useEffect } from 'react';

//사용 컴포넌트에 토글 값 변경 state 필요함.

export const useSlideIn = (duration = 1, toggle) => {
    if (typeof duration !== "number" ) {
      return;
    }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `transform ${duration}s ease-in-out 0s`;
        current.style.transform = "scaleX(1)";
      }
    }, [toggle]);
    return { ref: element, style: { transform: "scaleX(0)" } };
  };