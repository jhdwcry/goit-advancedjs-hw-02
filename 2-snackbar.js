import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const t=document.querySelector('[name="delay"]').value,i=document.querySelector('[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(t):r(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map