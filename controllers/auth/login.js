const bcrypt = require("bcryptjs");

const { RequestError } = require("../../helpers");

const { User } = require("../../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password is wrong");
  }
  const token = "323tgshd.sdgqe3tyF.fdhsrrg";
  res.json({
    token,
  });
};

module.exports = login;
