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
