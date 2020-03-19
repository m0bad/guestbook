import React, {createContext, useEffect, useState} from "react";
import {addMessageService, getAllMessagesService} from "../services/messagesService";
// eslint-disable-next-line no-unused-vars
import {MessageContextType, MessageDataType, NewMessageData} from "../types/MessageTypes";


export const MessageContext = createContext<Partial<MessageContextType>>({});

const MessageContextProvider = (props: any) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
            await getMessages();
        };
        fetchMessages();
    }, []);

    const getMessages = async (): Promise<void> => {
        try {
            const allMessages = await getAllMessagesService();
            // TODO: why we need ts-ignore here ????
            // @ts-ignore
            setMessages(allMessages);
        } catch (err) {
            //TODO:  handle error here
        }
    };

    const addMessage = async (data: NewMessageData): Promise<void> => {
        try {
            const newMessage: MessageDataType = await addMessageService(data);
            // @ts-ignore
            setMessages([...messages, newMessage]);
        } catch (err) {
            //TODO:  handle error here
        }
    };

    return (
        // @ts-ignore
        <MessageContext.Provider value={{messages, getMessages, addMessage}}>
            {props.children}
        </MessageContext.Provider>
    )
};


export default MessageContextProvider;
