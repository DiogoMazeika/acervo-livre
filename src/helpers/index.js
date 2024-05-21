export const searchToMap = (search) => {
  const infos = {};
  if (typeof search === 'string' && search.length > 0) {
    search
      .substring(1)
      .split('&')
      .forEach((item) => {
        const [nome, info] = item.split('=');
        infos[nome] = info;
      });
  }

  return infos;
};
