let body = document.getElementsByTagName("BODY")[0];


const createInput = ((parent,type,id,name) => {
    const label = document.createElement('label')
    label.innerHTML = id;
    label.htmlFor = id;
    const input = document.createElement('input')
    input.type = type;
    input.id = id;
    input.name = name;
    parent.appendChild(label);
    parent.appendChild(input);
});

const createMultiInput = ((parent,type,id,name, ...choices) => {
    const label = document.createElement('label')
    label.innerHTML = id;
    label.htmlFor = id;
    parent.appendChild(label);
    
    choices.forEach(choice => {
        const choiceLabel = document.createElement('label')
        choiceLabel.innerHTML = choice;
        choiceLabel.htmlFor = choice;
        const choiceInput = document.createElement('input')
        choiceInput.type = type;
        choiceInput.id = choice;
        choiceInput.name = name;
        parent.appendChild(choiceLabel);
        parent.appendChild(choiceInput);
        }) 
});

const strabimusForm = ((parent) => {
    if (!document.getElementById('strabForm')) {
        const strabForm = document.createElement('form');
        strabForm.id='strabForm'

        createMultiInput(strabForm,'radio','Strabimus Type','Strabimus Type','Phoria','Tropia');
        createMultiInput(strabForm,'radio','Strabimus Direction','Strabimus Direction','Hyper','Hypo','Exo','Eso');

            let strabEyeLabel = document.createElement('label')
            strabEyeLabel.innerHTML = 'strabEye'
            strabEyeLabel.htmlFor = 'strabEye'
            parent.appendChild(strabForm)

        } else parent.removeChild(strabForm)
});

let addForm = (() => {
    let form = document.createElement('form');
    body.appendChild(form)

    createInput(form,'text','PID','PID');
    createInput(form,'date','DOB','DOB');
    createInput(form,'number','REVA','REVA');
    createInput(form,'number','LEVA','LEVA');
    createInput(form,'checkbox','glasses','glasses');
    createInput(form,'checkbox','strabimus','strabimus');
    
    document.getElementById('strabimus').onclick = strabimusForm(form);

    
})();

