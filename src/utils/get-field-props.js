const getFieldProps = (name, { model = {}, onChange } = {}) => {
  return { name, value: model[name], onChange };
};

export default getFieldProps;
