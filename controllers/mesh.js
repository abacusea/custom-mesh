const { exec } = require("child_process");

exports.read = (req, res) => {
  exec("node ../node_modules/meshcentral/meshctrl serverinfo  --loginuser Jaas21 --loginpass Jaas@Mesh", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return res.json(error.message);
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return res.json(stderr);
    }
    console.log(`stdout: ${stdout}`);
    return res.json(stdout)
  });
};
