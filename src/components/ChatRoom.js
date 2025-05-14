import React, { useRef, useState } from 'react';
import { auth, firestore, serverTimestampFn } from '../firebase-config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, limit, addDoc } from 'firebase/firestore';
import Message from './Message';

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, email } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestampFn(),
      uid,
      email,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message..." />
        <button type="submit" disabled={!formValue}>Send</button>
      </form>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  );
}

export default ChatRoom;
