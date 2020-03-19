// eslint-disable-next-line no-unused-vars
import {MessageDataType} from "../types/MessageTypes";
import {apiHelper} from "./api";

export const getAllMessagesService = async (): Promise<MessageDataType[]> => {
    const result = await apiHelper('POST', '/api/messages/get');
    if (result.status === 200) {
        return result.json();
    } else {
        throw new Error('ERROR GETTING MESSAGES');
    }
};

export const addMessageService = async (data: MessageDataType): Promise<MessageDataType> => {
    const result = await apiHelper('POST', '/api/messages/add', data);
    if (result.status === 200) {
        return result.json();
    } else {
        throw new Error('ERROR adding MESSAGE');
    }
};
