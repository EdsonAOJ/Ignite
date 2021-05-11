import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvaliableCarsUseCase } from './ListAvaliableCarsUseCase';

let listAvaliableCarsUseCase: ListAvaliableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvaliableCarsUseCase = new ListAvaliableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('should be able to list all avaliable cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description',
      brand: 'car_brand',
      category_id: 'category_id',
      daily_rate: 110,
      fine_amount: 40,
      license_plate: 'DEF-1234',
    });

    const cars = await listAvaliableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaliable cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car description',
      brand: 'car_brandTest',
      category_id: 'category_id',
      daily_rate: 110,
      fine_amount: 40,
      license_plate: 'DEF-1234',
    });

    const cars = await listAvaliableCarsUseCase.execute({
      brand: 'car_brandTest',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaliable cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car description',
      brand: 'car_brandTest',
      category_id: 'category_id',
      daily_rate: 110,
      fine_amount: 40,
      license_plate: 'DEF-12345',
    });

    const cars = await listAvaliableCarsUseCase.execute({
      name: 'Car3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaliable cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car description',
      brand: 'car_brandTest',
      category_id: '12345',
      daily_rate: 110,
      fine_amount: 40,
      license_plate: 'DEF-12345',
    });

    const cars = await listAvaliableCarsUseCase.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
