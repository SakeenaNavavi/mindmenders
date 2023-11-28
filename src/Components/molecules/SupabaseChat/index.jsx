// SupabaseChat.js
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const SupabaseChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchMessages();

    // Subscribe to new messages
    const subscription = supabase
      .from('chat')
      .on('INSERT', (payload) => {
        setMessages((prevMessages) => [...prevMessages, payload.new]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchMessages = async () => {
    try {
      let { data: messages, error } = await supabase.from('chat').select('*').order('created_at');
      if (error) console.error('Error fetching messages:', error);
      setMessages(messages);
    } catch (error) {
      console.error('Error fetching messages:', error.message);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !username.trim()) return;

    try {
      const { data, error } = await supabase.from('chat').upsert([
        {
          content: newMessage.trim(),
          username: username.trim(),
        },
      ]);

      if (error) {
        console.error('Error sending message:', error);
      } else {
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="username">{message.username}:</span> {message.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default SupabaseChat;
