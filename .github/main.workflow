workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test", "Build Site"]
}

action "Install" {
  uses = "ianwalter/puppeteer@master"
  runs = "yarn"
}

action "Lint" {
  uses = "ianwalter/puppeteer@master"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Test" {
  uses = "ianwalter/puppeteer@master"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}

action "Build Site" {
  uses = "ianwalter/puppeteer@master"
  needs = ["Install"]
  runs = "yarn"
  args = "build:site"
}
