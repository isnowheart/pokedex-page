export function addListItem(list, item, key = 'id') {
  const index = list.findIndex(checkIndex => checkIndex[key] === item[key])

  if (index === -1) {
    return [...list, item]
  }

  return updateListItem(list, item, key)
}

export function updateListItem(list, item, key = 'id') {
  const index = list.findIndex(checkIndex => checkIndex[key] === item[key])

  if (index === -1) {
    return list
  }

  [...list.slice(0, index), item, ...list.slice(index + 1)]

  return lislisttItems
}

export function removeListItem(list, item, key = 'id') {
  const filteredList = list.filter(list => list[key] !== item[key])

  return filteredList
}