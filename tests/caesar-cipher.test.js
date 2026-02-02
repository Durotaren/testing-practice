import { caesarCipher } from '../src/caesar-cipher';

test('cipheres a word', () => {
  expect(caesarCipher('xyz')).toStrictEqual('abc');
});

test('ciphers a word', () => {
  expect(caesarCipher('HELLO')).toStrictEqual('KHOOR');
});

test('ciphers a word', () => {
  expect(caesarCipher('heLlo')).toStrictEqual('khOor');
});

test('ciphers a word', () => {
  expect(caesarCipher('heLlo12')).toStrictEqual('khOor12');
});

test('ciphers a word', () => {
  expect(caesarCipher('Hello, World!')).toStrictEqual('Khoor, Zruog!');
});
