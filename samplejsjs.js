const store = () =>{
    console.log('Save Called');
    const train= new TrainerService();
train.setup(
        document.getElementById('ID').value,
        document.getElementById('name').value,
        document.getElementById('skill').value,
        document.getElementById('eEmail').value
        );
    train._add();
    fetchAllTrainers();
}
const fetchAllTrainers = ()=>{
    const train = new TrainerService();
    const trainers = train._all();
    buildTrainerTable(trainers);
    
}
const buildTrainerTable = (trainers) =>{
    const TrainBody = document.getElementById('trainer-details');
    let rows = '';
    trainers.forEach((train)=>{
        rows += `<tr>
                    <td>${train.ID}</td>
                    <td>${train.name}</td>
                    <td>${train.eEmail}</td>
                    <td>${train.skill}</td>
                   
                </tr>`
    });
    trainBody.innerHTML = rows;
    if(rows !=''){
        document.getElementById('tbl-trainer').style.visibility = 'visible';
    }else{
        document.getElementById('tbl-trainer').style.visibility = 'hidden';
    }
}
class TrainerService {
    ID
    name
    eEmail
    skill
   
    setup(ID,name,eEmail,skill){
            this.ID = ID
            this.name = name
            this.eEmail = eEmail
            this.skill = skill
            
    }
    _all(){
        const trainer = [];
        Object.keys(localStorage).forEach((storeKey)=>{
            trainer.push(JSON.parse(localStorage.getItem(storeKey)));
        });
        return trainer;
    }

    _add(){
        localStorage.setItem(this.eEmail,JSON.stringify({
            ID : this.ID,
            name: this.name,
            eEmail: this.eEmail,
            skill: this.skill,

        }));
    }
   
}
