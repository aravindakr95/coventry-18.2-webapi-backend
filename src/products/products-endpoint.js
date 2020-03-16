import makeHttpError from '../helpers/validators/http-error';
import HttpResponseType from '../models/http-response-type';

export default function makeProductsEndpointHandler({
    productList
}) {
    return async function handle(httpRequest) {

        switch (httpRequest.method) {

        case 'POST':
            return postProduct(httpRequest);

        case 'GET':
            return getProducts(httpRequest);

        case 'DELETE':
            return deleteProduct(httpRequest);

        default:
            return makeHttpError({
                statusCode: HttpResponseType.METHOD_NOT_ALLOWED,
                errorMessage: `${httpRequest.method} method not allowed.`
            });
        }

    };

    async function getProducts(httpRequest) {
        const {
            id
        } = httpRequest.pathParams || {};
        const {
            max,
            before,
            after
        } = httpRequest.queryParams || {};
        let result = null;
        if (!id) {
            result = await await productList.getProducts();
        } else {
            result = await productList.findProductById({
                id
            });
        }
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: HttpResponseType.SUCCESS,
            data: JSON.stringify({
                result
            })
        };
    }

    async function postProduct(httpRequest) {
        let result = await productList.add({
            'product': httpRequest.body
        });

        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: HttpResponseType.SUCCESS,
            data: {
                result
            }

        };

    }
    async function deleteProduct(httpRequest) {
        const {
            id
        } = httpRequest.pathParams || {};

        let result = await productList.remove({
            id
        });
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: HttpResponseType.SUCCESS,
            data: JSON.stringify({
                result
            })
        };
    }
}