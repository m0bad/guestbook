import React, {useContext} from 'react';
import './messagesList-style.css';
import {Message} from "../message/Message";
import {NewMessageForm} from "../new-message-form/NewMessageForm";
import {MessageContext} from "../../../contexts/MessageContext";
// eslint-disable-next-line no-unused-vars
import {MessageDataType} from "../../../types/MessageTypes";

const MessagesList: React.FC<{}> = () => {
    const {messages} = useContext(MessageContext);
    return (
        <div>
            <div className="message-list-container">
                {
                    messages
                        ? messages.map((message: MessageDataType) => <Message key={message._id} messageData={message}/>)
                        : <p>loading...</p>
                }
                <NewMessageForm/>
            </div>
        </div>
    );
};

export default MessagesList;
