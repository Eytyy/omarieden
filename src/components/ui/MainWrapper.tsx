import React from 'react';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return <div className="col-span-full">{children}</div>;
}
