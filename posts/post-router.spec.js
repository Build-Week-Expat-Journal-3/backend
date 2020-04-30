const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

describe("post-router.js", () => {
  describe("GET /api/posts", () => {
    it("returns a status of 200", async () => {
      let res = await request(server).get("/api/posts");
      expect(res.status).toBe(200);
    });
  });
});
