export default function authHeader(): Headers {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
}