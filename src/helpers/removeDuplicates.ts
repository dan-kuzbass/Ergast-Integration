export function removeDuplicateFromArray(array: any[], idKey = 'id'): any[] {
  const uniqueMap = new Map<string, any>();

  array.forEach(arrayItem => {
    if (!uniqueMap.has(arrayItem[idKey])) {
      uniqueMap.set(arrayItem[idKey], arrayItem);
    }
  });

  return Array.from(uniqueMap.values());
}
