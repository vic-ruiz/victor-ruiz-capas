async function registerView(req, res) {
  res.render("register");
}

async function registerFailure(req, res) {
  res.render("registerFailure");
}

export { registerView, registerFailure};
