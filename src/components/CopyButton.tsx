
import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

interface CopyButtonProps {
  textToCopy: string;
  icon: React.ReactNode;
  label: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, icon, label }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      toast.success('Chave copiada!');
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
      toast.error('Não foi possível copiar. Tente manualmente.');
    }
  };

  return (
    <button 
      className="action-button group relative"
      onClick={handleCopy}
    >
      <div className="flex items-center justify-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      <span className="absolute right-4 text-xs px-2 py-0.5 rounded opacity-70">
        <Copy className="h-4 w-4" />
      </span>
    </button>
  );
};

export default CopyButton;
