require.config({
  baseUrl: ".",
  paths: {
    foo: "basic/js/foo",
    bar: "basic/js/bar",
    jquery: "basic/jquery"
  },
  name: "js/main",
  out: "../build/require-build.js"
});