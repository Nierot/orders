let currentTitle = $state('Home')

export function setTitle(newTitle: string) {
  console.log('todo: set title to document', newTitle)
  currentTitle = newTitle
}

export function getTitle() {
  return currentTitle
}