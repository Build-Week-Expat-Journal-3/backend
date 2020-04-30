const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

const user = {
  username: "jane",
  password: "doe",
};

describe("user-router.js", () => {
  beforeEach(async () => {
    await db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });
});

describe("GET /api/users/", () => {
  it("should return a status of 200", async () => {
    let res = await request(server).get("/api/users");
    expect(res.status).toBe(200);
  });
  it("should return an array of 3 users", async () => {
    let res = await request(server).get("/api/users");
    expect(res.body).toHaveLength(3);
  });
});

describe("GET /api/users/:id", () => {
  it("should return a status of 200", async () => {
    let res = await request(server).get("/api/users/1");
    expect(res.status).toBe(200);
  });

  it("should return the user object associated it ID in URL", async () => {
    let res = await request(server).get("/api/users");
    expect(res.body[0].username).toBe("jane");
  });
});

describe("GET /api/users/:id/posts", () => {
  it("should return a status of 200", async () => {
    let res = await request(server).get("/api/users/1/posts");
    expect(res.status).toBe(200);
  });

  it("should return an array of 3 posts", async () => {
    let res = await request(server).get("/api/users/1/posts");
    expect(res.body).toHaveLength(3);
  });

  //   describe("DELETE user /:id", () => {
  //     it("test", async () => {
  //       let token;
  //       let login = await request(server).post("/api/auth/login").send(user);
  //       token = await login.body.token;

  //       let res = await request(server)
  //         .delete("/api/users/1")
  //         .set("Authorization", token);
  //       expect(res.status).toBe(200);
  //     });
  //   });
});
