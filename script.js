let body = document.getElementsByTagName("BODY")[0];
let addForm = (() => {
    let form = document.createElement('form');

    let IDLabel = document.createElement('label')
    IDLabel.innerHTML = 'PID'
    IDLabel.htmlFor = 'PID'
    let getID = document.createElement('input');
    getID.type = 'text';
    getID.id = 'PID';
    getID.name = 'PID';
   
    let DOBLabel = document.createElement('label')
    DOBLabel.innerHTML = 'DOB'
    DOBLabel.htmlFor = 'DOB'
    let getDOB = document.createElement('input');
    getDOB.type='date'
    getDOB.id='DOB'
    getDOB.name='DOB'

    let REVALabel = document.createElement('label')
    REVALabel.innerHTML = 'REVA'
    REVALabel.htmlFor = 'REVA'
    let getREVA = document.createElement('input')
    getREVA.type='number'
    getREVA.id='REVA'
    getREVA.name='REVA'

    let LEVALabel = document.createElement('label')
    LEVALabel.innerHTML = 'REVA'
    LEVALabel.htmlFor = 'REVA'
    let getLEVA = document.createElement('input')
    getLEVA.type='number'
    getLEVA.id='REVA'
    getLEVA.name='REVA'

    let glassesLabel = document.createElement('label')
    glassesLabel.innerHTML = 'glasses'
    glassesLabel.htmlFor = 'glasses'
    let getGlasses = document.createElement('input')
    getGlasses.type='checkbox'
    getGlasses.id='glasses'
    getGlasses.name='glasses'

    let strabLabel = document.createElement('label')
    strabLabel.innerHTML = 'strabimus'
    strabLabel.htmlFor = 'strabimus'
    let getStrab = document.createElement('input')
    getStrab.type='checkbox'
    getStrab.id='strabimus'
    getStrab.name='strabimus'
    


    form.appendChild(IDLabel)
    form.appendChild(getID)
    form.appendChild(DOBLabel)
    form.appendChild(getDOB)
    form.appendChild(REVALabel)
    form.appendChild(getREVA)
    form.appendChild(LEVALabel)
    form.appendChild(getLEVA)
    form.appendChild(glassesLabel)
    form.appendChild(getGlasses)
    form.appendChild(strabLabel)
    form.appendChild(getStrab)
    body.appendChild(form)


    getStrab.onclick = function() {
        if (!document.getElementById('strabForm')) {
            let strabForm = document.createElement('form');
            strabForm.id='strabForm'

            let strabTypeLabel = document.createElement('label')
            strabTypeLabel.innerHTML = 'strabimusType'
            strabTypeLabel.htmlFor = 'strabimusType'
            let getPhoria = document.createElement('input')
            getPhoria.type='radio'
            getPhoria.id='Phoria'
            getPhoria.name='strabimusType'
            let getTropia = document.createElement('input')
            getTropia.type='radio'
            getTropia.id='Tropia'
            getTropia.name='strabimusType'

            let strabDirectionLabel = document.createElement('label')
            strabDirectionLabel.innerHTML = 'strabDirection'
            strabDirectionLabel.htmlFor = 'strabDirection'

            let getHyperLabel = document.createElement('label')
            getHyperLabel.htmlFor='getHyper'
            getHyperLabel.innerHTML='Hyper'
            let getHyper = document.createElement('input')
            getHyper.type='radio'
            getHyper.id='Hyper'
            getHyper.name='strabDirection'

            let getHypoLabel = document.createElement('label')
            getHypoLabel.htmlFor='getHypo'
            getHypoLabel.innerHTML='Hypo'
            let getHypo = document.createElement('input')
            getHypo.type='radio'
            getHypo.id='Hypo'
            getHypo.name='strabDirection'

            let getExoLabel = document.createElement('label')
            getExoLabel.htmlFor='getExo'
            getExoLabel.innerHTML='Exo'
            let getExo = document.createElement('input')
            getExo.type='radio'
            getExo.id='Exo'
            getExo.name='strabDirection'

            let getEsoLabel = document.createElement('label')
            getEsoLabel.htmlFor='getEso'
            getEsoLabel.innerHTML='Eso'
            let getEso = document.createElement('input')
            getEso.type='radio'
            getEso.id='Eso'
            getEso.name='strabDirection'

            let strabEyeLabel = document.createElement('label')
            strabEyeLabel.innerHTML = 'strabEye'
            strabEyeLabel.htmlFor = 'strabEye'


            strabForm.appendChild(strabTypeLabel)
            strabForm.appendChild(getPhoria)
            strabForm.appendChild(getTropia)
            strabForm.appendChild(strabDirectionLabel)
            strabForm.appendChild(getHyperLabel)
            strabForm.appendChild(getHyper)
            strabForm.appendChild(getHypoLabel)
            strabForm.appendChild(getHypo)
            strabForm.appendChild(getExoLabel)
            strabForm.appendChild(getExo)
            strabForm.appendChild(getEsoLabel)
            strabForm.appendChild(getEso)
            

            form.insertBefore(strabForm,getStrab)

        } else form.removeChild(strabForm)
    }
})();