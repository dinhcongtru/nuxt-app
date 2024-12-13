import { ResponseApi } from "~/server/response";
import connect from "../../lib/database";
import Product from "../../lib/models/product";
import { Types } from "mongoose";

export default defineEventHandler (async (event) => {
    try {
        const productId = getRouterParam(event, 'id');
        if(!productId) {
            throw createError({
                statusCode: 400,
                message: 'productID empty',
            });
        }
        if (!Types.ObjectId.isValid(productId)) {
            throw createError({
                statusCode: 400,
                message: 'invalid productID',
            });
        }
        await connect();
        const deleteProduct = await Product.findOneAndDelete(new Types.ObjectId(productId));
        if (!deleteProduct) {
            throw createError({
                statusCode: 400,
                message: 'product not found',
            });
        }
        return new ResponseApi(200,1,"product is deleted");
    } catch (error:any) {
        if (error.statusCode === 400) {
            throw createError({ statusCode: 400, message: error.message });
        }
        throw createError({ statusCode: 500, message: 'Internal Server Error' });
    }
})