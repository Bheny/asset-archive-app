"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { stat } from 'fs';

export default function NotificationBar() {
  const [notifications, setNotifications] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const { data: session, status } = useSession();
  // Function to simulate fetching notifications
  // const fetchNotifications = async () => {
  //   // api code to fetch notifications 
      
  //     if(status === "authenticated") {
        
      
  //     const response = await fetch('/api/notifications');
  //     const data = await response.json();

  //     if (data.notifications?.length > 0) {
  //       const notifications = data.notifications;
  //       setNotification(`You have received ${notifications.length} offer${notifications.length > 1 ? 's' : ''}.`);
  //       setVisible(true);
  //     }
  //   } else {
  //     setNotification(null);
  //     setVisible(false);
  //   }
    
  //   // setNotification('You have received an offer.');
  //   // setVisible(true); // Show the notification
  // };

  // // Polling for new notifications every 5 seconds
  // useEffect(() => {
  //   console.log(status, "here")
  //    if (status === "authenticated") {
  //     fetchNotifications(); // Initial fetch
  //     const interval = setInterval(() => {
  //       fetchNotifications();
  //     }, 60000); // Fetch every 5 seconds
  
  //     return () => clearInterval(interval);
    
  //    }
      
  //   // Cleanup interval on component unmount
  // }, [ status, fetchNotifications ]);

  useEffect(() => {
    const eventSource = new EventSource('/api/notifications');

    eventSource.onmessage = (event) => {
      const newNotification = JSON.parse(event.data);
      setNotifications(newNotification.message);
      setVisible(true);
    };

    eventSource.onerror = (error) => {
      console.error('Error receiving SSE', error);
      eventSource.close();
    };

    // Clean up when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []);

  

  // Function to dismiss notification
  const dismissNotification = () => {
    setVisible(false);
    // setTimeout(() => setNotification(null), 300); // Delay for smooth transition
  };

  return (
    <>
      {notifications && visible && (
        <div className="fixed top-0 left-0 w-full z-50 bg-secondary text-white p-4 shadow-md animate-slide-down transition-transform duration-300 transform translate-y-0">
          <div className="flex justify-between items-center">
            <p className="text-sm text-center">
              {notifications}{' '}
              <Link href="/my-tasks" className="underline font-semibold" onClick={dismissNotification}>
                View
              </Link>
            </p>
            <button onClick={dismissNotification} className="ml-4 text-white hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
