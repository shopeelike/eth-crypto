import {
    pubToAddress,
    toChecksumAddress,
    toBuffer
} from 'ethereumjs-util';
import {
    hexToUnit8Array,
    uint8ArrayToHex,
    addLeading0x
} from './util';

export function compress(startsWith04) {
}

export function decompress(startsWith02Or03) {
}

/**
 * generates the ethereum-address of the publicKey
 * We create the checksum-address which is case-sensitive
 * @returns {string} address
 */
export function toAddress(publicKey) {

    // normalize key
    publicKey = decompress(publicKey);

    const addressBuffer = pubToAddress(toBuffer(addLeading0x(publicKey)));
    const checkSumAdress = toChecksumAddress(addLeading0x(addressBuffer.toString('hex')));
    return checkSumAdress;
}
