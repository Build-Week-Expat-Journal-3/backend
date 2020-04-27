exports.seed = function (knex) {
  return knex("user").insert([
    {
      username: "jane",
      password: "$2a$08$yqmN00UOvS//xCDaWcXJdORAG4LZj95WAIpitIR5A6/2dM1aPVeKO",
      bio:
        "37 years old, from Miami, Florida. Single mother of two who loves to travel.",
    },
    {
      username: "john",
      password: "$2a$08$90FS3GcHzgCPnAgIWV7oxOS7I3F4UBuYK3UFWb5qjJiVu9q/Dkntu",
      bio:
        "Trying to visit as many beaches as possible before I die. From New Orleans, Louisiana.",
    },
    {
      username: "joe",
      password: "$2a$08$KUsxReAxKjFpxSvEe9ia8eHicr42ZLphlSeKF2k6WdeAmuUks7tX6",
      bio: "Avid rock climber. From Ithaca, NY.",
    },
  ]);
};
