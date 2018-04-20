import actions from "../../../resources/assets/designer/js/actions"

describe("Canvas actions", () => {
    beforeEach(() => {

    });
    it("Creations of actions", () => {
        expect(actions.canvas.drag.end(true)).toEqual({
            type: "canvas/drag/end",
            payload: true
        });

        expect(actions.canvas.drag.start(true)).toEqual({
            type: "canvas/drag/start",
            payload: true
        });

        expect(actions.canvas.zoom.in(true)).toEqual({
            type: "canvas/zoom/in",
            payload: true
        });

        expect(actions.canvas.zoom.out(true)).toEqual({
            type: "canvas/zoom/out",
            payload: true
        });

        expect(actions.canvas.zoom.reset(true)).toEqual({
            type: "canvas/zoom/reset",
            payload: true
        });
    });
});
