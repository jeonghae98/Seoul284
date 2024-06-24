<?php
if (!isset($_POST['user_id']) || !isset($_POST['user_pw'])) {
    echo json_encode(array('error' => 'ID와 비밀번호를 모두 입력해주세요.'));
    exit;
}

$user_id = $_POST['user_id'];
$user_pw = $_POST['user_pw'];

$members = array(
    'jeonghae12' => array('pw' => 'answjdgo12!', 'name' => '문정해'),
    'sungmin12' => array('pw' => 'dltjdals12!', 'name' => '이성민')
    'hyunho12' => array('pw' => 'tlsgusgh12!', 'name' => '신현호')
);

if (isset($members[$user_id]) && $members[$user_id]['pw'] === $user_pw) {
    echo json_encode(array(
        'user_id' => $user_id,
        'user_name' => $members[$user_id]['name']
    ));
} else {
    echo json_encode(array('error' => 'Invalid ID or password.'));
}
?>
