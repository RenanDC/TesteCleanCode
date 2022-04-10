class loginRouter {
    route (httpRequest) {
        if (!httpRequest.body.email || !httpRequest.body.password ) {
            return {
                statusCode: 400
            }
        }
    }
}

describe('Login Router', () => {
    test('Shoeld return 400 if no email is provided', () => {
        const sut = new loginRouter()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com'
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})

describe('Login Router', () => {
    test('Shoeld return 400 if no password is provided', () => {
        const sut = new loginRouter()
        const httpRequest = {
            body: {
                password: 'any_password'
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})