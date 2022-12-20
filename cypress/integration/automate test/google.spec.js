describe('example to-do app', () => {
  beforeEach(() => {
    
  })

  it('google calculator', () => {
    cy.visit('https://www.google.co.th')
    cy.get('input[class="gLFyf"]')
      .type('เครื่องคิดเลข')
    cy.contains('ค้นหาด้วย Google')
      .click()
    //การคูณ
    cy.get('div[jsname="rk7bOd"]')
      .click()
    cy.get('div[jsname="YovRWb"]')
      .click()
    cy.get('div[jsname="abcgof"]')
      .click()
    cy.get('div[jsname="Pt8tGc"]')
      .click()
    cy.contains('42')
    cy.wait(5000)
    cy.get('div[jsname="SLn8gc"]')
      .click()
    //การบวก
    cy.get('div[jsname="rk7bOd"]')
      .click()
    cy.get('div[jsname="XSr6wc"]')
      .click()
    cy.get('div[jsname="abcgof"]')
      .click()
    cy.get('div[jsname="Pt8tGc"]')
      .click()
    cy.contains('13')
    cy.wait(5000)
    cy.get('div[jsname="SLn8gc"]')
      .click()
    //การลบ
    cy.get('div[jsname="rk7bOd"]')
      .click()
    cy.get('div[jsname="XSr6wc"]')
      .click()
    cy.get('div[jsname="abcgof"]')
      .click()
    cy.get('div[jsname="Pt8tGc"]')
      .click()
    cy.contains('13')
    cy.wait(5000)
    cy.get('div[jsname="SLn8gc"]')
      .click()
    //การหาร
    cy.get('div[jsname="rk7bOd"]')
      .click()
    cy.get('div[jsname="abcgof"]')
      .click()
    cy.get('div[jsname="WxTTNd"]')
      .click()
    cy.get('div[jsname="abcgof"]')
      .click()
    cy.get('div[jsname="Pt8tGc"]')
      .click()
    cy.contains('12.6666666667')
    cy.wait(5000)
    cy.get('div[jsname="SLn8gc"]')
      .click()
  })
  it('google translate', () => {
    cy.visit('https://www.google.co.th')
    cy.get('input[class="gLFyf"]')
      .type('แปลภาษา')
    cy.contains('ค้นหาด้วย Google')
      .click()
    cy.get('textarea[id="tw-source-text-ta"]')
      .type('ทดสอบระบบ test')
  })
  it('google map', () => {
    cy.visit('https://www.google.co.th')
    cy.get('input[class="gLFyf"]')
      .type('map')
    cy.contains('ค้นหาด้วย Google')
      .click()
    cy.contains('Google Maps')
      .first()
      .click()
    cy.get('input[jslog="11886"]')
      .type('โรงแรมใกล้ฉัน')
    cy.get('#searchbox-searchbutton')
      .click()
  })
})
