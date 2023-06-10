import { formatPrice } from 'util/formatters';

describe('formatPrice tests', () => {
  test('should formatPrice number pt-BR when given 10.1', () => {
    //ACT
    const result = formatPrice(10.1);

    //ASSERT
    expect(result).toEqual('10,10');
  });

  test(' should formatPrice number pt-BR when given 0', () => {
    //ACT
    const result = formatPrice(0);

    //ASSERT
    expect(result).toEqual('0,00');
  });
});
