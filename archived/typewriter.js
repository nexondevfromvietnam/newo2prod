const hieu_ung_danh_chu = function(the_html_chua_chu, chu, thoiGianDoi) {
    this.the_html_chua_chu = the_html_chua_chu;
    this.chu = chu;
    this.tu = '';
    this.vi_tri_index_chu = 0;
    this.thoiGianDoi = parseInt(thoiGianDoi, 10);
    this.ham_danh_chu();
    this.dang_xoa_chu = false;
}


hieu_ung_danh_chu.prototype.ham_danh_chu = function() {
    
    // Vị Trí chỉ mục của từ hiện tại
    const index_chu_hien_tai = this.vi_tri_index_chu % this.chu.length;
    //Lấy tất cả cả từ của chữ hiện tại
    const chu_hien_tai = this.chu[index_chu_hien_tai]

    
    if(this.dang_xoa_chu) {
        //Xóa từ
        this.tu = chu_hien_tai.substring(0, this.tu.length - 1)
    } else {
        //Thêm từ
        this.tu = chu_hien_tai.substring(0, this.tu.length + 1)
    }

    // Thêm từ vào đối tượng
    this.the_html_chua_chu.innerHTML = `<span class="tu">${this.tu}</span>`

    //Tốc độ chữ
    let toc_do_danh_chu = 100;
    if(this.dang_xoa_chu) {
        toc_do_danh_chu = toc_do_danh_chu /2
    }

    //Nếu từ hoàn thành
    if(!this.dang_xoa_chu && this.tu === chu_hien_tai) {
        //Tạo thời điểm ngừng ở cuối
        toc_do_danh_chu = this.thoiGianDoi;
        console.log(this.thoiGianDoi)
        //Thiết lập xóa chữ đúng
        this.dang_xoa_chu = true;
    } else if (this.dang_xoa_chu && this.tu === ''){
        this.dang_xoa_chu = false;
        //Move to từ tiếp theo
        this.vi_tri_index_chu++;
        //Dừng trước khi đánh chữ
        toc_do_danh_chu = 300
    }

    setTimeout(() => this.ham_danh_chu(), toc_do_danh_chu)
}

document.addEventListener('DOMContentLoaded', chay_ham);

function chay_ham() {
    const the_html_chua_chu = document.querySelector('.danh_chu');
    const chu = JSON.parse(the_html_chua_chu.getAttribute('data-chu'));
    const thoiGianDoi = the_html_chua_chu.getAttribute('data-thoiGianDoi');

    //Thiết Lập hàm hieu_ung _danh_chu
    new hieu_ung_danh_chu(the_html_chua_chu, chu, thoiGianDoi)
}


//
var i = 0;
var txt = 'O2 Production'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("brand").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();