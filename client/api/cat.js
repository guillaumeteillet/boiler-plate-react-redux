const cat = {
  get: getCat
}

async function getCat (beforeAction, successAction, errorAction) {
  beforeAction()
  const query = window.fetch('http://thecatapi.com/api/images/get?format=src&type=gif')
    .then(res => [null, res.url])
    .catch(err => [err])

  const [error, result] = await query
  if (error) return errorAction(error)
  return successAction(result)
}

export default cat
