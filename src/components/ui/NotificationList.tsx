import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiBell, BiCheck, BiX } from 'react-icons/bi';
import { craftNotificationMessage } from '@/lib/notificationService';

type Notification = {
  id: number;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  notificationType: string;
};

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => setIsOpen(!isOpen);

  const markAsRead = (id: number) => {
    // Implement the logic to mark a notification as read
    console.log(`Marking notification ${id} as read`);
  };

  const deleteNotification = (id: number) => {
    // Implement the logic to delete a notification
    console.log(`Deleting notification ${id}`);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleNotifications}
        className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
      >
        <BiBell className="text-2xl text-gray-600" />
        {notifications.length > 0 && notifications.some(n => !n.isRead) && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {notifications.filter(n => !n.isRead).length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute  right-0 mt-2   w-80 bg-white rounded-lg shadow-xl  overflow-hidden z-50"
          >
            <div className="p-4 bg-primary text-white font-semibold">
              Notifications
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <p className="p-4 text-gray-500">No notifications</p>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b last:border-b-0 ${
                      notification.isRead ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {notification.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <BiCheck className="text-xl" />
                        </button>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <BiX className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationList;
