import Vue from "vue";

export class DiagramService {
    constructor () {
    }

    getData () {
        return this.diagram;
    }

    cnn (method, uri, form, successCallback, errorCallback) {
        Vue.http[method](uri, form)
            .then((response) => {
                if (successCallback) {
                    successCallback(response);
                }
            })
            .catch((response) => {
                if (errorCallback) {
                    errorCallback(response);
                }
            });
    }
}
