# Türkiye İl ve İlçe Verileri

Türkiye'nin illerini, il kimliklerini (plaka kodları) ve ilçelerini içeren, bağımlılıksız JSON veri kümesi.


## İçerik

- 81 il
- 973 ilçe kaydı
- UTF-8 JSON formatı
- İl başına `id`, `name` ve `districts` alanları

Dosya: [`data/tr-cities-districts.json`](data/tr-cities-districts.json)

## Veri biçimi

```json
{
  "cities": [
    {
      "id": 1,
      "name": "ADANA",
      "districts": ["Aladağ", "Ceyhan", "Çukurova"]
    }
  ]
}
```

`id` alanı il plaka koduyla eşleşir. `districts` bir ilçe adları dizisidir. Yukarıdaki örnek kısaltılmıştır.

## JavaScript ile kullanımı

Node.js (ES modules):

```js
import { readFile } from 'node:fs/promises';

const data = JSON.parse(await readFile('./data/tr-cities-districts.json', 'utf8'));
const istanbul = data.cities.find((city) => city.id === 34);
console.log(istanbul.districts);
```

Tarayıcıda bir HTTP sunucusu üzerinden:

```js
const response = await fetch('/data/tr-cities-districts.json');
if (!response.ok) throw new Error('Veri yüklenemedi');
const { cities } = await response.json();
console.log(cities);
```

Çalıştırılabilir Node.js örneği: [`examples/read-data.mjs`](examples/read-data.mjs).

## Doğrulama

Node.js 18+ ile:

```bash
node --test
```

Testler biçimi, il sayısını, ID tekrarlarını ve aynı il içindeki ilçe tekrarlarını denetler. 
## Katkı ve kullanım

Veri hatası fark ederseniz, doğrulanabilir bir kaynakla birlikte issue açabilirsiniz.
