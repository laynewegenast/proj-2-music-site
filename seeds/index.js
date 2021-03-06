const seedUsers = require("./user-seeds");
const seedPlaylists = require("./playlist-seeds");
const seedComments = require("./comment-seeds");
const seedSongs = require("./song-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedPlaylists();
  console.log("--------------");

  await seedSongs();
  console.log("--------------");

  await seedComments();
  console.log("--------------");


  process.exit(0);
};

seedAll();
