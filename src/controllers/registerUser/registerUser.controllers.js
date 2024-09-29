import { registerUserService } from "../../services/registerUser/registerUser.services.js";
import {
  sendResponse,
  sendServerErrorResponse,
} from "../../utils/response.utils.js";
import {
  STATUS_CODE,
  STATUS_MESSAGE,
} from "../../constants/response.constants.js";
import { logger } from "../../logger/logger.js";

/**
 * Controller that handles the registration of a user and their associated addresses.
 *
 * @param {Object} req - The request object, containing user details in the body.
 * @param {Object} res - The response object, used to send responses to the client.
 * @returns {Promise<void>} - A promise that resolves to void. Sends appropriate responses based on the registration outcome.
 * @throws {Error} - Throws an error if there are issues in processing the request or registering the user.
 */
export const registerUserController = async (req, res) => {
  try {
    logger.info("registerUser Controller called....!");
    const userName = req.body.userName;
    const address = req.body.address;
    const serviceResponse = await registerUserService(userName, address);
    sendResponse(
      res,
      STATUS_MESSAGE.SUCCESS,
      STATUS_CODE.OK,
      serviceResponse,
      "Successfully registered the user"
    );
  } catch (error) {
    let responseData;
    if (error.statusCode === STATUS_CODE.NOT_FOUND) {
      responseData = {
        errorMessage: error.message,
      };
      sendResponse(
        res,
        STATUS_MESSAGE.ERROR,
        STATUS_CODE.NOT_FOUND,
        responseData,
        "Bad Request"
      );
      return;
    } else if (error.statusCode === STATUS_CODE.CONFLICT) {
      responseData = {
        errorMessage: error.message,
      };
      sendResponse(
        res,
        STATUS_MESSAGE.ERROR,
        STATUS_CODE.CONFLICT,
        responseData,
        "address already registered with other user"
      );
    } else {
      sendServerErrorResponse(res);
    }
    logger.error("server error occured while registering the user");
  }
};
