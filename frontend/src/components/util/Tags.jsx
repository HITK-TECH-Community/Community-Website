export const formatTag = (tag, format) => {
    switch (format) {
      case "CamelCase":
        return tag.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
      case "Underscores":
        return tag.replace(/\s+/g, '_').toLowerCase();
      case "Hyphens":
        return tag.replace(/\s+/g, '-').toLowerCase();
      case "Concatenation":
        return tag.replace(/\s+/g, '').toLowerCase();
      default:
        return tag;
    }
  };