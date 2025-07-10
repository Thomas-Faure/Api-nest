import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class MathService {
  add(a: number, b: number): { result: number; operation: string } {
    if (isNaN(a) || isNaN(b)) {
      throw new BadRequestException('Les paramètres doivent être des nombres valides');
    }
    return {
      result: a + b,
      operation: `${a} + ${b}`
    };
  }

  subtract(a: number, b: number): { result: number; operation: string } {
    if (isNaN(a) || isNaN(b)) {
      throw new BadRequestException('Les paramètres doivent être des nombres valides');
    }
    return {
      result: a - b,
      operation: `${a} - ${b}`
    };
  }

  multiply(a: number, b: number): { result: number; operation: string } {
    if (isNaN(a) || isNaN(b)) {
      throw new BadRequestException('Les paramètres doivent être des nombres valides');
    }
    return {
      result: a * b,
      operation: `${a} × ${b}`
    };
  }

  divide(a: number, b: number): { result: number; operation: string } {
    if (isNaN(a) || isNaN(b)) {
      throw new BadRequestException('Les paramètres doivent être des nombres valides');
    }
    if (b === 0) {
      throw new BadRequestException('Division par zéro impossible');
    }
    return {
      result: a / b,
      operation: `${a} ÷ ${b}`
    };
  }

  power(base: number, exponent: number): { result: number; operation: string } {
    if (isNaN(base) || isNaN(exponent)) {
      throw new BadRequestException('Les paramètres doivent être des nombres valides');
    }
    return {
      result: Math.pow(base, exponent),
      operation: `${base}^${exponent}`
    };
  }

  sqrt(number: number): { result: number; operation: string } {
    if (isNaN(number)) {
      throw new BadRequestException('Le paramètre doit être un nombre valide');
    }
    if (number < 0) {
      throw new BadRequestException('Impossible de calculer la racine carrée d\'un nombre négatif');
    }
    return {
      result: Math.sqrt(number),
      operation: `√${number}`
    };
  }

  calculateMean(numbers: number[]): { result: number; operation: string } {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new BadRequestException('Un tableau de nombres non vide est requis');
    }
    if (numbers.some(num => isNaN(num))) {
      throw new BadRequestException('Tous les éléments doivent être des nombres valides');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;
    return {
      result: mean,
      operation: `Moyenne de [${numbers.join(', ')}]`
    };
  }

  calculateMedian(numbers: number[]): { result: number; operation: string } {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new BadRequestException('Un tableau de nombres non vide est requis');
    }
    if (numbers.some(num => isNaN(num))) {
      throw new BadRequestException('Tous les éléments doivent être des nombres valides');
    }
    
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    
    let median: number;
    if (sorted.length % 2 === 0) {
      median = (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      median = sorted[middle];
    }
    
    return {
      result: median,
      operation: `Médiane de [${numbers.join(', ')}]`
    };
  }

  factorial(n: number): { result: number; operation: string } {
    if (isNaN(n) || !Number.isInteger(n) || n < 0) {
      throw new BadRequestException('Le paramètre doit être un entier positif');
    }
    if (n > 170) {
      throw new BadRequestException('Nombre trop grand pour le calcul de factorielle');
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return {
      result,
      operation: `${n}!`
    };
  }

  fibonacci(n: number): { result: number[]; operation: string } {
    if (isNaN(n) || !Number.isInteger(n) || n < 0) {
      throw new BadRequestException('Le paramètre doit être un entier positif');
    }
    if (n > 100) {
      throw new BadRequestException('Nombre trop grand pour la suite de Fibonacci');
    }
    
    if (n === 0) return { result: [], operation: 'Fibonacci(0)' };
    if (n === 1) return { result: [0], operation: 'Fibonacci(1)' };
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return {
      result: sequence,
      operation: `Fibonacci(${n})`
    };
  }
}