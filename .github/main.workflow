workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test", "Build Site"]
}

action "Install" {
  uses = "ianwalter/puppeteer@v2.0.0"
  runs = "yarn"
}

action "Lint" {
  uses = "ianwalter/puppeteer@v2.0.0"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Test" {
  uses = "ianwalter/puppeteer@v2.0.0"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}

action "Build Site" {
  uses = "ianwalter/puppeteer@v2.0.0"
  needs = ["Install"]
  runs = "yarn"
  args = "build:site"
}
