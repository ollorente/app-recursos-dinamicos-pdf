export const getComponents = async () => {
  return await fetch(`./../db.json`)
    .then(response => response.json())
    .then(async json => {
      const items = await json.ovas
      return items ? items : []
    })
}

export const getComponent = async (id) => {
  return await fetch(`./../db.json`)
    .then(response => response.json())
    .then(async json => {
      const items = await json.ovas
      const item = await items.find((e) => e.id === id)
      return item ? item : null
    })
}
