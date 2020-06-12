Feature('Search')

Scenario('Should render repo list correctly', (I) => {
  I.amOnPage('/')
  I.seeElement('$searchInput')
  I.fillField('$searchInput', 'react')
  I.waitForElement('$repoListLoadingSpinner', 2)
  I.waitForElement('$RepoItem', 10)
  I.seeNumberOfElements('$RepoItem', 30)
})

Scenario('Should render warning for no matching repo', (I) => {
  I.amOnPage('/')
  I.fillField('$searchInput', 'qwewqewqrawefasdfzxcvzxcvwef')
  I.waitForElement('$noResultText', 10)
})
