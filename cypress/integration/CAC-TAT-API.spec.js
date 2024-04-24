/// <reference types="Cypress" />
it('faz uma requisição HTTP', function () {
    cy.request({
        method: 'GET',
        url: 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'
    }).then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.statusText).to.eq('OK')
        expect(resp.body).to.include('CAC TAT')

    })   
})
it('encontre o gato', function(){
    cy.request({
        method: 'GET',
        url: 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'
    }).should(function(response){
        const {body} = response
        expect(body).to.include('cat')
    })
})


//})
    