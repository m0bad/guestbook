export const apiHelper = async (reqType: string, url: string, body: any = {}): Promise<any> => {
    return fetch(url, {
        method: reqType,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};
