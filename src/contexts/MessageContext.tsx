import React, {createContext, useRef} from "react";
import {addMessageService, getAllMessagesService} from "../services/messagesService";
// eslint-disable-next-line no-unused-vars
import {MessageDataType, MessageStateRef} from "../types/MessageTypes";


// @ts-ignore
export const MessageContext = createContext();

const MessageContextProvider = (props: any) => {
    const messageStateRef: MessageStateRef = useRef({
        messages: []
    });

    const getMessages = async (): Promise<void> => {
        try {
            messageStateRef.current.messages = await getAllMessagesService();
        } catch (err) {
            //TODO:  handle error here
        }
    };

    const addMessage = async (data: MessageDataType): Promise<void> => {
        try {
            const currentMessages = messageStateRef.current.messages;
            const newMessage: MessageDataType = await addMessageService(data);
            messageStateRef.current.messages = [...currentMessages, newMessage];
        } catch (err) {
            //TODO:  handle error here
        }
    };

    return (
        <MessageContext.Provider value={{messages: messageStateRef.current, getMessages, addMessage}}>
            {props.children}
        </MessageContext.Provider>
    )
};


export default MessageContextProvider;
