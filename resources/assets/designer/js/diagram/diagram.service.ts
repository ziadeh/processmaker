export class DiagramService {
    diagram: any;

    constructor() {}

    getData() {
        return this.diagram;
    }

    public cnn(method, uri, form, successCallback?, errorCallback?) {
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
