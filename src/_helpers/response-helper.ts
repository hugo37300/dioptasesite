/**
 * Logout
 *
 * @method logout permet de se déconnecter
 */
export function logout() {
    localStorage.clear();
}

/**
 * Traite la réponse http
 *
 * @method handleResponse traite la réponse http
 * @param {Object} response token décodé
 * @returns {any} le contenu de la réponse
 */
export function handleResponse(response: any): any {
    return response.text().then((text: any) => {
        let data = text;
        data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            if (response.status === 403) {
                window.location.href = '/forbidden';
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
