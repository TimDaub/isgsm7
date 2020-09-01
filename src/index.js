// References:
//  - https://frightanic.com/software-development/regex-for-gsm-03-38-7bit-character-set/
//  - https://en.wikipedia.org/w/index.php?title=GSM_03.38&oldid=972147851#GSM_7-bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_/_GSM_03.38
const alphabet = new RegExp("^[A-Za-z0-9 \\r\\n@£$¥èéùìòÇØøÅå\u0394_\u03A6\u0393\u039B\u03A9\u03A0\u03A8\u03A3\u0398\u039EÆæßÉ!\"#$%&amp;'()*+,\\-./:;&lt;=&gt;?¡ÄÖÑÜ§¿äöñüà^{}\\\\\\[~\\]|\u20AC]*$");

function isGSM7(s) {
  return alphabet.test(s);
}

module.exports = isGSM7;
