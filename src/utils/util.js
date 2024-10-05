export const prepareNestedJSON = (configs) => {
  const childrens = configs.filter((item) => item.parentId !== null);

  configs.forEach((item) => {
    if (!item["children"]) {
      item["children"] = [];
    }

    childrens.forEach((citem) => {
      if (item.id === citem.parentId) {
        item["children"].push(citem);
      }
    });
  });

  console.log(configs[0]);
  return configs[0];
};
