$(function () {
    const $frm = $('#login-box');
    const $id = $('#id input');
    const $pw = $('#pw input');

    const korCheck = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;
    const engCheck = /[a-zA-Z]/;
    const numCheck = /[0-9]/;
    const spcCheck = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/;

    function idInput() {
        if ($id.val().length < 6) {
            alert('아이디는 한글 제외 영문, 숫자 조합 6자리 이상을 입력해 주세요.');
            $id.focus();
            return false;
        } else {
            if (!engCheck.test($id.val()) || !numCheck.test($id.val()) || korCheck.test($id.val())) { // 영어, 숫자 포함, 한글 미포함
                alert('아이디는 한글 제외 영문, 숫자 조합 6자리 이상을 입력해주세요.');
                $id.focus();
                return false;
            } else {
                return true;
            }
        }
    }

    function pwInput() {
        if ($pw.val().length < 8) {
            alert('비밀번호는 한글 제외 영문, 숫자 조합 8자리 이상을 입력해 주세요.');
            $pw.focus();
            return false;
        } else {
            if (!engCheck.test($pw.val()) || !numCheck.test($pw.val()) || !spcCheck.test($pw.val()) || korCheck.test($pw.val())) { // 영어, 숫자, 특수문자 포함, 한글 미포함
                alert('비밀번호는 한글 제외 영문, 숫자 조합 8자리 이상을 입력해주세요.');
                $pw.focus();
                return false;
            } else {
                return true;
            }
        }
    }

    $frm.on("submit", function(e) { // 폼 전송 이벤트 발생
        e.preventDefault(); // submit의 action 페이지로 이동 금지

        if (!idInput() || !pwInput()) {
            return; // 유효성 검사 실패 시 AJAX 요청 중단
        }

        var myData = $frm.serialize(); // 폼에 입력한 데이터를 쿼리스트링 형식으로 변환

        $.ajax({ 
            type: "POST",
            url: "member_login_ok.php", // 실제 PHP 파일 경로로 변경
            data: myData, // 사용자가 입력한 값 id, pw를 보냄
            dataType: "json", // 서버로부터 받는 데이터 형식 지정
            success: function(res) { // res 변수에는 되돌려 받은 id, name가 있음.
                if (res.user_name && res.user_id) {
                    var message = `${res.user_name} (${res.user_id})님 반갑습니다`;
                    $(".login-box").html(message); // 선택한 하위 요소를 모두 제거하고 message 내용 출력
                } else if (res.error) {
                    alert(res.error); // 에러 메시지 출력
                }
            },
            error: function(err) {
                console.log('통신 실패', err);
            }
        });
    });
});

