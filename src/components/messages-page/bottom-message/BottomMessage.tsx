import React from 'react';
import './bottom-message.css';
type Props = {

};
export const BottomMessage = (props: Props) => {
    console.log(props);
    return (
        <div className="bottom-message">
            <div className="bottom-message-date">Aug 23, 2014 @ 10:32 AM</div>
            <ul className="bottom-message-actions">
                <i className="bottom-message-n0-replies">100 reply</i>
                <li className="bottom-message-reply">Reply</li>
            </ul>
        </div>
    );
};
