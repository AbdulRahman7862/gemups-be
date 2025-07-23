const ProxyProduct = require('../models/ProxyProduct');
const ApiError = require('../utils/apiError');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const Joi = require('joi');

const proxyProductSchema = Joi.object({
  name: Joi.string().required(),
  shortDescription: Joi.string().optional(),
  description: Joi.string().optional(),
  logo: Joi.string().uri().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  type: Joi.string().valid('Residential', 'ISP', 'Datacenter').required(),
  provider: Joi.string().required(),
  pricePerUnit: Joi.number().required(),
  rating: Joi.number().min(0).max(5).optional(),
  comments: Joi.array().items(Joi.object()).optional(),
  availableDurations: Joi.array().items(Joi.number()).optional(),
  supportedCountries: Joi.array().items(Joi.string()).optional(),
  isActive: Joi.boolean().optional()
});

exports.createProxyProduct = async (req, res, next) => {
  try {
    const { error, value } = proxyProductSchema.validate(req.body);
    if (error) return next(new ApiError(400, error.details[0].message));
    const product = await ProxyProduct.create(value);
    return successResponse(res, product, 'Proxy product created', 201);
  } catch (err) {
    next(err);
  }
};

exports.updateProxyProduct = async (req, res, next) => {
  try {
    const { error, value } = proxyProductSchema.validate(req.body);
    if (error) return next(new ApiError(400, error.details[0].message));
    const product = await ProxyProduct.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!product) return next(new ApiError(404, 'Proxy product not found'));
    return successResponse(res, product, 'Proxy product updated');
  } catch (err) {
    next(err);
  }
};

exports.deleteProxyProduct = async (req, res, next) => {
  try {
    const product = await ProxyProduct.findByIdAndDelete(req.params.id);
    if (!product) return next(new ApiError(404, 'Proxy product not found'));
    return successResponse(res, null, 'Proxy product deleted');
  } catch (err) {
    next(err);
  }
};

exports.listProxyProducts = async (req, res, next) => {
  try {
    const products = await ProxyProduct.find({ isActive: true });
    return successResponse(res, products, 'Proxy products fetched');
  } catch (err) {
    next(err);
  }
};

exports.getProxyProduct = async (req, res, next) => {
  try {
    const product = await ProxyProduct.findById(req.params.id);
    if (!product || !product.isActive) return next(new ApiError(404, 'Proxy product not found'));
    return successResponse(res, product, 'Proxy product fetched');
  } catch (err) {
    next(err);
  }
}; 