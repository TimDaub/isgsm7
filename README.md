# isGSM7

> Check if a string conforms/validates to GSM-7bit.

## Installation

```bash
$ npm i --save isgsm7
```

## Usage

```js
const isGSM7 = require("isGSM7");

console.log(isGSM7("🔥"));
// false

console.log(isGSM7("It was a teenage wedding and the old folks wished them well"));
// true
```

## Changelog

## 0.0.2

- Fixed case of installation instruction
- Fixed `main` direction in `package.json`

## 0.0.1

- Initial release

## References

- https://frightanic.com/software-development/regex-for-gsm-03-38-7bit-character-set/
- https://en.wikipedia.org/w/index.php?title=GSM_03.38&oldid=972147851#GSM_7-bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_/_GSM_03.38

## Copyright notice

© 2020, Tim Daubenschütz. All rights reserved.

## License

GPL v3.0 (see "LICENSE" file)
