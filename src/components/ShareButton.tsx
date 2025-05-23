
import React from 'react';
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

const ShareButton: React.FC = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Lady N',
      text: 'Conheça a Lady N, produtos artesanais de qualidade!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support the Web Share API
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copiado para a área de transferência!');
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      toast.error('Não foi possível compartilhar. Tente copiar o link manualmente.');
    }
  };

  return (
    <button 
      onClick={handleShare} 
      className="fixed top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
      aria-label="Compartilhar"
    >
      <Share2 size={20} />
    </button>
  );
};

export default ShareButton;
