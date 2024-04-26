import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>features products</h2>
    </>
  );
}
