class Car {
  constructor(options) {
    this.name = options.name || 'thanh';
    this.door = options.door || 'test';
    this.color = options.color || 'red';
  }
}


class Truck {
  constructor(options) {
    this.state = options.state || 'active';
    this.height = options.height || '2m';
  }
}


class VehicleFactory {
  create(options) {
    switch (options.type) {
      case 'car':
        return new Car(options);
      case 'car':
        return new Truck(options);
      default:
        return new Car(options);
    }
  }
}


const carFactory = new VehicleFactory();
const car = carFactory.create({ type: 'car', name: 'test' })

console.log('===============>', car instanceof Car);