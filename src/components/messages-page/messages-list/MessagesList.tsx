import React from 'react';
import './messagesList-style.css';
import {Message} from "../message/Message";

type MessagesListProps = {

};
const MessagesList: React.FC<MessagesListProps> = () => {
    return (
        <div className="message-list-container">
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default MessagesList;
