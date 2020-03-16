import React from 'react';
import './messagesList-style.css';
import {Message} from "../message/Message";
import {NewMessageForm} from "../new-message-form/NewMessageForm";

type MessagesListProps = {

};
const MessagesList: React.FC<MessagesListProps> = () => {
    return (
        <div>
            <div className="message-list-container">
                <Message/>
                <Message/>
                <Message/>
                <NewMessageForm />
            </div>
        </div>
    );
};

export default MessagesList;
