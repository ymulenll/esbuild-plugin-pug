import compiled from "./index.pug";
import pug from "pug";

console.log(
  compiled({
    title: "Hello, world!",
    message: "This is a test.",
  })
);
