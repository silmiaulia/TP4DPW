function FormInputBiodata({handleChange, formInputData, handleSubmit}){

    return (

        <div>
            <h3>Biodata</h3>
            <form action="#">
                <div className="form nama">
                    <label for="fname">Nama Lengkap</label>
                    <input id="form-text" type="text" name="fullName" onChange={handleChange} defaultValue={formInputData.fullName} placeholder="Full Name" />
                </div>

                <div className="form tanggal">
                    <label for="fname">Tanggal</label>
                    <input id="form-date" type="date" name="date" onChange={handleChange} value={formInputData.date}/>

                </div>
                            
                <div className="form jenis-kelamin">
                    <label className="mb-3 mr-1" for="gender">Jenis Kelamin</label><br/><br/>

                    <input type="radio" name="gender" value="Laki-laki" checked={formInputData.gender === "Laki-laki"} onChange={handleChange}/>Laki-laki
                    <input type="radio" name="gender" value="Perempuan" checked={formInputData.gender === "Perempuan"} onChange={handleChange}/>Perempuan
                    <input type="radio" name="gender" value="Lainnya" checked={formInputData.gender === "Lainnya"} onChange={handleChange}/>Lainnya

                </div>

                <div className="form Hobi">
                    <label for="fname">Hobi</label><br/><br/>
                    <div className="checkbox">
                        <input type="checkbox" name="hobi" id="Check" value="Ngoding" onChange={handleChange}/>Ngoding<br/>
                        <input type="checkbox" name="hobi" id="Check" value="Rebahan" onChange={handleChange}/>Rebahan<br/>
                        <input type="checkbox" name="hobi" id="Check" value="Melamun" onChange={handleChange}/>Melamun<br/>
                        <input type="checkbox" name="hobi" id="Check" value="Baca Buku" onChange={handleChange}/>Baca Buku<br/>
                        <input type="checkbox" name="hobi" id="Check" value="Nonton Youtube" onChange={handleChange}/>Nonton Youtube<br/>
                        <input type="checkbox" name="hobi" id="Check" value="Dengerin Lagu" onChange={handleChange}/>Dengerin Lagu<br/>
                        <input type="checkbox" name="hobi" id="Check" value="Lainnya" onChange={handleChange}/>Lainnya<br/>
                    </div>
                </div>

                <div className="form Agama">
                    <label for="fname">Agama</label><br/>
                    <select id="form-select" name="agama" onChange={handleChange}>
                        <option selected disabled value="">Agama</option>
                        <option value="Islam">Islam</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Pretestan">Pretestan</option>
                        <option value="Budha">Budha</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                </div>

                <div className="form pesan">
                    <textarea id="form-textarea" name="pesan" value={formInputData.pesan} onChange={handleChange} placeholder="Type your message here....."  ></textarea>
                </div> 


                <div className="form-button mt-3">
                    <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
                </div>
            </form>
        </div>
  

    )
    
}

export default FormInputBiodata;