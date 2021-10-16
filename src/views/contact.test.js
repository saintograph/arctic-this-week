const contact = require("./contact")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new contact.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
