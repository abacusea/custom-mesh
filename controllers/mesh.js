const { exec } = require("child_process");

exports.serverInfo = (req, res) => {
  exec(
    "node ../node_modules/meshcentral/meshctrl serverinfo  --loginuser Jaas21 --loginpass Jaas@Mesh",
    (error, stdout, stderr) => {
      if (error) {
        var result = { error: error.message };
        return res.json(result);
      }
      if (stderr) {
        var result = { error: stderr };
        return res.json(result);
      }
      var result = { 'data': stdout.split('\n').replace(/(\r\n|\n|\r)/gm, "")};
      return res.json(result);
    }
  );
};

exports.userInfo = (req, res) => {
  exec(
    "node ../node_modules/meshcentral/meshctrl userinfo  --loginuser Jaas21 --loginpass Jaas@Mesh",
    (error, stdout, stderr) => {
      if (error) {
        var result = { error: error.message };
        return res.json(result);
      }
      if (stderr) {
        var result = { error: stderr };
        return res.json(result);
      }
      var result = { 'data': stdout.split('\n').replace(/(\r\n|\n|\r)/gm, "")};
      return res.json(result);
    }
  );
};

exports.listUsers = (req, res) => {
  exec(
    "node ../node_modules/meshcentral/meshctrl listusers  --loginuser Jaas21 --loginpass Jaas@Mesh",
    (error, stdout, stderr) => {
      if (error) {
        var result = { error: error.message };
        return res.json(result);
      }
      if (stderr) {
        var result = { error: stderr };
        return res.json(result);
      }
      var result = { 'data': stdout.split('\n').replace(/(\r\n|\n|\r)/gm, "")};
      return res.json(result);
    }
  );
};