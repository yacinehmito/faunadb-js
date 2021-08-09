const {
  ValidationError,
  FunctionCallError,
  FaunaHTTPError,
  InvalidArgument,
} = require('../src/errors')

const makeError = (statusCode, error) => ({
  statusCode,
  responseContent: { errors: [error] },
})

describe('Error', () => {
  test('ValidationError', () => {
    try {
      FaunaHTTPError.raiseForStatusCode(
        makeError(400, {
          position: ['create_access_provider'],
          code: 'validation failed',
          description: 'document data is not valid.',
          failures: [
            {
              field: ['issuer'],
              code: 'duplicate value',
              description: 'Value is not unique.',
            },
          ],
        })
      )
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError)
      expect(error.position).toEqual(['issuer'])
      expect(error.code).toEqual('duplicate value')
      expect(error.message).toEqual('Value is not unique.')
    }
  })

  test('FunctionCallError', () => {
    try {
      FaunaHTTPError.raiseForStatusCode(
        makeError(400, {
          position: [],
          code: 'call error',
          description: 'Calling the function resulted in an error.',
          cause: [
            {
              position: ['expr'],
              code: 'invalid argument',
              description: 'Illegal division by zero.',
            },
          ],
        })
      )
    } catch (error) {
      expect(error).toBeInstanceOf(FunctionCallError)
      expect(error.position).toEqual(['expr'])
      expect(error.code).toEqual('invalid argument')
      expect(error.message).toEqual('Illegal division by zero.')
    }
  })

  test('InvalidArgument', () => {
    try {
      FaunaHTTPError.raiseForStatusCode(
        makeError(400, {
          position: ['params'],
          code: 'invalid argument',
          description: 'Object expected, String provided.',
        })
      )
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidArgument)
      expect(error.position).toEqual(['params'])
      expect(error.code).toEqual('invalid argument')
      expect(error.message).toEqual('Object expected, String provided.')
    }
  })

  test('InvalidArgument', () => {
    try {
      FaunaHTTPError.raiseForStatusCode(
        makeError(400, {
          position: ['params'],
          code: 'invalid argument',
          description: 'Object expected, String provided.',
        })
      )
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidArgument)
      expect(error.position).toEqual(['params'])
      expect(error.code).toEqual('invalid argument')
      expect(error.message).toEqual('Object expected, String provided.')
    }
  })
})
