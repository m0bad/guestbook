import React from 'react';
import './nes-message-form.css';
import {MessageUserInfo} from "../message-user-info/MessageUserInfo";

type Props = {};
export const NewMessageForm = (props: Props) => {
    console.log(props);
    return (
        <div className="new-message-container">
            <MessageUserInfo/>
            <div className="new-message-block">
                    <textarea name={''} id="" cols={30} rows={3} placeholder="Add comment...">{null}</textarea>
            </div>
        </div>
    );
};
