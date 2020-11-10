'use strict';

const numbers = [
  -24,
  -11,
  27,
  29,
  -4,
  -28,
  -21,
  -14,
  3,
  -8,
  24,
  19,
  -25,
  -2,
  -1,
  11,
  32,
  -31,
  5,
];

// 1.  Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
let compareNumber = 0;
const compareNext = () => {
  for (let i = 0; i < numbers.length; i++) {
    if (compareNumber < numbers[i]) {
      console.log(numbers[i]);
    }
    compareNumber = numbers[i];
  }
};

// 2. Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
const showPeaks = () => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
      console.log(numbers[i]);
    }
  }
};

// 3. Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné mean. Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const mean = sum / numbers.length;
console.log(mean);

let sumPow = 0;
for (let i = 0; i < numbers.length; i++) {
  sumPow += Math.pow(numbers[i] - mean, 2);
  //console.log(Math.pow(numbers[i] - mean, 2));
}

// 4. Spočítejte směrodatnou odchylku čísel v poli. To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr druhých mocnin vzdáleností všech čísel od průměru. Rozptyl pak odmocníte pomocí funkce Math.sqrt.
const meanPow = sumPow / numbers.length;
const meanSqrt = Math.sqrt(meanPow);

// 5. Najděte v seznamu největší prvek.
let highest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (highest < numbers[i]) {
    highest = numbers[i];
  }
}
//  NEBO:
const highestNum = Math.max(...numbers);

// 6. Najděte v seznamu největší prvek, který je menší než číslo 16.
const filterSixteen = numbers.filter((num) => num < 16);
const underSixteen = Math.max(...filterSixteen);
//  NEBO:
let highestU16 = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (highestU16 < numbers[i] && numbers[i] < 16) {
    highestU16 = numbers[i];
  }
}

//        ALGORITMY PRO FAJNŠMEKRY
// 1.  Nejdelší rostoucí sekvence čísel
let result = [];
let seq = 1;
let formerSeq = 1;
let longestSeq = 0;
const findSeq = () => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      result.push(numbers[i]);
      if (numbers[i + 1] > numbers[i + 2]) {
        result.push(numbers[i + 1]);
      }
      seq++;
    } else {
      if (seq > formerSeq) {
        console.log('Nalezena sekvence o ' + seq + 'číslech.');
        console.log(result);
      }
      formerSeq = seq;
      result = [];
      seq = 1;
    }
    if (seq > longestSeq) {
      longestSeq = seq;
    }
  }
};

// 2.  Druhé největší číslo
const withoutHighest = numbers.filter((num) => num < Math.max(...numbers));
const secondHighest = Math.max(...withoutHighest);

// 3.  Vypište na výstup délku nejdelší rostoucí nebo klesající sekvence čísel, které v seznamu následují přímo po sobě.
// 4. Najděte nejnižší vrchol a nejvyšší údolí. Údolí je číslo, které je menší než jeho předchůdce i následovník.
