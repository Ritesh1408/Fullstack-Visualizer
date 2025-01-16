import React from 'react';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <div className="bg-green-500 text-white p-4 mb-4">{message}</div>;
};

export default Notification;
