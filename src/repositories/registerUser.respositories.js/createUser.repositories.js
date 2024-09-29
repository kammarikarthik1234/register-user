import { STATUS_CODE } from "../../constants/response.constants.js";
import { logger } from "../../logger/logger.js";
import userModel from "../../models/user.model.js";
import { createAddress } from "./createAddress.repositories.js";

/**
 * Creates a new user and associates them with provided addresses.
 *
 * @param {string} name - The name of the user to register.
 * @param {Array<string>} address - An array of addresses to associate with the user.
 * @returns {Promise<Object>} - A promise that resolves to the registered user object, including user ID and addresses.
 * @throws {Error} - Throws an error if the user creation fails, including issues like duplicate addresses.
 */
export const createUser = async (name, address) => {
  try {
    const newUser = new userModel({ name });

    const registerAddress = await createAddress(newUser._id, address);

    const userData = await newUser.save();
    const { _id, ...user } = userData.toJSON();
    user.userId = _id;
    user.address = registerAddress;
    return user;
  } catch (error) {
    logger.error("Error occurred while creating user:", error);

    if ((error.code = 11000)) {
      const duplicateError = new Error();
      duplicateError.statusCode = STATUS_CODE.CONFLICT;
      duplicateError.message = "duplicate address value";
      throw duplicateError;
    }
    throw error;
  }
};
