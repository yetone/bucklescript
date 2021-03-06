// GENERATED CODE BY BUCKLESCRIPT VERSION 0.7.1 , PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("../pervasives");
var Mt         = require("./mt");
var Block      = require("../block");

var suites_000 = /* tuple */[
  "string_of_float_1",
  function () {
    return /* Eq */Block.__(0, [
              "10.",
              Pervasives.string_of_float(10)
            ]);
  }
];

var suites_001 = /* :: */[
  /* tuple */[
    "string_of_int",
    function () {
      return /* Eq */Block.__(0, [
                "10",
                "" + 10
              ]);
    }
  ],
  /* :: */[
    /* tuple */[
      "valid_float_lexem",
      function () {
        return /* Eq */Block.__(0, [
                  "10.",
                  Pervasives.valid_float_lexem("10")
                ]);
      }
    ],
    /* [] */0
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("of_string_test.ml", suites);

exports.suites = suites;
/*  Not a pure module */
