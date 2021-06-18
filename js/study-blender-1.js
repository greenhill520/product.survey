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
        src_path = "imgs/box/box-1.jpg";
        _img = `<img src="${src_path}" style="max-width: 100%; height: auto;"class="rounded">`;
        document.querySelector('#loading-img').innerHTML = _img;

        WaitDo();
    });
});

function stopTimeout() {
    clearTimeout(t);
}

function showDetail() {
    content = `<h3 class="display-5"><b>About this item</b></h3>
                <ul>
                    <li><h3 class="display-5">Offers better control when blending hot or cold liquids; reduces splattering and spillage</h3></li>
                    <li><h3 class="display-5">Elongated, detachable blending stick allows for dynamic use in tall containers, deep pots, and more</h3></li>
                    <li><h3 class="display-5">Silicone non-slip grip and durable stainless steel hardware</h3></li>
                    <li><h3 class="display-5">Compact design fits neatly in a drawer or cabinet for storage</h3></li>
                </ul>`
    document.querySelector('#image-Content').innerHTML = content;
}