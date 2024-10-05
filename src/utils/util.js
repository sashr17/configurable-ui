// const config = {
//     templateA: {
//       components: [
//         {
//           id: 1,
//           name: "StackLayout",
//           parentId: null,
//         },
//         {
//           id: 2,
//           name: "Card",
//           parentId: 1,
//         },
//         {
//           id: 4,
//           name: "FormField",
//           parentId: 2,
//         },
//         {
//           id: 5,
//           name: "FormFieldLabel",
//           parentId: 4,
//         },
//         {
//           id: 6,
//           name: "Input",
//           parentId: 4,
//         },
//         {
//           id: 7,
//           name: "Card",
//           parentId: 1,
//         },
//         {
//           id: 8,
//           name: "FormField",
//           parentId: 7,
//         },
//         {
//           id: 9,
//           name: "FormFieldLabel",
//           parentId: 8,
//         },
//         {
//           id: 10,
//           name: "Input",
//           parentId: 8,
//         },
//       ],
//     },
//   };
const prepareNestedJSON = (configs) => {
  const childrens = configs.filter((item) => item.parentId !== null);

  configs.forEach((item) => {
    item["children"] = [];
    childrens.forEach((citem) => {
      if (item.id === citem.parentId) {
        item["children"].push(citem);
      }
    });
  });

  return configs[0];
};
