

function Table({tableData}){
    return(   
        tableData.map((data, index)=>{
            return(
                <div>
                    <div className="lbl-keterangan">
                        <div className="Label"><p id="label-table">Label</p></div>
                        <div className="Value"><p id="value-table">Value</p></div>
                    </div>

                    <hr className="line" />

                    <div className="lbl lbl-nama">
                        <div className="Nama"><p id="nama-table"></p>Nama</div>
                        <div className="value isi-nama"><p id="nama">{data.fullName}</p></div>
                    </div>

                    <hr className="line-table"/>
                    <div className="lbl lbl-tanggal-lahir">
                        <div className="TanggalLahir"><p id="tanggal-table">Tanggal Lahir</p></div>
                        <div className="value isi-tanggak"><p id="tanggal-lahir">{data.date}</p></div>
                    </div>

                    <hr className="line-table"/>
                    <div className="lbl lbl-jenis-kelamin">
                        <div className="JenisKelamin"><p id="gender-table">Jenis Kelamin</p></div>
                        <div className="value isi-jenis-kelamin"><p id="jenis-kelamin">{data.gender}</p></div>
                    </div>

                    <hr className="line-table"/>
                    <div className="lbl lbl-hobi">
                        <div className="Hobi"><p id="hobi-table">Hobi</p></div>
                        <div className="value isi-nama"><p id="hobi">{data.hobi.join(", ")}</p></div>
                    </div>

                    <hr className="line-table"/>
                    <div className="lbl lbl-agama">
                        <div className="Agama"><p id="agama-table">Agama</p></div>
                        <div className="value isi-nama"><p id="agama">{data.agama}</p></div>
                    </div>

                    <hr className="line-table"/>
                    <div className="lbl lbl-pesan">
                        <div className="Pesan"><p id="pesan-table">Pesan</p></div>
                        <div className="value isi-nama"><p id="pesan">{data.pesan}</p></div>
                    </div>
                    <hr className="line-table"/>
                </div>

            )
        })

    )
}

export default Table;

