import { faker } from '@faker-js/faker' // geração de dados aleatórios para testes 

describe('create a new project', () =>{
    
    // --------------------------------- Pré-condição
    
    beforeEach(() =>{
        cy.api_deleteProjects()
        cy.login()
    })
    // --------------------------------- Ação
    
    it('successfully - create a new project', () =>{
        const project = {
            name: `project-${faker.datatype.uuid()}`,  // template literals
            description: faker.random.words(5)
        }
        cy.gui_createProject(project)
// --------------------------------- Resultados esperados

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})
 