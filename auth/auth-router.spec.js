const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

user1 = {
  username: "jana",
  password: "duke",
};

user2 = {
  username: "jane",
  password: "doe",
};

user3 = {
  username: "jane",
  password: "doe1",
};

describe("auth-router.js", () => {
  beforeEach(async () => {
    await db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  describe("POST /api/auth/register", () => {
    it("should return a status of 201 created", async () => {
      let res = await request(server).post("/api/auth/register").send(user1);
      expect(res.status).toBe(201);
    });

    it("should return an object containing the new user information", async () => {
      let res = await request(server).post("/api/auth/register").send(user1);
      expect(res.body.user[0].username).toBe("jana");
    });

    it("should return a token when passed valid registration credentials", async () => {
      let res = await request(server).post("/api/auth/register").send(user1);
      expect(res.body.token).toBeTruthy();
    });

    it("should return a status of 500 if the user is already in the database", async () => {
      let res = await request(server).post("/api/auth/register").send(user2);
      expect(res.status).toBe(500);
    });
  });

  describe("POST /api/auth/login", () => {
    it("should return a status of 200", async () => {
      let res = await request(server).post("/api/auth/login").send(user2);
      expect(res.status).toBe(200);
    });

    it("should return a status of 401 if incorrect password is entered", async () => {
      let res = await request(server).post("/api/auth/login").send(user3);
      expect(res.status).toBe(401);
    });

    it("should return a token", async () => {
      let res = await request(server).post("/api/auth/login").send(user2);
      expect(res.body.token).toBeTruthy();
    });

    it("should return the user ID", async () => {
      let res = await request(server).post("/api/auth/login").send(user2);
      expect(res.body.id).toBe(1);
    });
  });
});
