import User from "../models/user.js";

/* GET ALL USERS (ADMIN) */
export const getAllUsers = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const users = await User.find().skip(skip).limit(limit);
  const total = await User.countDocuments();

  res.json({
    users,
    total,
    page,
    pages: Math.ceil(total / limit)
  });
};

/* ACTIVATE USER */
export const activateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "active" });
  res.json({ message: "User activated" });
};

/* DEACTIVATE USER */
export const deactivateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "inactive" });
  res.json({ message: "User deactivated" });
};
