import React from 'react';
import './message-user-info.css';

type Props = {};
export const MessageUserInfo = (props: Props) => {
    console.log(props);
    return (
        <div className="message-user-info-photo">
            <div className="message-user-info-avatar"></div>
        </div>
    );
};
