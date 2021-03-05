describe('Assignment tests', () => {

  describe('addition operator works', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('chooses operator', () => {
        cy.get('[data-cy=plus]').click()

        cy.contains(/\d\s*\+\s*\d/)
    })

    it('can click on answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const exp = $exp.text()

        cy.get('[data-cy=btn]').contains(eval(exp)).click()

        cy.get('[data-cy=exp]').should(($exp2) => {
          expect($exp2.text()).not.to.eq(exp)
        })
      })
    })

    it('shows alert on wrong answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get('[data-cy=btn]').filter((_, $btn) => {
          return $btn.innerText.match(`^(?!${eval($exp.text())}$).*$`) ? $btn : false
        }).first().click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWithMatch(/.*/)
          })
      })
    })
  })

  describe('subtract operator works', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('chooses operator', () => {
        cy.get('[data-cy=minus]').click()

        cy.contains(/\d\s*\-\s*\d/)
    })

    it('can click on answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const exp = $exp.text()

        cy.get('[data-cy=btn]').contains(eval(exp)).click()

        cy.get('[data-cy=exp]').should(($exp2) => {
          expect($exp2.text()).not.to.eq(exp)
        })
      })
    })

    it('shows alert on wrong answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get('[data-cy=btn]').filter((_, $btn) => {
          return $btn.innerText.match(`^(?!${eval($exp.text())}$).*$`) ? $btn : false
        }).first().click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWithMatch(/.*/)
          })
      })
    })
  })

  describe('divide operator works', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('chooses operator', () => {
        cy.get('[data-cy=div]').click()

        cy.contains(/\d\s*\/\s*\d/)
    })

    it('can click on answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const exp = $exp.text()

        cy.get('[data-cy=btn]').contains(eval(exp)).click()

        cy.get('[data-cy=exp]').should(($exp2) => {
          expect($exp2.text()).not.to.eq(exp)
        })
      })
    })

    it('shows alert on wrong answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get('[data-cy=btn]').filter((_, $btn) => {
          return $btn.innerText.match(`^(?!${eval($exp.text())}$).*$`) ? $btn : false
        }).first().click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWithMatch(/.*/)
          })
      })
    })

    it('doesn\'t generate divison by zero expression', () => {
      cy.wrap([...Array(50).keys()]).each((page) => {
        cy.get('[data-cy=btn]').first().click()
        cy.get('[data-cy=exp]').then(($exp) => {
          if ($exp.text().match(/\d\s*\/\s*0/)) {
            cy.log($exp.text())
            throw new Error('division by zero')
          }
        })
      })
    })
  })

  describe('multiply operator works', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('chooses operator', () => {
        cy.get('[data-cy=mul]').click()

        cy.contains(/\d\s*\*\s*\d/)
    })

    it('can click on answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const exp = $exp.text()

        cy.get('[data-cy=btn]').contains(eval(exp)).click()

        cy.get('[data-cy=exp]').should(($exp2) => {
          expect($exp2.text()).not.to.eq(exp)
        })
      })
    })

    it('shows alert on wrong answer', () => {
      cy.get('[data-cy=exp]').then(($exp) => {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get('[data-cy=btn]').filter((_, $btn) => {
          return $btn.innerText.match(`^(?!${eval($exp.text())}$).*$`) ? $btn : false
        }).first().click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWithMatch(/.*/)
          })
      })
    })
  })
})
