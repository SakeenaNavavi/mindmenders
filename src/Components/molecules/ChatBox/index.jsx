// Import necessary modules and components
import React from "react";
import "./style.css";
import Card from "../../atoms/card";
import { useState, useEffect } from "react";
import supabase from "../../../supa/supabase/supabaseClient";

// Functional component definition
const chatBox=()=>{
  // State to store messages from the database
  const [messages, setMessages] = useState([]);

  // State to store the current message being entered
  const [message, setMessage] = useState({ 
    Chat_By: '', 
    content: ''
});

  // Destructuring properties from the message state
  const { username, content } = message;

  // useEffect to subscribe to changes in the "profiles" table
  useEffect(() => {
    // Subscribe to changes in the "profiles" table
    const profiles = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "profiles" },
        (payload) => {
          // Log the payload received from the subscription
          console.log({ payload });
          // Add the new message to the state
          payload &&
            setMessages((oldMessages) => [...oldMessages, payload.new]);
        }
      )
      .subscribe();

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      profiles.unsubscribe();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // useEffect to fetch initial data from the "profiles" table
  useEffect(() => {
    // Call the Init function to fetch data
    Init();
  }, []);

  // Function to fetch data from the "profiles" table
  async function Init() {
    const { data: profiles } = await supabase.from("profiles").select("*");
    if (profiles == null) return;
    // Set the fetched data to the messages state
    setMessages(profiles);
  }

  // Function to create and insert a new message into the "profiles" table
  async function createPost() {
    // Insert the new message into the "profiles" table
    await supabase.from("profiles").insert([{ username, content }]).single();
    // Clear the content of the message input
    setMessage({ username: message.username, content: "" });
    // Call the Init function to fetch the updated data
    Init();
    // Save the username to local storage
    submit();
    // Log the messages to the console
    console.log(messages);
  }

  // Function to save the username to local storage
  function submit() {
    localStorage.setItem("name", message.username);
  }

  // JSX structure for rendering the component
  return (
    <div className="container chatbox">
      <div className="separator">
        {messages?.map((message) => (
          <div className="card chatcard" key={message.id}>
            <div className="image-name">
              {/* Dynamic avatar generation using DiceBear service */}
              <img
                className="image"
                src={
                  "https://avatars.dicebear.com/api/adventurer/" +
                  message.username +
                  ".svg"
                }
                alt="image"
              />
              <p className="chat-name">{message.username}</p>
            </div>
            <div className="content">
              <p className="chatbox-text">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="form chat-form">
        <div className="username">
          {/* Input for entering the username */}
          <input
            className="input chat-input"
            id="name"
            autoCapitalize="on"
            placeholder="Username"
            value={localStorage.getItem(message.username)}
            onChange={(e) =>
              setMessage({ ...message, username: e.target.value })
            }
          />
        </div>
        <div className="content chatbox-content">
          {/* Input for entering the message content */}
          <input
            id="message"
            className="input chat-input"
            placeholder="Message"
            value={content}
            onChange={(e) =>
              setMessage({ ...message, content: e.target.value })
            }
          />
        </div>
        {/* Button to submit the message */}
        <button className="button" onClick={createPost}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-send"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default chatBox;