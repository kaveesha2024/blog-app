const userAccount = (req, res) => {
  if (req.user != null) {
    res.json(req.user.email);
  } else {
    res.status(404).json({
      message: "Sign in Required",
    });
  }
};
export default userAccount;
