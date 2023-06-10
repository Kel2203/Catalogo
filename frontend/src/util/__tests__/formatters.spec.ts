import { formatPrice } from "util/formatters";

test('formatPrice should number pt-BR when given 10.1', () => {
    //ACT
    const result = formatPrice(10.1);

    //ASSERT
    expect(result).toEqual("10,10");
} )