import React from "react";
import './message-style.css';
import {MessageUserInfo} from "../message-user-info/MessageUserInfo";
import {MessageContent} from "../message-content/MessageContent";

type Props = {};
export const Message = (props: Props) => {
    console.log(props);
    return (
         <div className="message-wrap">
             <MessageUserInfo />
             <MessageContent />
         </div>
    );
};
