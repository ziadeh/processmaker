export class DiagramService {

    constructor() {
    }

    getData() {
        return this.diagram;
    }

    cnn(method, uri, form, successCallback, errorCallback) {
        let vue = require('vue');
        vue.http[method](uri, form)
            .then(response => {
                if (successCallback) {
                    successCallback(response);
                }
            })
            .catch(response => {
                if (errorCallback) {
                    errorCallback(response);
                }
            });
    }
}
