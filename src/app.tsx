import React, { FormEvent, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      console.log(msg)
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
