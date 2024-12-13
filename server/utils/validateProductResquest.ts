import Joi from "joi";

 export const validateProductResquest = Joi.object({
    productCode: Joi.string().required(),
    productName: Joi.string().required(),
    price: Joi.string().required(),
    discount: Joi.string(),
    imageURLs: Joi.array<string>(),
    size: Joi.array<string>(),
    quantity: Joi.string(),
    descriptions: Joi.string(),
});