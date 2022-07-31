const bcrypt = require('bcrypt')
const { MissingParamError } = require('../errors')
const Encrypter = require("./encrypter")

const makeSut = () => {
    return new Encrypter()
}
 
describe('Encrypter', () => {
    test('Shoul return true if bcrypt returns true', async () => {
        const sut = makeSut()
        const isValid = await sut.compare('any_password', 'hash_password')
        expect(isValid).toBe(true)
    })

    test('Shoul return false if bcrypt returns false', async () => {
        const sut = makeSut()
        bcrypt.isValid = false
        const isValid = await sut.compare('any_password', 'hash_password')
        expect(isValid).toBe(false)
    })

    test('Shoul call bcrypt with correct values', async () => {
        const sut = makeSut()
        await sut.compare('any_password', 'hash_password')
        expect(bcrypt.value).toBe('any_password')
        expect(bcrypt.hash).toBe('hash_password')
    })

    test('Shoul throw if no params are provided', async () => {
        const sut = makeSut()
        expect(sut.compare()).rejects.toThrow(new MissingParamError('value'))
        expect(sut.compare('any_value')).rejects.toThrow(new MissingParamError('hash'))
    })
})