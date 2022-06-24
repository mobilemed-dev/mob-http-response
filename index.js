module.exports = class HttpResponse {
    static ok = (res, message) => res.status(200).json(message);

    static created = (res, location) => res.status(201).header('Location', location).send();

    static noContent = (res) => res.status(204).send();

    static badRequest = (res, error) => res.status(400).json({ error: error.message });

    static unauthorizedError = (res) => res.status(401).json({ error: "Unauthorized. You need to be authenticated to perform this action." });

    static forbiddenError = (res) => res.status(403).json({ error: "Forbidden. You don't have permission to perform this action." });

    static notFound = (res) => res.status(404).send();

    static serverError = (res) => res.status(500).json({ error: "Internal server error" });
}