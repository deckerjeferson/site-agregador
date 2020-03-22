import fs from 'fs';
import {join} from 'path';
import {parseMarkdown} from "./markdown/markdown-parser";

const demandDirectory = join(process.cwd(), '_documentos/_demandas');

const demands = () => {
  return fs.readdirSync(demandDirectory);
};

export const getDemandBySlug = (slug, fields = []) => {
  const demandSlug = slug.replace(/\.md$/, '');
  const filePath = join(demandDirectory, `${demandSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return parseMarkdown(demandSlug, fileContent, fields);
};

export const getAllDemands = (fields = []) => {
  return demands()
    .map(slug => getDemandBySlug(slug, fields));
}
