const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

describe("server.js", () => {
  beforeEach(async () => {
    await db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  describe("GET /", () => {
    it("should return a status of 200", async () => {
      let res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    // it("should return a message saying the api is running", async () => {
    //   let res = await request(server).get("/");
    //   expect(res.body.api).toBe("running");
    // });
  });
});
