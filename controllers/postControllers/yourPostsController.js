const yourPostsController = (req, res) => {
  const data = req.user;
  if (data != null) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ msg: "User Not Found" });
  }
};

export default yourPostsController;
