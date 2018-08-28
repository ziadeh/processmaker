import actions from "../../../actions"
import _ from "lodash"

function selectShape(payload, collection, builderAttr, root, graph, paper) {
    let el = _.find(collection, (el) => {
        return el.getId() == payload.id
    })

    if (el) {
        el.select()

            let multiselector = builderAttr["multiselector"]
            multiselector.embed(el.getShape()) // Embed the new shape to the first shape
        } else {
            builderAttr["selected"].push(el)
        }
    }
}

export default {
    [actions.svgcanvas.shape.select]: selectShape
}
