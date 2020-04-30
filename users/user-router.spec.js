const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

const user = {
  username: "jane",
  password: "doe",
};

let token;

const post = {
  title: "test",
  img_url: "test.url",
  location: "WA",
  story: "no",
  user_id: 3,
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

describe("user-router.js", () => {
  describe("GET /api/users/", () => {
    it("should return an array", async () => {
      let res = await request(server).get("/api/users");
      expect(res.status).toBe(200);
    });
  });

  describe("GET /api/users/:id", () => {
    it("should return a status of 200", async () => {
      let res = await request(server).get("/api/users/1");
      expect(res.status).toBe(200);
    });

    it("should return the user object associated it ID in URL", async () => {
      let res = await request(server).get("/api/users");
      expect(res.body[0].username).toBeTruthy();
    });
  });

  describe("GET /api/users/:id/posts", () => {
    it("should return a status of 200", async () => {
      let res = await request(server).get("/api/users/3/posts");
      expect(res.status).toBe(200);
    });

    it("should return an array of 3 posts", async () => {
      let res = await request(server).get("/api/users/1/posts");
      expect(res.body).toHaveLength(3);
    });
  });

  describe("DELETE user /api/users/:id", () => {
    it("deletes a user and returns status of 200", async () => {
      let login = await request(server).post("/api/auth/login").send(user);
      token = await login.body.token;

      let res = await request(server)
        .delete("/api/users/1")
        .set({ Authorization: token });
      expect(res.status).toBe(200);
    });
  });

  describe("PUT /api/users/:id/bio", () => {
    it("returns a status of 400 when not passed a request body", async () => {
      let login = await request(server).post("/api/auth/login").send(user);
      token = await login.body.token;

      let res = await request(server)
        .put("/api/users/2/bio")
        .set({ Authorization: token });
      expect(res.status).toBe(400);
    });
  });

  describe("POST /api/users/id/posts", () => {
    it("returns a status of 201", async () => {
      let login = await request(server).post("/api/auth/login").send(user);
      token = await login.body.token;

      let res = await request(server)
        .post("/api/users/3/posts")
        .set({ Authorization: token })
        .send(post);
      expect(res.status).toBe(201);
    });
  });
});
