- node modules
  it contains all the dependencies for packages used in the project
- package-lock.json
- order of the routes matters a lot

- Advance routing techniques
  - ? makes the preceding character optional
    - ex: colou?r matches both color and colour
    - ex: ab?c matches ac and abc
  - - matches anything after the preceding character
    * ex: ab\*c matches abc, abbc, abanythingc
  - - matches one or more of the preceding character
    * ex: ab+c matches abc, abbc, abbbbc but not ac
  - () groups characters
    - ex: ab(cde)+f matches abcef, abcdef, abcdedef but not abef
  - /regex/ matches the regex
    - ex: /a+/ matches a, aa, aaa but not b, /.\*fly$/ matches butterfly, dragonfly but not butterflyman

-connect to database before starting the server

- JSON vs JavaScript
  - JSON is a data format, JavaScript is a programming language
  - JSON is a subset of JavaScript
  - JSON keys must be double quoted strings, JavaScript keys can be unquoted if they are valid identifiers
  - JSON values can be strings, numbers, objects, arrays, true, false, or null. JavaScript values can be any valid expression, including functions and undefined
  - JSON does not support comments, JavaScript supports single-line (//) and multi-line (/\* \*/) comments
  - JSON is used for data interchange between systems, JavaScript is used for web development and server-side programming
- never blindly trust request data, always validate it
- validate data in signup api
- create a password hash and save the user with hast password
-
