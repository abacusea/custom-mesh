const { exec } = require("child_process");

exports.read = (req, res) => {
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
      var result = { data: JSON.parse(JSON.stringify(stdout))};
      return JSON.parse(res.json(result));
    }
  );
};
