export const generateBreadcrumbTitle = (segments: string[], handleId: 'detail' | 'skip' = 'detail') => {
  return segments
    .map((segment) => {
      if (!segment) return null;
      if (isNumeric(segment) || isUUID(segment)) {
        if (handleId === "detail") return "detail";
        if (handleId === "skip") return null;
      }
      return segment;
    })
    .filter(Boolean)
    .join('/');
};

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const isNumeric = (str: string) => !isNaN(Number(str));

export const isUUID = (str: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
