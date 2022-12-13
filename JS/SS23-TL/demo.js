//? Hide - Show dùng toggle //
// $('#click').click(()=>{
//     $('#greet').toggle();
// });

//! Cách viết jQuery //
//* C1: viết bao trong $(document).ready - đảm bảo khi các phần tử html được load xong.
//* C2: viết bao trong $(window).on('load') - đảm bảo load hết.
//! Cú pháp //
//* $('selector').action();

//? Chuyển màu //
// $('#click').click(()=>{
//     $('#greet').css({'background-color':'gold', "color":'red'});
// })

//! Thêm class cho phần tử//
//? DOM //
// let btn = document.getElementById('click');
// btn.addEventListener('click', ()=> {
//     let a = document.getElementById('greet').classList.add('hello');
// })
//? jQuery //
$('#click').click(()=>{
    $('#greet').addClass('hello');
})

//* toggleClass : Ẩn hiện class //

//! Sự kiện trong jQuery //
//? Khi con trỏ rời khỏi phần tử //
$('#name').blur(()=>{
    $('#name').val("Vuong").attr('size',"20");
})
$('#name').focus(()=>{
    $('#name').val("").attr('size',"30");
})

//! Hiệu ứng //
$('#click2').click(()=>{
    $('p').hide(3000,hidefinish);
});
function hidefinish(){
    $('#click2').attr('value','Done!').css('color','red');
    $('p').show(5000);
}

$('#click3').click(()=>{
    $('#chicken').slideUp('fast',slideUpFinish);
});
function slideUpFinish(){
    $('#chicken').slideDown(3000);
}