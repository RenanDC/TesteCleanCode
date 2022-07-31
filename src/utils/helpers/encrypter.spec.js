const bcrypt = require('bcrypt') 
class Encrypter {
async compare(value, hash) {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
}
}
 
describe('Encrypter', () => {
    test('Shoul return true if bcrypt returns true', async () => {
        const sut = new Encrypter()
        const isValid = await sut.compare('any_password', 'hash_password')
        expect(isValid).toBe(true)
    })

    test('Shoul return false if bcrypt returns false', async () => {
        const sut = new Encrypter()
        bcrypt.isValid = false
        const isValid = await sut.compare('any_password', 'hash_password')
        expect(isValid).toBe(false)
    })

    test('Shoul call bcrypt with correct values', async () => {
        const sut = new Encrypter()
        const isValid = await sut.compare('any_password', 'hash_password')
        expect(bcrypt.value).toBe('any_password')
        expect(bcrypt.hash).toBe('hash_password')
    })
})