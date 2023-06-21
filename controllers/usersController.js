let User = require("../models/User");


//user registration

const addUser = async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const loc = req.body.loc;
  const password = req.body.password;
  const email = req.body.email;
  const mobile = Number(req.body.mobile);
  const gender = req.body.gender;

  const newUser = new User({
    fname,
    lname,
    password,
    email,
    mobile,
    gender,
    loc,
  });

  await newUser
    .save()
    .then(() => {
      res.json("user added");
    })
    .catch((error) => {
      console.log(error);
    });
};


//user login
const userLogin = async (req, res) => {
  const { password, email } = req.body;

  try {
    const userData = await User.findOne({ email });
    if (!userData) return res.status(404).json({ message: "not valid user" });
    {
      userData.password == password
        ? res.status(200).send({ message: "login Sucess", data: userData })
        : res.status(400).json({ message: "invalid password" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addUser,
  userLogin,
};
