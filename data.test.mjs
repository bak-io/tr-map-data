import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const file = new URL('./data/tr-cities-districts.json', import.meta.url);
const { cities } = JSON.parse(await readFile(file, 'utf8'));

test('81 benzersiz il ve 1-81 ID aralığı', () => {
  assert.equal(cities.length, 81);
  assert.deepEqual(cities.map(({ id }) => id).sort((a, b) => a - b), Array.from({ length: 81 }, (_, i) => i + 1));
  assert.equal(new Set(cities.map(({ name }) => name)).size, 81);
});

test('ilçe alanları dolu ve aynı il içinde tekrarsız', () => {
  for (const city of cities) {
    assert.equal(typeof city.name, 'string');
    assert.ok(city.name.trim().length > 0);
    assert.ok(Array.isArray(city.districts));
    assert.ok(city.districts.length > 0);
    assert.ok(city.districts.every((district) => typeof district === 'string' && district.trim()));
    assert.equal(new Set(city.districts).size, city.districts.length, `${city.name}: mükerrer ilçe`);
  }
});
