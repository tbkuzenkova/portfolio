<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="tbkuzenkova@gmail.com";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="index.html";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы
 
$email=$_POST['email']; 

$msg=$_POST['message']; 

if (!empty($_FILES['file']['tmp_name'])) 
  { 
    // Закачиваем файл 
    $path = $_FILES['file']['name']; 
    if (copy($_FILES['mail_file']['tmp_name'], $path)) $picture = $path; 
  } 
 
// Отправляем письмо админу  
 
if(empty($picture)) mail("$adminemail", "$date $time Сообщение от $name", "$msg"); 
else mail("$adminemail", "$date $time Сообщение от $name", "$msg", $picture); 
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 
 
 } 
 
?>