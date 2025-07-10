import { Test, TestingModule } from '@nestjs/testing';
import { MathController } from './math.controller';
import { MathService } from './math.service';

describe('MathController', () => {
  let controller: MathController;
  let service: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathController],
      providers: [MathService],
    }).compile();

    controller = module.get<MathController>(MathController);
    service = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('add', () => {
    it('should add two numbers', () => {
      const result = controller.add('5', '3');
      expect(result).toEqual({
        result: 8,
        operation: '5 + 3'
      });
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      const result = controller.subtract('10', '4');
      expect(result).toEqual({
        result: 6,
        operation: '10 - 4'
      });
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      const result = controller.multiply('6', '7');
      expect(result).toEqual({
        result: 42,
        operation: '6 × 7'
      });
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      const result = controller.divide('15', '3');
      expect(result).toEqual({
        result: 5,
        operation: '15 ÷ 3'
      });
    });
  });

  describe('power', () => {
    it('should calculate power', () => {
      const result = controller.power('2', '3');
      expect(result).toEqual({
        result: 8,
        operation: '2^3'
      });
    });
  });

  describe('sqrt', () => {
    it('should calculate square root', () => {
      const result = controller.sqrt('9');
      expect(result).toEqual({
        result: 3,
        operation: '√9'
      });
    });
  });

  describe('factorial', () => {
    it('should calculate factorial', () => {
      const result = controller.factorial('5');
      expect(result).toEqual({
        result: 120,
        operation: '5!'
      });
    });
  });

  describe('fibonacci', () => {
    it('should generate fibonacci sequence', () => {
      const result = controller.fibonacci('7');
      expect(result).toEqual({
        result: [0, 1, 1, 2, 3, 5, 8],
        operation: 'Fibonacci(7)'
      });
    });
  });
});