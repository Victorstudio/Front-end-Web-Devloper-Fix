function loadPesanan() {
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        var data_app = "";
        if (list_data.length > 0) {
            data_app = '<table class="table table-striped table-dark ">';
            data_app += '<thead>' +
                '<th>Nama IG</th>' +
                '<th>Tanggal</th>' +
                '<th>Pesanan</th>' +
                '</thead> <tbody>';
 
            for (i in list_data) {
                data_app += '<tr>';
                data_app +=
                    '<td>' + list_data[i].nama + ' </td>' +
                    '<td>' + list_data[i].tanggal + ' </td>' +
                    '<td>' + list_data[i].pesanan + ' </td>' +
                    '<td><a class="btn btn-danger btn-xs href="javascript:void(0)" onclick="hapusData(\'' + list_data[i].id_data + '\')">Hapus</a></td>' 
                    ;
                data_app += '</tr>';
            }
 
            data_app += 
            '</tbody></table>';
 
        }
        else {
            data_app = "Silahkan pesan di sini yaa !!";
        }
 
 
        $('#list-pesanan').html(data_app);
        $('#list-pesanan').hide();
        $('#list-pesanan').fadeIn(100);
    }
}
 
function editData(id) {
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                $("#eid_data").val(list_data[i].id_data);
                $("#enama").val(list_data[i].nama);
                $("#etanggal").val(list_data[i].tanggal);
                $("#epesanan").val(list_data[i].pesanan);
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
        gantiMenu('edit-data');
 
    }
 
}
 
function lihatData(id) {
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                $("#lid_data").val(list_data[i].id_data);
                $("#lnama").val(list_data[i].nama);
                $("#ltanggal").val(list_data[i].tanggal);
                $("#lpesanan").val(list_data[i].pesanan);
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
        gantiMenu('lihat-data');
 
    }
}
 
 
function simpanData() {

    
    nama = $('#nama').val();
    tanggal = $('#tanggal').val();
    pesanan = $('#pesanan').val();
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        id_data = parseInt(localStorage.getItem('id_data'));
    }
    else {
        list_data = [];
        id_data = 0;
    }
 
    id_data++;
    list_data.push({ 'id_data': id_data, 'nama': nama, 'tanggal': tanggal, 'pesanan': pesanan });
    localStorage.setItem('list_data', JSON.stringify(list_data));
    localStorage.setItem('id_data', id_data);
    document.getElementById('form-data').reset();
    gantiMenu('list-pesanan');
 
    return false;
}
 
function simpanEditData() {
    
 
    id_data = $('#eid_data').val();
    nama = $('#enama').val();
    tanggal = $('#etanggal').val();
    pesanan = $('#pesanan').val();
 
    list_data.push({ 'id_data': id_data, 'nama': nama, 'tanggal': tanggal, 'pesanan': pesanan });
    localStorage.setItem('list_data', JSON.stringify(list_data));
    document.getElementById('eform-data').reset();
    gantiMenu('list-pesanan');
 
    return false;
}
 
function hapusData(id) {

 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
 
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
 
        localStorage.setItem('list_data', JSON.stringify(list_data));
        loadPesanan();
    }
}
 
 
function gantiMenu(menu) {
    if (menu == "list-pesanan") {
        loadPesanan();
        $('#tambah-pesanan').hide();
        $('#list-pesanan').fadeIn();
        $('#edit-data').hide();
    }
    else if (menu == "tambah-pesanan") {
        $('#tambah-pesanan').fadeIn();
        $('#list-pesanan').hide();
        $('#edit-data').hide();
    } else if (menu == "edit-data") {
        $('#edit-data').fadeIn();
        $('#tambah-catatan').hide();
        $('#list-pesanan').hide();
        $('#lihat-pesanan').hide();
    } else if (menu == "lihat-data") {
        $('#edit-data').hide();
        $('#tambah-pesanan').hide();
        $('#list-pesanan').hide();
    }
}