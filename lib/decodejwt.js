export function decodeJWT(token) {
    try {
        if (!token) return null;
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64)); // Decodes the token

    if (decodedPayload && decodedPayload.exp * 1000 > Date.now()) {
        return decodedPayload;
    }
    else {
        return null;
    }
    }
    catch {
        return null
    }
}