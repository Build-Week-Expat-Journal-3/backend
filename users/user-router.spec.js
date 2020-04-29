const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

describe("user-router.js", () => {
  beforeEach(async () => {
    await db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  describe("GET /api/users/", () => {
    it("should return a status of 200", async () => {
      let res = await request(server).get("/api/users");
      expect(res.status).toBe(200);
    });

    it("should return an array of users", async () => {
      let res = await request(server).get("/api/users");
      expect(res.body).toHaveLength(3);
    });
  });
});
