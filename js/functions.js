
function select(){
	var $selectedAcc = document.getElementById("blockIdAccount"); // Получаем список
	
	var $indexAcc = document.getElementById("blockIdAccount").options.selectedIndex;
	
	if ($indexAcc = -1){
	document.getElementById('message').innerHTML = "<div class=\"alert alert-warning\"> <span class=\"close\" data-dismiss=\"alert\">×</span> Пожалуйста, выберите счет!</div>";	
	document.getElementById('resultText').innerHTML = "";
	}
	
	
	var $valueAcc = $selectedAcc.options[$selectedAcc.selectedIndex].value; // Получаем индекс выделенного элемента 
	
	//if (typeof $valueAcc != undefined) {
	
	//alert ($valueAcc);

	var $typeOfCorrespondence = $('input[name=correspondence]:checked').val();//получаем значение радиокнопки
	//alert ($typeOfCorrespondence);
	
	$resultTitle = "";
	$resultText = "";
	
	switch($typeOfCorrespondence) {
	case 'debit': 
		var $length = $debit [$valueAcc].length;
		for (var $i=0;$i<$length;$i++) {
			$resultText = $resultText + "<p class=\"lead\">" + $debit [$valueAcc][$i] + " " + $allAccounts [($debit [$valueAcc][$i])] + "</p>";
			};
		var $resultTitle = "<p class=\"lead\">Cчет <b>" + $valueAcc + " " + $allAccounts [$valueAcc] + "</b> корреспондирует по дебету с кредитом счетов:</p>"; 
		break;
	case 'credit':  
		var $length = $credit [$valueAcc].length;
		for (var $i=0;$i<$length;$i++) {
			$resultText = $resultText + "<p class=\"lead\">" + $credit [$valueAcc][$i] + " " + $allAccounts [($credit [$valueAcc][$i])] + "</p>";
			};
		var $resultTitle = "<p class=\"lead\">Cчет <b>" + $valueAcc + " " + $allAccounts [$valueAcc] + "</b> корреспондирует по кредиту с дебетом счетов:</p>"; 
		break;
	}
	
	document.getElementById('message').innerHTML = "";
	
	document.getElementById('resultText').innerHTML = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" >" + $resultTitle + $resultText + "</div>";
						
}

