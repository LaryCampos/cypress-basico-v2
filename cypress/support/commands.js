// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Larissa')
    cy.get('#lastName').type('Campos')
    cy.get('#email').type('lari.camposs44@gmail.com')
    cy.get('#open-text-area').type('Bom dia! Que este novo amanhecer traga consigo a promessa de infinitas possibilidades e alegrias renovadas. Que cada raio de sol que ilumina o horizonte traga consigo a esperança de um dia repleto de oportunidades e realizações. Que os pássaros que cantam lá fora sejam o lembrete gentil de que a vida está sempre em movimento, e que cada nova manhã é uma dádiva para ser apreciada e aproveitada ao máximo. Que a paz e a serenidade acompanhem seus passos ao longo do dia, e que você encontre inspiração em cada momento para fazer deste dia algo verdadeiramente especial. Que cada sorriso que você compartilhar ilumine o mundo ao seu redor, e que cada gesto de bondade retorne a você multiplicado. Que este dia seja o início de uma jornada incrível, repleta de conquistas e felicidade. Bom dia!', { delay: 0 })
    //cy.get('.button').click()
    cy.contains('.button', 'Enviar').click()

})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
