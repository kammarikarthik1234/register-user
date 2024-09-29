import {
  STATUS_CODE,
  STATUS_MESSAGE,
} from "../constants/response.constants.js";

/**
 * Function to handle response structure.
 * @param res - actual response
 * @param status - response status
 * @param code - response status code
 * @param data - response data to send
 * @param message - message in response. Can be undefined/string. if undefined, it won't be sent in the response.
 */
const sendResponse = (res, status, code, data, message, meta = undefined) => {
  res.status(code).json({
    status,
    message,
    data,
    meta,
  });
};

const sendServerErrorResponse = (res) => {
  sendResponse(
    res,
    STATUS_MESSAGE.FAILED,
    STATUS_CODE.INTERNAL_SERVER_ERROR,
    "",
    STATUS_MESSAGE.SERVER_ERROR
  );
};

export { sendResponse, sendServerErrorResponse };
