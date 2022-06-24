module.exports = class HttpResponse {
    /**
     * Returns HTTP 200 Status (Ok) to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @param {Object} message The Object to send in HTTP body
     * @returns void
     */
    static ok = (res, message) => res.status(200).json(message);

    /**
     * Returns HTTP 201 (Created) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @param {String} location The path where the client use to find the created Object
     * @returns void
     */
    static created = (res, location) => res.status(201).header('Location', location).send();

    /**
     * Returns HTTP 204 (No Content) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @returns void
     */
    static noContent = (res) => res.status(204).send();

    /**
     * Returns HTTP 400 (Bad Request) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @param {String} error Error message to send in HTTP body
     * @returns void
     */
    static badRequest = (res, error) => res.status(400).json({ error: error.message });

    /**
     * Returns HTTP 401 (Unauthorized) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @returns void
     */
    static unauthorizedError = (res) => res.status(401).json({ error: "Unauthorized. You need to be authenticated to perform this action." });

    /**
     * Returns HTTP 403 (Forbidden) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @returns void
     */
    static forbiddenError = (res) => res.status(403).json({ error: "Forbidden. You don't have permission to perform this action." });

    /**
     * Returns HTTP 404 (Not Found) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @returns void
     */
    static notFound = (res) => res.status(404).send();

    /**
     * Returns HTTP 500 (Internal Server Error) Status to response
     * @param {ExpressResponse} res Express Response Object to return the HTTP Status
     * @returns void
     */
    static serverError = (res) => res.status(500).json({ error: "Internal server error" });
}