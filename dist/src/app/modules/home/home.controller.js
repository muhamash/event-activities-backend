"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const http_status_codes_1 = require("http-status-codes");
const lib_util_1 = require("../lib/lib.util");
exports.homeRoute = (0, lib_util_1.asyncHandler)(async (req, res, next) => {
    (0, lib_util_1.responseFunction)(res, {
        message: `This is the home route! Service is running!`,
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: null
    });
});
