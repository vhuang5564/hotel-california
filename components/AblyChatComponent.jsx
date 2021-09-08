import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from '../styles/AblyChatComponent.module.css';

const AblyChatComponent = () => {

    let inputBox = null;
    let messageEnd = null;
    const [messageText, setMessageText] = useState(""); // bound to the text area where messages can be typed
    const [receivedMessages, setMessages] = useState([]); //Message history on screen
    const messageTextIsEmpty = messageText.trim().length === 0; //Disable the send button when text is empty

    const [channel, ably] = useChannel("chat-demo", (message) => {
        // Here we're computing the state that'll be drawn into the message history
        // We do that by slicing the last 199 messages from the receivedMessages buffer

        const history = receivedMessages.slice(-199);
        setMessages([...history, message]);

        // Then finally, we take the message history, and combine it with the new message
        // This means we'll always have up to 199 message + 1 new message, stored using the
        // setMessages react useState hook
    });

    const sendChatMessage = (messageText) => { //resposible for publishing new messages
        channel.publish({ name: "chat-message", data: messageText });
        setMessageText("");
        inputBox.focus();
    }

    const handleFormSubmission = (event) => { //When triggered when the submit hutton is clicked calls send message to prevent the page for reloading
        event.preventDefault();
        sendChatMessage(messageText);
    }
    const handleKeyPress = (event) => { //makes sure that if the user presses enter the sendchatmessage is triggered
        if (event.charCode !== 13 || messageTextIsEmpty) {
            return;
        }
        sendChatMessage(messageText);
        event.preventDefault();
    }
    const messages = receivedMessages.map((message, index) => { //Will display messages that are sent
        const author = message.connectionId === ably.connection.id ? "me" : "other";
        return <span key={index} className={styles.message} data-author={author}>{message.data}</span>;
    });

    useEffect(() => {
        messageEnd.scrollIntoView({ behaviour: "smooth" });
      });

    return (
        <div className={styles.chatHolder}>
            <div className={styles.chatText}>
                {messages}
                <div ref={(element) => { messageEnd = element; }}></div>
            </div>
            <form onSubmit={handleFormSubmission} className={styles.form}>
                <textarea
                    ref={(element) => { inputBox = element; }}
                    value={messageText}
                    placeholder="Type your name and a message..."
                    onChange={e => setMessageText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={styles.textarea}
                ></textarea>
                <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>Send</button>
            </form>
        </div>
    )
}

export default AblyChatComponent;