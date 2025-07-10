import { Controller, Get, Post, Body, Query, HttpCode } from '@nestjs/common';
import { MathService } from './math.service';

export class CalculationDto {
  a: number;
  b: number;
}

export class AdvancedCalculationDto {
  numbers: number[];
}

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Get('add')
  add(@Query('a') a: string, @Query('b') b: string): { result: number; operation: string } {
    return this.mathService.add(parseFloat(a), parseFloat(b));
  }

  @Get('subtract')
  subtract(@Query('a') a: string, @Query('b') b: string): { result: number; operation: string } {
    return this.mathService.subtract(parseFloat(a), parseFloat(b));
  }

  @Get('multiply')
  multiply(@Query('a') a: string, @Query('b') b: string): { result: number; operation: string } {
    return this.mathService.multiply(parseFloat(a), parseFloat(b));
  }

  @Get('divide')
  divide(@Query('a') a: string, @Query('b') b: string): { result: number; operation: string } {
    return this.mathService.divide(parseFloat(a), parseFloat(b));
  }

  @Get('power')
  power(@Query('base') base: string, @Query('exponent') exponent: string): { result: number; operation: string } {
    return this.mathService.power(parseFloat(base), parseFloat(exponent));
  }

  @Get('sqrt')
  sqrt(@Query('number') number: string): { result: number; operation: string } {
    return this.mathService.sqrt(parseFloat(number));
  }

  @Post('calculate')
  @HttpCode(200)
  calculate(@Body() calculation: CalculationDto): { result: number; operation: string } {
    return this.mathService.add(calculation.a, calculation.b);
  }

  @Post('advanced/mean')
  @HttpCode(200)
  calculateMean(@Body() data: AdvancedCalculationDto): { result: number; operation: string } {
    return this.mathService.calculateMean(data.numbers);
  }

  @Post('advanced/median')
  @HttpCode(200)
  calculateMedian(@Body() data: AdvancedCalculationDto): { result: number; operation: string } {
    return this.mathService.calculateMedian(data.numbers);
  }

  @Get('factorial')
  factorial(@Query('number') number: string): { result: number; operation: string } {
    return this.mathService.factorial(parseInt(number));
  }

  @Get('fibonacci')
  fibonacci(@Query('n') n: string): { result: number[]; operation: string } {
    return this.mathService.fibonacci(parseInt(n));
  }
}