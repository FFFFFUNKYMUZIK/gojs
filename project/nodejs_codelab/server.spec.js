const should = require("should")
const server = require("./server")

/*
describe("server test suite", () =>{
	it('should return "hello world"', () =>{
		server().should.be.equal("Hello world")
	})
})
*/

describe('server', () => {
  it('should have listen()', () => {
    server.should.have.property('listen');
    should(typeof server.listen).be.equal('function');
  })
})
