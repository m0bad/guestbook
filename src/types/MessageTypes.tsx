import {UserDataType} from "./UserTypes";

export type MessageDataType = {
    text: string;
    author: UserDataType;
    replies?: Reply[];
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
