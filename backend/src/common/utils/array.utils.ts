import { GroupedData } from '../interfaces/group.interface';

export const arrangeData = (data: any[]): GroupedData[] => {
  const result = [];

  data.forEach((node) => {
    if (node.parent_id === null) {
      result.push(node);
    }
  });

  let i = 0;
  while (i < result.length) {
    const currentNode = result[i];
    data.forEach((node) => {
      if (node.parent_id === currentNode.id) {
        result.splice(i + 1, 0, node);
      }
    });
    i++;
  }

  return result;
};
