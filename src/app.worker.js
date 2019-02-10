
function helperFunction(input){

}

export default function() {

  onmessage = (e) => {
    console.log('e in worker', e)
    if(!e.data) return
    if((e.data && e.data.type === 'input') ) {
      setTimeout(() => {
        postMessage('SUCCESS')
      }, 5000)
    }
  }
}

