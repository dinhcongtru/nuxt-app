import Product from "~/server/api/lib/models/product";
import { ResponseApi } from "../../response";
import connect from "../lib/database";

export default defineEventHandler(async (event) => {
    try {
      await connect();
      const products = await Product.find().sort({ createdAt: 'desc' });
      return new ResponseApi(200,products);
    } catch (error) {
      throw createError({statusCode: 500,message: 'error fetching data products'});
    }
  });
