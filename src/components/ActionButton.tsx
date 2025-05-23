
import React from 'react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, href }) => {
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="action-button"
      >
        <span className="flex items-center justify-center">{icon}</span>
        <span className="">{label}</span>
      </a>
    );
  }
  
  return (
    <button 
      className="action-button"
      onClick={onClick}
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span className="">{label}</span>
    </button>
  );
};

export default ActionButton;
