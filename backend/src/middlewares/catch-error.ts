import ErrorCode from "../common/enums/error-code-enums";
import { AppError } from "../common/utils/AppError";
import { HTTPSTATUS, HttpStatusCode } from "../config/http.config";


export class NotFoundException extends AppError {
    constructor(message: "Resource not found", errorCode?:ErrorCode) {
        super(message, HTTPSTATUS .NOT_FOUND, errorCode || ErrorCode.RESOURCE_NOT_FOUND);
    }
}

export class HttpException extends AppError {
    constructor(message = "Http Exception Error", statusCode: HttpStatusCode, errorCode?:ErrorCode) {
        super(message, statusCode, errorCode);
    }
}