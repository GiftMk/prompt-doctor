import { RefObject, useEffect, useState } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const useDimensions = (
  ref: RefObject<HTMLElement | null>,
  onChange?: (dimensions: Dimensions) => void
) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const resizeObserver = new ResizeObserver(() =>
      onChange?.(element.getBoundingClientRect())
    );

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, [ref]);
};
