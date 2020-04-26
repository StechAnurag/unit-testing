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
    //expect(result).toBe('Welcome Anurag'); // to specific
    expect(result).toMatch(/Anurag/);
    //expect(result).toContain('Anurag');
  });
});
