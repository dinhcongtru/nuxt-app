import type { StatusType } from "~/server/types/status";

export class ResponseApi<T> {
    data?: T;
    statusCode: StatusType;
    message?: string;

    constructor(statusCode:StatusType,data?:T,message?: string) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
    }
}