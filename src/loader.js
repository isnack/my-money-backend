const server = require("./config/server");
require("dotenv").config();
require("./config/database");
require("./config/routes")(server);
