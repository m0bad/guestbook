import React from "react";
import './message-style.css';
import {MessageUserInfo} from "../message-user-info/MessageUserInfo";
import {MessageContent} from "../message-content/MessageContent";
// eslint-disable-next-line no-unused-vars
import {MessageDataType} from "../../../types/MessageTypes";

type MessageProps = {
    messageData: MessageDataType
};
export const Message: React.FC<MessageProps> = (props: MessageProps) => {
    const {text, replies, createdAt} = props.messageData;
    return (
        <div className="message-wrap">
            <MessageUserInfo/>
            <MessageContent
                text={text}
                numOfReplies={replies?.length || 0}
                createdAt={createdAt}
            />
        </div>
    );
};
