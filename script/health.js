(function(){

    //서브메뉴 내려오기
    $('#nav').on({
        mouseenter: function(){
            $('.sub-bg').show();
            $('.sub').show();
        },
        mouseleave: function(){
            $('.sub-bg').hide();
            $('.sub').hide();
        }

    });

    $('#nav > ul > li').on({
        mouseenter: function(){
            $(this).children().addClass('on');
        },
        mouseleave: function(){
            $(this).children().removeClass('on');
        }
    });

    

    // 좌측 메뉴 선택
    $('.section1 a').on({
        click: function(e){
            e.preventDefault();
            $('.section1 a').removeClass('on');
            $(this).addClass('on');
        }

    });

    // 아이디
    $('#id').on({
        keyup: function(event){
            event.preventDefault();

            //영문+숫자 6자~10자
            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;
            var idValue = $(this).val().toString();

            if(regExp.test(idValue)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var idValue = $(this).val().toString();

            if(idValue===''){
                $(this).removeClass('error');
            }
        }
    });

    $('.chkchk').on({
        click: function(e){
            e.preventDefault();
            
            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;

            if($('#id').val()===''){
                alert('아이디를 입력하세요!');
            }
            else if(regExp.test($('#id').val())===false){
                alert('아이디를 확인하세요!');
            }
        }
    });


    // 비밀번호
    $('#pw').on({
        keyup: function(event){
            event.preventDefault();

            //숫자 영문 기호 1개이상씩 9-12자
            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[\!\@\#\$])+[A-Za-z0-9\!\@\#\$]{9,12}$/g;
            var pwValue = $(this).val().toString();

            if(regExp.test(pwValue)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var pwValue = $(this).val().toString();

            if(pwValue===''){
                $(this).removeClass('error');
            }
        }
    });

    //비밀번호 확인
    $('#pw2').on({
        keyup: function(event){
            event.preventDefault();

            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[\!\@\#\$])+[A-Za-z0-9\!\@\#\$]{9,12}$/g;
            var pw2Value = $(this).val().toString();

            if(regExp.test(pw2Value)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var pw2Value = $(this).val().toString();

            if(pw2Value===''){
                $(this).removeClass('error');
            }
        }
    });

    //분실질문
    $('#question').on({
        change: function(e){
            e.preventDefault();

            if($(this).val()==='input'){
                $('#selfinput').addClass('on');
                $('#selfinput').focus();
            }
            else{
                $('#selfinput').removeClass('on');
            }
        }
    });

    // 전화번호
    $('#phone').on({
        keyup: function(event){
            event.preventDefault();

            //010-7942-5303
            var regExp = /^01[06789]{1}[0-9]{3,4}[0-9]{4}$/g;
            var pw2Value = $(this).val().toString();

            if(regExp.test(pw2Value)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var pw2Value = $(this).val().toString();

            if(pw2Value===''){
                $(this).removeClass('error');
            }
        }
    });

    //이메일
    $('#emailselect').on({
        change: function(){
            $('#email2').val( $(this).val() );
            $('#email2').addClass('full');
            $('#email2').attr('readonly','true');
        }
    });

    //모달켜기
    $('.popup').on({
        click: function(e){
            e.preventDefault();
            $('html').addClass('modal');
            $('#modal').addClass('on');
        }


    });

    //모달 닫기
    $('.close-btn').on({
        click: function(e){
            e.preventDefault();
            $('html').removeClass('modal');
            $('#modal').removeClass('on');
        }


    });



    

})(jQuery);