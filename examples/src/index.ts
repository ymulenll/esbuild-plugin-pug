import compiled from "./index.pug";

console.log(
  compiled({
    title: "Hello, world!",
    message: "This is a test.",
  })
);
