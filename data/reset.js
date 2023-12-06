const { exec } = require("child_process");

const dbconnection = "psql -U admin -d lachetaloc -f ";
const resetDb = "data/reset_db.sql";
const createDb = "data/create_db.sql";
const populateDb = "data/populate.sql";

const reset = async () => {
  return new Promise((resolve, reject) => {
    exec(dbconnection + resetDb, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      console.log(stdout);
      console.error(stderr);
      resolve();
    });
  });
};

const create = async () => {
  return new Promise((resolve, reject) => {
    exec(dbconnection + createDb, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      console.log(stdout);
      console.error(stderr);
      resolve();
    });
  });
};

const populate = () => {
  return new Promise((resolve, reject) => {
    exec(dbconnection + populateDb, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      console.log(stdout);
      console.error(stderr);
      resolve;
    });
  });
};

reset().then(() => {
  create().then(() => {
    populate();
  });
});
