import { logger } from "../../logger/logger.js";
import { createUser } from "../../repositories/registerUser.respositories.js/createUser.repositories.js";
import { STATUS_CODE } from "../../constants/response.constants.js";
/**
 * Registers a new user and associates them with provided addresses.
 *
 * @param {string} userName - The name of the user to register.
 * @param {Array<string>} address - An array of addresses to associate with the user.
 * @returns {Promise<Object>} - A promise that resolves to the registered user object.
 * @throws {Error} - Throws an error if the user registration fails,
 *                   including issues like duplicate addresses or database errors.
 */
export const registerUserService = async (userName, address) => {
  try {
    logger.info("registerUser service called....");
    const error = new Error();
    error.statusCode = STATUS_CODE.NOT_FOUND;
    const registerUser = await createUser(userName, address);
    return registerUser;
  } catch (error) {
    logger.error("Error occurred in registerUser service", error);
    throw error;
  }
};
