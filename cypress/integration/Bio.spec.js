/// <reference types="cypress" />
import Bio from '../../src/components/Bio.svelte'
import mount from 'cypress-svelte-unit-test'

describe('Bio component render', () => {
    it('containts right name', () => {

        mount(Bio, {
            props: {
                author: 'chrome',
            }
        })
        
        cy.get('strong').contains('Ivan Khromov')
    })
})