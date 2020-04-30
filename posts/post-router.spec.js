const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

const user = {
  username: "jane",
  password: "doe",
};

beforeEach((done) => {
  db.migrate.rollback().then(() => {
    db.migrate.latest().then(() => {
      return db.seed.run().then(() => {
        done();
      });
    });
  });
});

afterEach((done) => {
  db.migrate.rollback().then(() => {
    done();
  });
});

describe("post-router.js", () => {
  describe("GET /api/posts", () => {
    it("returns a status of 200", async () => {
      let res = await request(server).get("/api/posts");
      expect(res.status).toBe(200);
    });

    it("returns an array of posts", async () => {
      let res = await request(server).get("/api/posts");
      expect(res.body.length).toBe(9);
    });
  });

  describe("GET /api/posts/:id", () => {
    it("returns a status of 200", async () => {
      let res = await request(server).get("/api/posts/1");
      expect(res.status).toBe(200);
    });

    it("returns the post with the same id passed in URL params", async () => {
      let res = await request(server).get("/api/posts/1");
      expect(res.body[0].id).toBe(1);
    });
  });

  describe("DELETE api/posts/:id", () => {
    it("returns a status of 200", async () => {
      let login = await request(server).post("/api/auth/login").send(user);
      token = await login.body.token;

      let res = await request(server)
        .delete("/api/posts/9")
        .set({ Authorization: token });
      expect(res.status).toBe(200);
    });

    it("returns status of 400 if not authenticated", async () => {
      let res = await request(server).delete("/api/posts/8");
      expect(res.status).toBe(400);
    });
  });

  describe("PUT /api/posts/:id", () => {
    it("returns status of 201", async () => {
      let login = await request(server).post("/api/auth/login").send(user);
      token = await login.body.token;

      let res = await request(server)
        .put("/api/posts/1")
        .set({ Authorization: token })
        .send({ story: "hello world" });

      expect(res.status).toBe(201);
    });

    it("updates story property to value passed in through request body", async () => {
      let login = await request(server).post("/api/auth/login").send(user);
      token = await login.body.token;

      await request(server)
        .put("/api/posts/2")
        .set({ Authorization: token })
        .send({ story: "hello world" });

      let res = await request(server).get("/api/posts/2");

      expect(res.body[0].story).toBe("hello world");
    });
  });
});
