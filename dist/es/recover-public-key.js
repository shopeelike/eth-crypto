import { removeLeading0x, hexToUnit8Array, uint8ArrayToHex } from './util';

/**
 * returns the publicKey for the privateKey with which the messageHash was signed
 * @param  {string} signature
 * @param  {string} hash
 * @return {string} publicKey
 */
export function recoverPublicKey(signature, hash) {
}