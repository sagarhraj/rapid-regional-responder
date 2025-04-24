
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`px-4 pt-16 pb-20 min-h-screen ${className}`}>
      {children}
    </div>
  );
};
