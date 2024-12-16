const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, 'decrypt');
  }

  process(message, key, mode) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (messageChar >= 'A' && messageChar <= 'Z') {
        const keyChar = key[j % key.length];
        if (mode === 'encrypt') {
          result += String.fromCharCode(
            ((messageChar.charCodeAt(0) + keyChar.charCodeAt(0) - 2 * 65) % 26) + 65
          );
        } else {
          result += String.fromCharCode(
            ((messageChar.charCodeAt(0) - keyChar.charCodeAt(0) + 26) % 26) + 65
          );
        }
        j++;
      } else {
        result += messageChar;
      }
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
