import React from 'react';
import { useSession } from 'next-auth/react';

interface GreetingTextProps {
  className?: string;
}

const GreetingText: React.FC<GreetingTextProps> = ({ className }) => {
  const { data: session } = useSession();

  const userName = session?.user?.firstname || session?.user?.username || 'Guest';

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  console.log(session?.user);

  return (
    <h1 className={`text-xl font-bold ${className}`}>
      {getGreeting()}, <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{userName}!</span>
    </h1>
  );
};

export default GreetingText;
