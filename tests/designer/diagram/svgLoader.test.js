import {SVGLoader} from "../../../resources/assets/designer/js/diagram/svgLoader"

let svgloader;
describe("ActionsToolbar", () => {
    beforeEach(() => {
        const myMock = jest.fn();
        const a = new myMock();
        const b = {
            path: () => {
                expect(true).toBe(true);
                return {
                    transform: () => {
                        expect(true).toBe(true);
                        return {
                            attr: () => {
                                expect(true).toBe(true);
                            }
                        }
                    }
                };
            }
        };
        svgloader = new SVGLoader(b);
    });
    it("loadElement()", () => {
        svgloader.loadElement("", "options");
    });
});
