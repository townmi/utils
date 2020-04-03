import {
  isTrainNumber,
  isHttpsWithPort,
  isIMEI,
  isWebUrl,
  isCrediteCode,
} from '../../src/base/check';

test('G7025 is Train Number', () => {
  const origin = 'G7025';
  const result = isTrainNumber(origin);
  expect(result).toBe(true);
});

test('G7208 is Train Number', () => {
  const origin = 'G7208';
  const result = isTrainNumber('G7208');
  expect(result).toBe(true);
});

test('GC025 is not Train Number', () => {
  const origin = 'GC025';
  const result = isTrainNumber(origin);
  expect(result).toBe(false);
});

test('https://127.0.0.1:8080/ is isHttps With Port url', () => {
  const origin = 'https://127.0.0.1:8080/';
  const result = isHttpsWithPort(origin);
  expect(result).toBe(true);
});

test('http://www.baidu.com/apis/?name=xx#d=x&c=1 not Https With Port url', () => {
  const origin = 'http://www.baidu.com/apis/?name=xx#d=x&c=1';
  const result = isHttpsWithPort(origin);
  expect(result).toBe(false);
});


test('990000862471854 is IMEI', () => {
  const origin = '990000862471854';
  const result = isIMEI(origin);
  expect(result).toBe(true);
});

test('15999999999 is not IMEI', () => {
  const origin = '15999999999';
  const result = isIMEI(origin);
  expect(result).toBe(false);
});

test('https://www.baidu.com/apis/?name=xx#d=x&c=1 is website url', () => {
  const origin = 'https://www.baidu.com/apis/?name=xx#d=x&c=1';
  const result = isWebUrl(origin);
  expect(result).toBe(true);
});

test('http://www.baidu.com/apis/?name=xx#d=x&c=1 is website url', () => {
  const origin = 'http://www.baidu.com/apis/?name=xx#d=x&c=1';
  const result = isWebUrl(origin);
  expect(result).toBe(true);
});

test('91350100M000100Y43 is china credite code', () => {
  const origin = '91350100M000100Y43';
  const result = isCrediteCode(origin);
  expect(result).toBe(true)
})

test('9999999999999999 is not china credite code', () => {
  const origin = '9999999999999999';
  const result = isCrediteCode(origin);
  expect(result).toBe(false)
})