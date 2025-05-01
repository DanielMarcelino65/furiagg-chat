import React from 'react';

/**
 * Scrolls the specified element into view smoothly.
 *
 * @param {React.RefObject<HTMLElement | null>} ref - The reference to the element to scroll to.
 */
export const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};
