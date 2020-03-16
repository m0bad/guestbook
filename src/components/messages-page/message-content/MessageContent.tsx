import React from 'react';
import './message-content.css';
import {BottomMessage} from "../bottom-message/BottomMessage";

type Props = {

};
export const MessageContent = (props: Props) => {
    console.log(props);
    return (
        <div className="message-content-block">
            <p className="message-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus
                iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto
                tempore, quaerat explicabo veniam fuga corporis totam.</p>

            <BottomMessage />
        </div>

    );
};
