
function helperFunction(){} // ? avoids linting error?

export default () =>  { // eslint-disable-line no-restricted-globals

 helperFunction = (input) => {
    let result = []
    for(let i = 0; i < input.length; i++) {
      let code = input.charCodeAt(i)
      result.push({x: code, y: i })
    }
    return result 
  }

  onmessage = (e) => {
    if(!e.data) return
    if((e.data && e.data.type === 'input') ) {
      let payload = helperFunction(e.data.input)
      setTimeout(() => {
        postMessage(
          { message: 'success', payload }
        )
      }, 5000)
    }
  }
}

