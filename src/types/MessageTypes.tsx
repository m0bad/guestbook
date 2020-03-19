import {UserDataType} from "./UserTypes";

export type MessageDataType = {
    _id: string;
    text: string;
    author: UserDataType;
    replies: Reply[];
    createdAt: Date;
    updatedAT: Date;
}

export type Reply = {
    text: string;
    author: UserDataType;
    message: MessageDataType;
    createdAt: Date;
    updatedAt: Date;
}

export type MessageContextType = {
    messages: MessageDataType[],
    getMessages(): Promise<void>;
    addMessage(data: MessageDataType): Promise<void>;
}
