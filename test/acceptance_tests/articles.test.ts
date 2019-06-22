import request from "supertest"
import { app } from "../../src/server"

describe("GET /articles", () => {
  it("SHOULD return 200 ok ", (done) => {
    request(app)
      .get("/articles")
      .end((err, res) => {
        expect(res.status).toBe(200)
        done()
      })
  })
})