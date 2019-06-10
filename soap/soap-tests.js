// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by soap.js.
import { name as packageName } from "meteor/meridian:soap";

// Write your tests here!
// Here is an example.
Tinytest.add('soap - example', function (test) {
  test.equal(packageName, "soap");
});
