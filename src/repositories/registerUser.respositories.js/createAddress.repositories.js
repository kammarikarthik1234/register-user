import AddressModel from "../../models/address.models.js";
import { logger } from "../../logger/logger.js";
/**
 * Creates and saves a list of addresses associated with a user.
 *
 * @param {string} userId - The ID of the user to whom the addresses belong.
 * @param {Array<string>} addresses - An array of addresses to be created for the user.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of saved address strings.
 * @throws {Error} - Throws an error if the addresses are not in an array format,
 *                   or if an error occurs during the saving process,
 *                   including issues like duplicate addresses.
 */
export const createAddress = async (userId, addresses) => {
  try {
    if (!Array.isArray(addresses)) {
      throw new Error("Addresses must be an array.");
    }

    const addressData = [];

    for (const address of addresses) {
      const newAddress = new AddressModel({
        userId,
        address,
      });
      const savedAddress = await newAddress.save();
      addressData.push(savedAddress.address);
    }

    return addressData;
  } catch (error) {
    logger.error("Error occurred while creating addresses:", error);
    throw error;
  }
};
