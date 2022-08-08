<?php
    include_once 'STATUS.CLASS.php';
    
    $status = new MinecraftServerStatus(); // 类
    $response = $status-> getStatus('p9.simpfun.cn', 8455); // 服务器地址

if(!$response) {
    echo"服务器可能离线!";
} else {
    echo"".$response['players']."";
}
 
?> 