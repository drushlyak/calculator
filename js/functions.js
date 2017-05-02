function clearResultBlock(){
	document.getElementById('resultText').innerHTML = "";
}

function clearMessageBlock(){
	document.getElementById('message').innerHTML = "";
}

function pleaseSelectAcc (){
	document.getElementById('message').innerHTML = "<div class=\"alert alert-warning\"> <span class=\"close\" data-dismiss=\"alert\">×</span> Пожалуйста, выберите счет!</div>";
	document.getElementById('resultText').innerHTML = "";
}

function select(){
	var $selectedAcc = document.getElementById("blockIdAccount"); // Получаем список
	
	var $indexAcc = document.getElementById("blockIdAccount").options.selectedIndex;
	
	if ($indexAcc == -1){
		pleaseSelectAcc ();
	}

	var $valueAcc = $selectedAcc.options[$selectedAcc.selectedIndex].value; // Получаем индекс выделенного элемента

	var $typeOfCorrespondence = $('input[name=correspondence]:checked').val();//получаем значение радиокнопки

	$resultTitle = "";
	$resultText = "";




	switch($typeOfCorrespondence) {
		case 'debit':

			var $length = $debit [$valueAcc].length;

			for (var $i=0;$i<$length;$i++) {
			$resultText = $resultText + "<p class=\"lead\">" + $debit [$valueAcc][$i] + " " + $allAccounts [($debit [$valueAcc][$i])] + "</p>";
			};
		var $resultTitle = "<p class=\"lead\">Cчет " + $valueAcc + " " + $allAccounts [$valueAcc] + " корреспондирует по дебету с кредитом счетов:</p>";

		break;
		case 'credit':
		var $length = $credit [$valueAcc].length;

			for (var $i=0;$i<$length;$i++) {
			$resultText = $resultText + "<p class=\"lead\">" + $credit [$valueAcc][$i] + " " + $allAccounts [($credit [$valueAcc][$i])] + "</p>";
			};
		var $resultTitle = "<p class=\"lead\">Cчет " + $valueAcc + " " + $allAccounts [$valueAcc] + " корреспондирует по кредиту с дебетом счетов:</p>";


		break;
	}

	clearMessageBlock()
	
	document.getElementById('resultText').innerHTML = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" >" + $resultTitle + $resultText + "</div>";
						
}

function subAccounts(){

	clearMessageBlock();
	clearResultBlock();

	var $selectedAcc = document.getElementById("blockIdAccount");
	var $indexAcc = document.getElementById("blockIdAccount").options.selectedIndex;

	if ($indexAcc == -1){
		pleaseSelectAcc ();
	}

	var $valueAcc = $selectedAcc.options[$selectedAcc.selectedIndex].value;

	if (typeof ($subAccounts [$valueAcc]) != "undefined") {


	$resultText = "<p class=\"lead\">Субсчета в к счету " +  $valueAcc + " " + $allAccounts [$valueAcc]+ ":</p>";

	var $length = $subAccounts [$valueAcc].length;


	for (var $i=0;$i<$length;$i++) {
		$resultText = $resultText + "<p class=\"lead\">" + $subAccounts [$valueAcc][$i] + "</p>";
	};

	document.getElementById('resultText').innerHTML = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" >" + $resultText + "</div>";
	}

	else	{
		document.getElementById('message').innerHTML = "<div class=\"alert alert-warning\"> <span class=\"close\" data-dismiss=\"alert\">×</span>У выбранного счета нет субсчетов!</div>";
	}
}