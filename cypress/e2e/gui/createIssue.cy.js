import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }


describe('Criar um Issue no projeto', options,  () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createProject(issue.project)
    })

    it.only('Issue criado com sucesso', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details').should('contain', issue.title).and('contain', issue.description)
    })
})