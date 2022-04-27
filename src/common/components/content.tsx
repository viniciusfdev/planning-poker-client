import React from 'react';

/**
 * Encapsulate any page content with the app page style.
 */
export function Content({ content: content }: { content: JSX.Element; props?: any }) {
  return <main style={{ padding: 0, margin: 0 }}>{content}</main>;
}
