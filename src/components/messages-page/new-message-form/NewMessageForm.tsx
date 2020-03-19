import React, {useContext, useState} from 'react';
import './nes-message-form.css';
import {MessageUserInfo} from "../message-user-info/MessageUserInfo";
import {MessageContext} from "../../../contexts/MessageContext";
import {AuthContext} from "../../../contexts/AuthContext";
// eslint-disable-next-line no-unused-vars
import {NewMessageData} from "../../../types/MessageTypes";

export const NewMessageForm: React.FC<{}> = () => {
    const {addMessage} = useContext(MessageContext);
    const {authState} = useContext(AuthContext);
    const [newMessage, setNewMessage] = useState('');


    const submitMessage = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            let data: NewMessageData = {
                text: newMessage,
                author: authState.user._id
            };
            // @ts-ignore
            addMessage(data).then(() => setNewMessage(''));
        }
    };
    const onKeyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let target = event.target;
        setNewMessage(target.value);
    };
    return (
        <div className="new-message-container">
            <MessageUserInfo/>
            <div className="new-message-block">
                <textarea
                    cols={30}
                    rows={3}
                    placeholder="Add comment..."
                    onChange={onKeyChange}
                    onKeyDown={submitMessage}
                    value={newMessage}
                >
                </textarea>
            </div>
        </div>
    );
};
