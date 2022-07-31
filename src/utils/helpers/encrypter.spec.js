 class Encrypter {
    async compare(password, hashPassword) {
        return true
    }
 }
 
 describe('Encrypter', () => {
    test('Shoul return true if bcrypt returns true', async () => {
        const sut = new Encrypter()
        const isValid = await sut.compare('any_password', 'dash_password')
        expect(isValid).toBe(true)
    })
 })