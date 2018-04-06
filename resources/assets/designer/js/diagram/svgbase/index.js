import startEvent from "./startEvent"
import endEvent from "./endEvent"
import intermediateCatchEvent from "./intermediateCatchEvent"
import intermediateThrowEvent from "./intermediateThrowEvent"
import boundaryEvent from "./boundaryEvent"
import task from "./task"

let Bases = Object.assign({},
    startEvent,
    endEvent,
    intermediateCatchEvent,
    intermediateThrowEvent,
    boundaryEvent,
    task
);

export default (config) => {
    /**
     * config = {
     *      type:"TYPE",
     *      marker:"MARKER",
     *      options:{}
     * }
     */
    return {
        path: Bases[config.type][config.marker].path,
        options: Object.assign({}, Bases[config.type][config.marker].options, config.options)
    }
}