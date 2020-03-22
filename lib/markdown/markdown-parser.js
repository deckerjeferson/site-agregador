import matter from "gray-matter";

export const parseMarkdown = (slug, markdownContent, fields) => {
  const {data, content, excerpt} = matter(markdownContent, {excerpt_separator: '<!-- resumo -->'});
  const result = {};

  fields.forEach(field => {
    const portugueseFieldName = translateFrontMatter(field);

    if (field === 'slug') {
      result[field] = slug;
    }

    if (field === 'content') {
      result[field] = content;
    }

    if (field === 'excerpt') {
      result[field] = excerpt;
    }

    if (data[portugueseFieldName]) {
      result[field] = data[portugueseFieldName];
    }
  });

  return result;
};

const translateFrontMatter = field => {
  if (field === 'title') {
    return "titulo";
  }
  if (field === 'plaintiff') {
    return "demandante";
  }
  if (field === 'modality') {
    return "modalidade";
  }
  if (field === 'quantity') {
    return "quantidade";
  }
  if (field === 'date') {
    return "data";
  }
  if (field === 'state') {
    return "estado";
  }
  return field;
};
