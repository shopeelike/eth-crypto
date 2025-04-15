"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compress = compress;
exports.decompress = decompress;
exports.toAddress = toAddress;
var _ethereumjsUtil = require("ethereumjs-util");
var _util = require("./util");
function compress(startsWith04) {
}
function decompress(startsWith02Or03) {
}

/**
 * generates the ethereum-address of the publicKey
 * We create the checksum-address which is case-sensitive
 * @returns {string} address
 */
function toAddress(publicKey) {
  // normalize key
  publicKey = decompress(publicKey);
  var addressBuffer = (0, _ethereumjsUtil.pubToAddress)((0, _ethereumjsUtil.toBuffer)((0, _util.addLeading0x)(publicKey)));
  var checkSumAdress = (0, _ethereumjsUtil.toChecksumAddress)((0, _util.addLeading0x)(addressBuffer.toString('hex')));
  return checkSumAdress;
}