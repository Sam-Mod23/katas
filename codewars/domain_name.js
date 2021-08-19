function domainName(url) {
  const domainName = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
  return domainName;

  //   *** lengthy solution ***

  //   if (!url.length) return '';
  //   let urlCopy = url;
  //   const schemes = ['http://', 'www.', 'https://'];
  //   for (let i = 0; i < schemes.length; i++) {
  //     urlCopy = urlCopy.replace(schemes[i], '');
  //   }
  //   const topLevel = urlCopy.match(/(\..*)$/);
  //   const domName = urlCopy.slice(0, topLevel.index);
  //   return domName;
}

module.exports = domainName;

// starts = [http://, www., https://]
