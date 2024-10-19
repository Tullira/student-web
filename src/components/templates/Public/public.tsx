import React from 'react';

interface Props {
  children: JSX.Element;
}

function PublicOnlyFeature({ children }: Props): JSX.Element {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {children}
    </div>
  );
}

export default function PublicOnlyFeatureWrapper({
  children
}: Props): JSX.Element {
  return <PublicOnlyFeature>{children}</PublicOnlyFeature>;
}
