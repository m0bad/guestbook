import React from 'react';
import './message-content.css';
import {BottomMessage} from "../bottom-message/BottomMessage";

type MessageContentProps = {
    text: string,
    numOfReplies: number,
    createdAt: Date
};
export const MessageContent: React.FC<MessageContentProps> = (props: MessageContentProps) => {
    const {text, numOfReplies, createdAt} = props;
    return (
        <div className="message-content-block">
            <p className="message-content-text">{text}</p>

            <BottomMessage
                numOfReplies={numOfReplies}
                createdAt={createdAt}
            />
        </div>

    );
};
