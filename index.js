const server = require("./api/server");
require("dotenv").config();

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n\n **** server listening on port ${port} **** \n\n`);
});
