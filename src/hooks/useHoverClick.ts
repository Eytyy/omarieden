import { useState, useCallback } from 'react';

type UseHoverClickOptions = { disableHoverOnTouch?: boolean };

export function useHoverClick({ disableHoverOnTouch = true }: UseHoverClickOptions = {}) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;

  const onMouseEnter = useCallback(() => {
    if (!(disableHoverOnTouch && isTouch)) setHovered(true);
  }, [disableHoverOnTouch, isTouch]);

  const onMouseLeave = useCallback(() => {
    if (!(disableHoverOnTouch && isTouch)) setHovered(false);
  }, [disableHoverOnTouch, isTouch]);

  const onClick = useCallback(() => {
    setClicked((prev) => !prev);
  }, []);

  return {
    hovered,
    clicked,
    active: hovered || clicked,
    handlers: { onMouseEnter, onMouseLeave, onClick },
  };
}
