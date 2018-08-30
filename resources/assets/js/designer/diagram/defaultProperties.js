import bpmnModdle from 'bpmn-moddle'
import qinu from "qinu"
let moddle = new bpmnModdle()

export default {
    task: {
        'tag': 'bpmn:Task',
        'default': {
            width: 120,
            height: 80
        }
    },
    create(options){
        let bounds = moddle.create('dc:Bounds', Object.assign({}, this[options.type]['default'], {
            x: options.x,
            y: options.y,
        }))
        let bpmnShape = moddle.create('bpmndi:BPMNShape', {
            bounds: bounds
        })
        let bpmnElement = moddle.create(this[options.type]['tag'], {
            id: options.type + "_" + qinu(10),
            'default': null
        })

        bpmnShape.bpmnElement = bpmnElement
        return bpmnShape
    }
}