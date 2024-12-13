import Product from "../lib/models/product";
import { ResponseApi } from "~/server/response";
import connect from "../lib/database";

export default defineEventHandler( async (event) => {
    try {
        const body = await readBody(event);
        const {error} = validateProductResquest.validate(body);
        if (error) {      
            throw createError({statusCode: 400,message:  error.message.replace(/"/g, "")});
        }
        await connect();
        const products = await Product.find();
        const newProduct = new Product(body);
        const isExitProductCode = products.some(e => e.productCode === body.productCode);
        if (isExitProductCode) {
            throw createError({
                statusCode: 400,
                message: 'productCode is unique',
            });
        }
        await newProduct.save();
        return new ResponseApi(201,{productId: newProduct._id},"product created");

    } catch (error:any) {
        if (error.statusCode === 400) {
            throw createError({statusCode: 400,message: error.message});
        }
        throw createError({statusCode: 500,message: 'Internal Server Error'});
    }
})