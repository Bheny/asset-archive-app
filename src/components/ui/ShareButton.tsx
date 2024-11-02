import { Share } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  taskTitle: string;
  taskUrl: string;
}

export default function ShareButton({ taskTitle, taskUrl }: ShareButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: taskTitle,
          text: `Check out this task: ${taskTitle}`,
          url: taskUrl,
        });
      } catch (error) {
        console.error("Error sharing", error);
        // Fallback to clipboard copying if sharing fails
        await copyToClipboard();
      }
    } else {
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(taskUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error copying text", error);
      alert("Unable to copy. Please copy the link manually: " + taskUrl);
    }
  };

  return (
    <button
      className='px-4 bg-white float-right p-2 border border-secondary text-secondary rounded flex items-center gap-2'
      onClick={handleShare}
    >
      <Share className='w-4 h-4' />
      {isCopied ? "Copied!" : "Share"}
    </button>
  );
}
