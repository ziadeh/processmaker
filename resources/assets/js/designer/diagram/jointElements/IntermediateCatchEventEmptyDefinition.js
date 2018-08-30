import joint from "jointjs"

export const IntermediateCatchEventEmptyDefinition = joint.dia.Element.define('bpmn.IntermediateCatchEventEmptyDefinition',
    {
        attrs: {
            c: {
                fill: "#FFF4D1",
                stroke: "#FBBE02",
                strokeWidth: 2,
                cx: 20,
                cy: 20,
                r: 20
            },
            ci: {
                fill: "#FFF4D1",
                stroke: "#FBBE02",
                strokeWidth: 2,
                cx: 20,
                cy: 20,
                r: 16
            }
        }
    }, {
        markup: [{
            tagName: 'circle',
            selector: 'c'
        }, {
            tagName: 'circle',
            selector: 'ci'
        }]
    });