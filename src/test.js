const funcParams = ([...params]) => {
  let result = 0;
  params.forEach((element) => {
    result += element;
  });
  return result;
};

funcParams(1, 2, 3);
