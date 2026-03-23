const fs = require('fs');
const content = fs.readFileSync('src/data/recipes.ts', 'utf8');

// A forma mais fácil de extrair é capturar o conteúdo entre o colchete de abertura e fechamento
const start = content.indexOf('export const recipes: Recipe[] = [') + 'export const recipes: Recipe[] = ['.length - 1;
const end = content.lastIndexOf('];') + 1;

let arrayContent = content.substring(start, end);

// Converte de JS para JSON (removendo as propriedades não aspas)
// Este é um passo complexo, então vamos apenas salvar como um arquivo JS temporário que podemos dar require
const jsContent = `const recipes = ${arrayContent}; module.exports = recipes;`;
fs.writeFileSync('temp_recipes.cjs', jsContent);
console.log('Extraído com sucesso para temp_recipes.cjs');
