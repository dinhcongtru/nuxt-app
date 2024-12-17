import Product from "../../lib/models/product";
import connect from "../../lib/database";
import { ResponseApi } from "~/server/response";
import { Types } from "mongoose";
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { productCode, productName, price, discount, imageURLs, size, quantity, descriptions,colors } = body;
        const productId = getRouterParam(event, 'id');
        if (!productId) {
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
        const { error } = validateProductResquest.validate(body);
        if (error) {
            throw createError({ statusCode: 400, message: error.message.replace(/"/g, "") });
        }
        await connect();
        const product = await Product.findById(productId);
        if (!product) {
            throw createError({
                statusCode: 400,
                message: 'not found product',
            });
        }

        await Product.findByIdAndUpdate(
            productId, { productCode, productName, price, discount, imageURLs, size, quantity, descriptions,colors }
        );

        return new ResponseApi(200, 1, "product updated");

    } catch (error: any) {
        if (error.statusCode === 400) {
            throw createError({ statusCode: 400, message: error.message });
        }
        throw createError({ statusCode: 500, message: 'Internal Server Error' });
    }
})