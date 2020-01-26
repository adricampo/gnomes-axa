require('dotenv').config()
const { expect } = require('chai')
const { retrieveGnome } = require('../index')

describe('logic - retrieve gnome',  () => {

    it('should fail if the id of the item is not found', async () => {
        const id = '423468'
        try {
            await retrieveGnome(id)

        } catch (error) {
            expect(error.message).to.equal('Gnome info not found')
        }

    })

})