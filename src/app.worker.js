
export default function() {
 
  this.addEventListener('message', e => {
    console.log('e', e)

  })

  // onmessage = (e) => {
  //   console.log('message', e.data)
  //   switch(e.data.event){
  //     case 'Do Something': {
  //       console.log('hit the correct case')
  //     }
  
  //   }
  // }
}

