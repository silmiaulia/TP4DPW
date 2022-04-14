// import 
import React, { useState} from "react";
import FormInputBiodata from "./FormInputBiodata";
import Table from "./Table";

function Main(){

 const [tableData, setTableData] = useState([])
 const [submitting, setSubmitting] = useState(false);
 const [formInputData, setformInputData] = useState(

     {
     fullName:'',
     date:'',
     gender:'',
     hobi:[],
     agama:'',
     pesan:''
    }
 );
 
 const handleChange=(evnt)=>{  
     
    if(evnt.target.type === 'checkbox'){ //jika yg dirubah merupakan input type checkbox

        const { value, checked } = evnt.target; //simpan value yang di checked

        const { hobi } = formInputData;

        console.log(`${value} is ${checked}`);

        if(checked){

            var newInput = (data)=>({...data, hobi : [...hobi, value]}) //hold nilai terbaru dari array input hobi

        }else{

            //jika di unchecked 
            const index = formInputData.hobi.indexOf(value);
            formInputData.hobi.splice(index, 1);

            var newInput = (data)=>({...data, hobi : formInputData.hobi}); //hold nilai terbaru dari array input hobi


        }

    }else{

        var newInput = (data)=>({...data, [evnt.target.name]: evnt.target.value}) //hold nilai terbaru dari setiap field input
        
        
    }

    setformInputData(newInput) //update value pada object formInputData

 }

  
 const handleSubmit= (evnt) =>{


        evnt.preventDefault();

        setSubmitting(true); //jika sudah di klik submit maka submitting bernilai true (untuk memunculkan tabel)


        setTableData([formInputData]); //set tabel dengan semua value dari object form input data

 }  

 return(
     
     <React.Fragment>

    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        {/* component untuk form input */}
                        <FormInputBiodata handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/> 
                        {/* component untuk tabel (muncul jika submitting sudah berniali true) */}
                        {submitting  && <Table tableData={tableData} />  }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
     </React.Fragment>

    
 );
}
export default Main;