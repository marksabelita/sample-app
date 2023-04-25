export const trim = (data: string): string => {
  return data.trim();
};

export const omit = (obj, [...props]) => {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
};
