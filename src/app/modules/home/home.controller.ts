import { StatusCodes } from "http-status-codes";
import { prisma } from "../../../config/prismaDb.config";
import { asyncHandler, responseFunction } from "../../lib/lib.util";

export const homeRoute = asyncHandler( async (req, res, next) => 
{
    const test = await prisma.user.findMany( {
        include: {
            events: true,
            password: false
        },
        orderBy: { id: 'asc' },
        take: 1,
        distinct: [ 'email' ],
        // cursor: { id: "1" }
    } );

    console.log( test );
    
    responseFunction( res, {
        message: `This is the home route! Service is running!`,
        statusCode: StatusCodes.OK,
        data: test
    })
} );