import { Clipboard } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
    taskTitle: string;
    taskUrl: string;
  }
export default function CopyButton({ taskTitle, taskUrl }: ShareButtonProps) {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(taskUrl);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <button
      onClick={handleCopyClick}
      className='px-4 bg-white float-right p-2 border border-secondary text-secondary rounded flex items-center'
    >
      <Clipboard className='w-4 h-4' />
      <span className='ml-2'>Copy Task URL</span>
      {copySuccess && <span className="ml-2 text-green-500">{copySuccess}</span>}
    </button>
  );
}
