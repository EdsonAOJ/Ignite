import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { AppError } from '@shared/errors/appError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name car',
      description: 'description of  Car',
      license_plate: 'ABC-1234',
      fine_amount: 60,
      daily_rate: 100,
      category_id: 'category',
      brand: 'Brand',
    });
    expect(car).toHaveProperty('id');
  });

  it('should not be able to  create a a car with exists license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'car2',
        description: 'description of  Car',
        license_plate: 'ABC-1234',
        fine_amount: 60,
        daily_rate: 100,
        category_id: 'category',
        brand: 'Brand',
      });
      await createCarUseCase.execute({
        name: 'car2',
        description: 'description of  Car',
        license_plate: 'ABC-1234',
        fine_amount: 60,
        daily_rate: 100,
        category_id: 'category',
        brand: 'Brand',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to  create a a car with avaliable true bue', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Avaliable',
      description: 'description of  Car',
      license_plate: 'ABCD-1234',
      fine_amount: 60,
      daily_rate: 100,
      category_id: 'category',
      brand: 'Brand',
    });
    expect(car.avaliable).toBe(true);
  });
});
