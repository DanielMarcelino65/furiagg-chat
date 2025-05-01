// src/components/atoms/TypingIndicator.tsx
'use client';

import React from 'react';

/**
 * TypingIndicator component to show a typing animation.
 *
 * @returns {JSX.Element} The TypingIndicator component.
 */
export default function TypingIndicator() {
  return (
    <div className="flex items-center h-4 space-x-1">
      <span
        style={{ animationDelay: '0s' }}
        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
      />
      <span
        style={{ animationDelay: '0.1s' }}
        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
      />
      <span
        style={{ animationDelay: '0.15s' }}
        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
      />
    </div>
  );
}
