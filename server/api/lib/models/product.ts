import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const ProductSchema = new Schema(
    {
        productCode: {type: String, require: true, unique: true},
        productName: {type: String, require: true},
        price: {type: String,require: true},
        discount: {type: String},
        imageURLs: {type: [String]},
        size: {type: [String]},
        quantity: {type: String},
        descriptions: {type: String},
    },
    {
        timestamps: true,
    }
);

const Product = models.Product || model("Product",ProductSchema);
export default Product;