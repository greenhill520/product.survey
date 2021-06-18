var WaitTime = 17;
var t;
function WaitDo(){
    if(WaitTime > 0){
        WaitTime --;
        t = setTimeout(WaitDo, 1000);
    }
    else
    {
        $('#myModal').modal('hide');
        showDetail();
    }
}

$(function() {
    $('#myModal').modal('hide');
});

$(function() {
    $('#myModal').on('show.bs.modal',
    function() {
        WaitTime = 8;
        src_path = "imgs/dog/dog-1.jpg";
        _img = `<img src="${src_path}" style="max-width: 100%; height: auto;"class="rounded">`;
        document.querySelector('#loading-img').innerHTML = _img;

        WaitDo();
    });
});

function stopTimeout() {
    clearTimeout(t);
}

function showDetail() {
    img_path = "imgs/earphone.jpg";
    _img = `<img src="${img_path}" style="max-width: 100%; height: auto;" class="rounded mx-auto d-block">`;
    document.querySelector('#image-Content').innerHTML = _img;
}

function clearPics() {
    document.querySelector('#image-Content').innerHTML = '';
}