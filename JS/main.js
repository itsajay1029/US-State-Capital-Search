

const search=document.querySelector('#search-bar');
const list=document.querySelector('#match-list')

search.addEventListener('keyup',(e)=>{
    let value=e.target.value.toUpperCase();
    if(value===""){
        return;
    }

    fetch('doc.json').then(res => res.json()).then(data =>{
        let block=``;
        data.forEach((state)=>{
            if(state.name.toUpperCase().indexOf(value)==0 || state.abbr.toUpperCase().indexOf(value)==0){
                block+=`
                    <div class="carded">
                    <h3> ${state.name} (${state.abbr}) : <span class="text-black">${state.capital}</span></h3>
                    </div>
                `
            }
        })
        if(block===``){
            block=`
            <div class="carded">
            <h3> No Such State Found !</h3>
            </div>
            `
        }
        list.innerHTML=block;

    })
})
