import exp from 'constants';
import { hasAnyRoles } from 'util/auth';
import * as TokenModule from 'util/token';
describe('hasAnyRoles tests', () => {
  test('should return true when empty list', () => {
    //ACT
    const result = hasAnyRoles([]);

    //ASSERT
    expect(result).toEqual(true);
  });

  test('should return true when user has given role', () => {
    //ARRANGE
    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      user_name: '',
      authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR'],
    });

    //ACT
    const result = hasAnyRoles(['ROLE_ADMIN']);

    //ASSERT
    expect(result).toEqual(true);
  });

  test('should return false when user does not have given role', () => {
    //ARRANGE
    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      user_name: '',
      authorities: ['ROLE_OPERATOR'],
    });

    //ACT
    const result = hasAnyRoles(['ROLE_ADMIN']);

    //ASSERT
    expect(result).toEqual(false);
  });
});
