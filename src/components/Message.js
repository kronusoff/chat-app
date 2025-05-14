import React from 'react';
import { auth } from '../firebase-config';

function Message({ message }) {
  const { text, uid, email, createdAt } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <div className={`message ${messageClass}`}>
      <p><strong>{email}</strong>: {text}</p>
      <small>{formatDate(createdAt)}</small>
    </div>
  );
}

export default Message;
