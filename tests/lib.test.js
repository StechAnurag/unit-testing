const lib = require('../lib');

describe('absolute', () => {
  it('should return a +ve number if input is +ve', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('should return a +ve number if input is -ve', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it('should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return greeting message', () => {
    const result = lib.greet('Anurag');
    //expect(result).toBe('Welcome Anurag'); // too specific
    expect(result).toMatch(/Anurag/);
    //expect(result).toContain('Anurag');
  });
});

describe('getCurrencies', () => {
  it('should return supported currenncies', () => {
    const result = lib.getCurrencies();

    // Too General
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('INR');
    expect(result[2]).toBe('EUR');
    expect(result.length).toEqual(3);

    // Proper - balanced test
    expect(result).toContain('USD');
    expect(result).toContain('INR');
    expect(result).toContain('EUR');

    // Ideal way
    expect(result).toEqual(expect.arrayContaining(['USD', 'EUR', 'INR']));
  });
});

describe('getProduct', () => {
  it('should return the product with given id', () => {
    const result = lib.getProduct(1);
    // expect(result).toBe({ id: 1, price: 10 }); // Fails - becoz .toBe() checks for same reference in memory

    //expect(result).toEqual({ id: 1, price: 10 }); // checks object equality

    expect(result).toMatchObject({ id: 1, price: 10 }); // checks if results contains the expected kies:values

    expect(result).toHaveProperty('name', 'soap'); // check for individual property
  });
});
