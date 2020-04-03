import { getUrlParams, getUrlParam, replaceParamWith } from '../../src/browser/url';

test('getUrlParams from ?a=1&b=3', () => {
  const origin = '?a=1&b=3';
  let result = getUrlParams('a', origin);
  expect(result).toBe('1');
  result = getUrlParams('b', origin);
  expect(result).toBe('3');
});
test('getUrlParam from ?a=1&b=3', () => {
  const origin = '?a=1&b=3';
  let result = getUrlParam('a', origin);
  expect(result).toBe('1');
  result = getUrlParam('b', origin);
  expect(result).toBe('3');
});

test('replace param success', () => {
  const origin = 'http://www.a.net?name=carr';
  let result = replaceParamWith('name', 'harry', origin);
  expect(result).toBe('http://www.a.net?name=harry')
})
test('replace param success', () => {
  const origin = 'http://www.a.net?name=carr&test=1111';
  let result = replaceParamWith('test', 'harry', origin);
  expect(result).toBe('http://www.a.net?name=carr&test=harry')
})