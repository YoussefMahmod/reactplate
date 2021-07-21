export default function parseUrlString(str) {
  const kebabize = str.replace(
    /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
    (match) => "-" + match.toLowerCase()
  );

  const fixSlash =
    str[0] === str[0].toUpperCase()
      ? kebabize.substring(1).split("/-").join("/")
      : kebabize;

  const hasParam = fixSlash.match(/\[(.*?)\]/);

  if (hasParam) {
    const regex = /\[([^\][]*)]/g;
    let params = [],
      m;
    while ((m = regex.exec(fixSlash))) {
      params.push(`:${m[1]}`);
    }
    const urlWithoutParam = fixSlash.replace(/\[.*?\]/g, "");

    const finalUrl = `${urlWithoutParam}${params.join("/")}`.replace(
      /\/\//g,
      "/"
    );

    return finalUrl;
  }

  return fixSlash;
}
