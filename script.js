/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
function Refresh(event){
    const btn = event.currentTarget;

    const article = document.querySelector('article');
    article.removeChild(article.lastElementChild);

    for(let box of img)
    {
        box.addEventListener('click', RispostaSel);
        box.classList.remove('selezionato');
        box.classList.remove('opacity');
        const blocco = box.querySelector('.checkbox');
        blocco.src="images/unchecked.png";
    }

    
    flag1=false;
    flag2=false;
    flag3=false;
    ris={};
}


function RispostaSel(event){
    const div  =event.currentTarget;
    const image = div.querySelector('.checkbox');
    image.src='images/checked.png';
    div.classList.add('selezionato');
    div.classList.remove('opacity');

    const id = div.dataset.questionId;
    ris[id]=div.dataset.choiceId;

    const boxes = div.parentNode.querySelectorAll('div');
    for(const box of boxes){
        if(box.dataset.choiceId!==div.dataset.choiceId){
            box.classList.remove('selezionato');
            box.classList.add('opacity');

            const imagebox = box.querySelector('.checkbox');
            imagebox.src='images/unchecked.png';
        }
    }

    if (id==='one')
        {
            flag1=true;
        }
        if (id==='two')
        {
            flag2=true;
        }
        
        if (id==='three')
        {
            flag3=true;
        }

        console.log(flag1,flag2,flag3);

        if(flag1===true&&flag2===true&&flag3==true)
        {
            for(const box of img)
            {
                box.removeEventListener('click', RispostaSel);
            }
            Soluzione();
        }
    
}

function Soluzione(){
    const article = document.querySelector('article');
    const div = document.createElement('div');
    div.classList.add('risposta');
    article.appendChild(div);

    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    btn.classList.add('bottone');
    btn.textContent = 'Ricomincia il quiz';
    div.appendChild(h1);
    div.appendChild(span);
    div.appendChild(btn);


    const one = ris['one'];
    const two = ris['two'];
    const three = ris['three']; 
   
 
    console.log(RESULTS_MAP[two]['title']);


    if (two === three){
        h1.textContent = RESULTS_MAP[two]['title'];
        span.textContent = RESULTS_MAP[two]['contents'];

    }
    else
    {
        h1.textContent = RESULTS_MAP[one]['title'];
        span.textContent = RESULTS_MAP[one]['contents'];

    }

    btn.addEventListener('click', Refresh);
}



var ris = {};

let flag1=false;
let flag2=false;
let flag3=false;

const img=document.querySelectorAll('.choice-grid div');
for(const box of img){ 
    box.addEventListener('click', RispostaSel);
}