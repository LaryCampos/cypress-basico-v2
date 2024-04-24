// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//import { each } from "cypress/types/bluebird"

// O bloco describe define a suíte de testes, e o bloco it, define um caso de teste.


/// <reference types="Cypress" />

//aula 01 - Ex1
/*describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('../src/index.html')        
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  
    })
  })
*/
//Aula 02 
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('../src/index.html')      
    })

    it('verifica o título da aplicação', function() { 
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() { 
        cy.get('#firstName').type('Larissa')
        cy.get('#lastName').type('Campos')
        cy.get('#email').type('lari.camposs44@gmail.com')
        cy.get('#open-text-area').type('Bom dia! Que este novo amanhecer traga consigo a promessa de infinitas possibilidades e alegrias renovadas. Que cada raio de sol que ilumina o horizonte traga consigo a esperança de um dia repleto de oportunidades e realizações. Que os pássaros que cantam lá fora sejam o lembrete gentil de que a vida está sempre em movimento, e que cada nova manhã é uma dádiva para ser apreciada e aproveitada ao máximo. Que a paz e a serenidade acompanhem seus passos ao longo do dia, e que você encontre inspiração em cada momento para fazer deste dia algo verdadeiramente especial. Que cada sorriso que você compartilhar ilumine o mundo ao seu redor, e que cada gesto de bondade retorne a você multiplicado. Que este dia seja o início de uma jornada incrível, repleta de conquistas e felicidade. Bom dia!', { delay: 0 })
        //cy.get('.button').click()
        cy.contains('.button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function() {
        cy.get('#firstName').type('Larissa')
        cy.get('#lastName').type('Campos')
        cy.get('#email').type('lari.gmail.com')
        cy.get('#open-text-area').type('Bom dia!', { delay: 0 })
        
        cy.clock()
        //cy.get('.button').click()
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')

        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    it('Validação campo telefone não deve aceitar valor não numerico', function(){
        cy.get('#phone').type('ABC')
        cy.get('#phone').should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Larissa')
        cy.get('#lastName').type('Campos')
        cy.get('#email').type('lari.gmail.com')
        //cy.get("#phone-checkbox").click()
        cy.get("#phone-checkbox").check()
        cy.get('#open-text-area').type('Bom dia!', { delay: 0 })
        
        cy.clock()
        //cy.get('.button').click()
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')

        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').type('Larissa')
        cy.get('#firstName').should('have.value', 'Larissa')
        cy.get('#firstName').clear().should('have.value', '')
        cy.get('#lastName').type('Campos')
        cy.get('#lastName').should('have.value', 'Campos')
        cy.get('#lastName').clear().should('have.value', '')
        cy.get('#email').type('lari.gmail.com')
        cy.get('#email').should('have.value', 'lari.gmail.com')
        cy.get('#email').clear().should('have.value','')
        //cy.get('#phone-checkbox').click()
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('912345678')
        cy.get('#phone').should('have.value','912345678')
        cy.get('#phone').clear().should('have.value','')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.clock()
        //cy.get('.button').click()
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')

        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
        
    })

    //Cypress._.times(5, () => {
    it('envia o formuário com sucesso usando um comando customizado', function(){
         cy.fillMandatoryFieldsAndSubmit()
        cy.clock()
        cy.contains('.button', 'Enviar').click()
        cy.get('.success').should('be.visible')

        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })
    //})
    
    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('select#product').select('YouTube').should('have.value', 'youtube')

    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('select#product').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function(){
        cy.get('select#product').select(1).should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function(){
        cy.get('input[type=radio][value="feedback"]').check().should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function(){
        cy.get('input[type=radio]').should('have.length', 3)
        .each(function ($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })

    it('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('#check input[type=checkbox]').check().should('be.checked')
        .last().uncheck().should('not.be.checked')

    })

    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })
    it('seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('myFixture')
        cy.get('input[type="file"]').selectFile('@myFixture')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
           
    })
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.get('a').should('have.attr', 'target', '_blank')
        
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
        cy.get('a').invoke('removeAttr', 'target').click()

    })

    it('testa a página da política de privacidade de forma independente', function () {
        //cy.visit('../src/privacy.html') 
        cy.get('a').should('have.attr', 'target', '_blank')
        cy.get('a').invoke('removeAttr', 'target').click()

        cy.contains('CAC TAT - Política de privacidade').should('be.visible')

        //Também funciona pelo privacy.spec.js
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
      })

    it('preenche a area de texto usando o comando invoke', function(){
        const longText = Cypress._.repeat('Preencha aqui', 80)
        cy.get('#open-text-area').invoke('val', longText)
        .should('have.value', longText)
      })

    it.only('encontre o gato', function(){
        cy.get('#cat').invoke('show').should('be.visible')
    })



})
