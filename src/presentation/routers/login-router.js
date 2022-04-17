const HttpResponse = require('../helpers/httpResponse')

class loginRouter {
    route (httpRequest) {
        if (!httpRequest || !httpRequest.body) {
            return HttpResponse.serverError()
        }
        const { email, password } = httpRequest.body
        if (!email) {
            return HttpResponse.badRequest('email')
        }
        if (!password ) {
            return HttpResponse.badRequest('password')
        }
    }
}

module.exports = loginRouter