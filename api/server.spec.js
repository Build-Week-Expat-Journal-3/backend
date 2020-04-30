const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

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

describe("server.js", () => {
  it("should return a status of 200", async () => {
    let res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("returns message confirming api is running", async () => {
    let res = await request(server).get("/");
    expect(res.body.api).toBe("running");
  });
});
