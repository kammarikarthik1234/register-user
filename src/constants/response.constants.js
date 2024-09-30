export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  MULTI_STATUS: 207,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  UNAUTHORIZED: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const STATUS_MESSAGE = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  EMPTY_REQUEST: "Empty Request Received",
  SERVER_ERROR: "Internal Server Error",
  ERROR: "ERROR",
  UNAUTHORIZED: "Access Denied",
  BAD_REQUEST: "Bad Request",
  NOT_FOUND: "No Resource Found",
};

export const MESSAGE = {
  GET_EXERCISES: "Exercises retrieved successfully.",
  GET_LEADERBOARD: "Leaderboard retrieved successfully",
  NOT_GET_LEADERBOARD: "No leaderboard with that curriculum id is found",
  NOT_FOUND_EXERCISES: "No exercises with that curriculum id is found",
};

export const ROUTES = {
  REGISTER_USER: "/register",
  API: "/api",
};
