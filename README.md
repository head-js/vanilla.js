vanilla.js
==

1. jquery

2. forge

3. dispatcher


CHANGELOG
==

v0.2.0
--

*BREAKING CHANGE:* fetch/$post `{ code, message, k: v }` -> `{ code, message, k: v, headers }`. It does not follow the `{ code, message, data: { k: v }, headers }` of [head-http](https://github.com/pro-web-ng/head-http). Serious users should change to [head-http](https://github.com/pro-web-ng/head-http) while `vanilla.js/fetch` left for simple cases.

v0.2.2
--

*BREAKING CHANGE:* `forge/rsa` -> `forge/rsa/encrypt`, `forge/des` -> `forge/tdes/encrypt`
