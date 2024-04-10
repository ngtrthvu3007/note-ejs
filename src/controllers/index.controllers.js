exports.homepage = async (req, res) => {
  const locals = {
    title: "Nost capture your ideas swifly and simple",
    description:
      "Nost is a user-friendly note-taking app designed to simplify your note-taking experience. With our intuitive interface, you can quickly jot down thoughts and ideas. Best of all, Nost is completely free to use. Start organizing your thoughts effortlessly today!",
  };

  res.render("index", {
    locals,
  });
};
