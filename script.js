

function somar() {
    let first = document.getElementById('txt1');
    let second = document.getElementById('txt2');
    let res = document.getElementById('res');
     let f = Number(first.value);
     let s = Number(second.value);
    if(f < s) {
     for(let i = f; i <= s; i++) {
      res.innerHTML = `a soma de ${f} + ${s} = ${s+f}`;
     
    }
   }else {
    for(let i = f; i >= s; i--) {
        res.innerHTML = `a soma de ${f} + ${s} = ${f+s}`;
      
     }
   }

}

function sub() {
    let first = document.getElementById('txt1');
    let second = document.getElementById('txt2');
    let res = document.getElementById('res');
     let f = Number(first.value);
     let s = Number(second.value);
     if(f < s){
      for(let i = f; i <= s; i++) {
        res.innerHTML = `a soma de ${f} - ${s} = ${f-s}`;
      }
    }else{
        for(let i = f; i >= s; i--) {
            res.innerHTML = `a soma de ${f} - ${s} = ${f-s}`;
          }
    }
}