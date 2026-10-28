import { readFile } from 'node:fs/promises';

const file = new URL('../data/tr-cities-districts.json', import.meta.url);
const { cities } = JSON.parse(await readFile(file, 'utf8'));

console.log(`İl sayısı: ${cities.length}`);
console.log(`İlçe kaydı: ${cities.reduce((total, city) => total + city.districts.length, 0)}`);
console.log('İstanbul ilçeleri:', cities.find((city) => city.id === 34)?.districts);
