import React from 'react';
import moment from 'moment';
import './bottom-message.css';


type BottomMessageProps = {
    createdAt: Date,
    numOfReplies: number
};
export const BottomMessage: React.FC<BottomMessageProps> = (props: BottomMessageProps) => {
    const {createdAt, numOfReplies} = props;
    return (
        <div className="bottom-message">
            <div className="bottom-message-date">
                {
                    moment(createdAt)
                        .format('MMMM Do YYYY, h:mm:ss a')
                }
            </div>
            <ul className="bottom-message-actions">
                <i className="bottom-message-n0-replies">{numOfReplies} reply</i>
                <li className="bottom-message-reply">Reply</li>
            </ul>
        </div>
    );
};
