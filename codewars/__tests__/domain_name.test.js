const domainName = require('../domain_name');

describe('domainName', () => {
  test('should return empty string if input is empty string', () => {
    expect(domainName('')).toEqual('');
  });
  test('should return correct domain for simple URL', () => {
    const url = 'www.cnet.com';
    expect(domainName(url)).toEqual('cnet');
  });
  test('should return correct domain for url with http', () => {
    const url = 'http://www.cnet.com';
    expect(domainName(url)).toEqual('cnet');
  });
  test('should return correct domain for url with https', () => {
    const url = 'https://www.cnet.com';
    expect(domainName(url)).toEqual('cnet');
  });
  test('should return correct domain for url with sub domains', () => {
    const url = 'https://www.cnet.com/subdomain/anothersub';
    expect(domainName(url)).toEqual('cnet');
  });
  test('should return correct domain for url without www.', () => {
    const url = 'https://cnet.com/subdomain/anothersub';
    expect(domainName(url)).toEqual('cnet');
  });
});
