	var data = new Date();
	var dia  = data.getDate();
	var mes  = data.getMonth();
	var ano  = data.getFullYear();
    var hora = data.getHours();
	var dias = data.getDay();

	if(hora < 5)
	{
		document.write("<p><b>Boa Noite, Seja Bem Vindo!</b></p>" + "<p><b>Sua leitura programada para hoje esta pronta.</b></p>")
	}
	else if(hora < 8)
	{
		document.write("<p><b>Bom Dia, Seja Bem Vindo!</b></p>" + "<p><b>Sua leitura programada para hoje esta pronta.</b></p>")
	}
	else if(hora < 12)
	{
		document.write("<p><b>Bom Dia, Seja Bem Vindo!</b></p>" + "<p><b>Sua leitura programada para hoje esta pronta.</b></p>")
	}
	else if(hora < 18)
	{
		document.write("<p><b>Boa Tarde, Seja Bem Vindo!</b></p>" + "<p><b>Sua leitura programada para hoje esta pronta.</b></p>")
	}
	else
	{
		document.write("<p><b>Boa Noite, Seja Bem Vindo!</b></p>" + "<p><b>Sua leitura programada para hoje esta pronta.</b></p>")
	}


	dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta","Sexta","Sábado")
	monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

	var str_data = dia + '/' + (mes+1) + '/' + ano;

	document.write("<h2>Hoje é " + dayName[dias] + ", " + dia + " de " + monName[mes] + " de " + ano + ". </h2>")

	if(str_data == "1/1/2021"){document.write("<h2>"+"Leia: "+" Gên 1-3"+"</h2>")}
	if(str_data == "2/1/2021"){document.write("<h2>"+"Leia: "+" Gên 4-7"+"</h2>")}
	if(str_data == "3/1/2021"){document.write("<h2>"+"Leia: "+" Gên 8-11"+"</h2>")}
	if(str_data == "4/1/2021"){document.write("<h2>"+"Leia: "+" Gên 12-15"+"</h2>")}
	if(str_data == "5/1/2021"){document.write("<h2>"+"Leia: "+" Gên 16-18"+"</h2>")}
	if(str_data == "6/1/2021"){document.write("<h2>"+"Leia: "+" Gên 19-22"+"</h2>")}
	if(str_data == "7/1/2021"){document.write("<h2>"+"Leia: "+" Gên 23-24"+"</h2>")}
	if(str_data == "8/1/2021"){document.write("<h2>"+"Leia: "+" Gên 25-27"+"</h2>")}
	if(str_data == "9/1/2021"){document.write("<h2>"+"Leia: "+" Gên 28-30"+"</h2>")}
	if(str_data == "10/1/2021"){document.write("<h2>"+"Leia: "+" Gên 31-32"+"</h2>")}
	if(str_data == "11/1/2021"){document.write("<h2>"+"Leia: "+" Gên 33-34"+"</h2>")}
	if(str_data == "12/1/2021"){document.write("<h2>"+"Leia: "+" Gên 35-37"+"</h2>")}
	if(str_data == "13/1/2021"){document.write("<h2>"+"Leia: "+" Gên 38-40"+"</h2>")}
	if(str_data == "14/1/2021"){document.write("<h2>"+"Leia: "+" Gên 41-42"+"</h2>")}
	if(str_data == "15/1/2021"){document.write("<h2>"+"Leia: "+" Gên 43-45"+"</h2>")}
	if(str_data == "16/1/2021"){document.write("<h2>"+"Leia: "+" Gên 46-48"+"</h2>")}
	if(str_data == "17/1/2021"){document.write("<h2>"+"Leia: "+" Gên 49-50"+"</h2>")}
	if(str_data == "18/1/2021"){document.write("<h2>"+"Leia: "+" Êx 1-4"+"</h2>")}
	if(str_data == "19/1/2021"){document.write("<h2>"+"Leia: "+" Êx 5-7"+"</h2>")}
	if(str_data == "20/1/2021"){document.write("<h2>"+"Leia: "+" Êx 8-10"+"</h2>")}
	if(str_data == "21/1/2021"){document.write("<h2>"+"Leia: "+" Êx 11-13"+"</h2>")}
	if(str_data == "22/1/2021"){document.write("<h2>"+"Leia: "+" Êx 14-15"+"</h2>")}
	if(str_data == "23/1/2021"){document.write("<h2>"+"Leia: "+" Êx 16-18"+"</h2>")}
	if(str_data == "24/1/2021"){document.write("<h2>"+"Leia: "+" Êx 19-21"+"</h2>")}
	if(str_data == "25/1/2021"){document.write("<h2>"+"Leia: "+" Êx 22-25"+"</h2>")}
	if(str_data == "26/1/2021"){document.write("<h2>"+"Leia: "+" Êx 26-28"+"</h2>")}
	if(str_data == "27/1/2021"){document.write("<h2>"+"Leia: "+" Êx 29-30"+"</h2>")}
	if(str_data == "28/1/2021"){document.write("<h2>"+"Leia: "+" Êx 31-33"+"</h2>")}
	if(str_data == "29/1/2021"){document.write("<h2>"+"Leia: "+" Êx 34-35"+"</h2>")}
	if(str_data == "30/1/2021"){document.write("<h2>"+"Leia: "+" Êx 36-38"+"</h2>")}
	if(str_data == "31/1/2021"){document.write("<h2>"+"Leia: "+" Êx 39-40"+"</h2>")}
	if(str_data == "1/2/2021"){document.write("<h2>"+"Leia: "+" Le 1-4"+"</h2>")}
	if(str_data == "2/2/2021"){document.write("<h2>"+"Leia: "+" Le 5-7"+"</h2>")}
	if(str_data == "3/2/2021"){document.write("<h2>"+"Leia: "+" Le 8-10"+"</h2>")}
	if(str_data == "4/2/2021"){document.write("<h2>"+"Leia: "+" Le 11-13"+"</h2>")}
	if(str_data == "5/2/2021"){document.write("<h2>"+"Leia: "+" Le 14-15"+"</h2>")}
	if(str_data == "6/2/2021"){document.write("<h2>"+"Leia: "+" Le 16-18"+"</h2>")}
	if(str_data == "7/2/2021"){document.write("<h2>"+"Leia: "+" Le 19-21"+"</h2>")}
	if(str_data == "8/2/2021"){document.write("<h2>"+"Leia: "+" Le 22-23"+"</h2>")}
	if(str_data == "9/2/2021"){document.write("<h2>"+"Leia: "+" Le 24-25"+"</h2>")}
	if(str_data == "10/2/2021"){document.write("<h2>"+"Leia: "+" Le 26-27"+"</h2>")}
	if(str_data == "11/2/2021"){document.write("<h2>"+"Leia: "+" Núm 1-3"+"</h2>")}
	if(str_data == "12/2/2021"){document.write("<h2>"+"Leia: "+" Núm 4-6"+"</h2>")}
	if(str_data == "13/2/2021"){document.write("<h2>"+"Leia: "+" Núm 7-9"+"</h2>")}
	if(str_data == "14/2/2021"){document.write("<h2>"+"Leia: "+" Núm 10-12"+"</h2>")}
	if(str_data == "15/2/2021"){document.write("<h2>"+"Leia: "+" Núm 13-15"+"</h2>")}
	if(str_data == "16/2/2021"){document.write("<h2>"+"Leia: "+" Núm 16-18"+"</h2>")}
	if(str_data == "17/2/2021"){document.write("<h2>"+"Leia: "+" Núm 19-21"+"</h2>")}
	if(str_data == "18/2/2021"){document.write("<h2>"+"Leia: "+" Núm 22-24"+"</h2>")}
	if(str_data == "19/2/2021"){document.write("<h2>"+"Leia: "+" Núm 25-27"+"</h2>")}
	if(str_data == "20/2/2021"){document.write("<h2>"+"Leia: "+" Núm 28-30"+"</h2>")}
	if(str_data == "21/2/2021"){document.write("<h2>"+"Leia: "+" Núm 31-32"+"</h2>")}
	if(str_data == "22/2/2021"){document.write("<h2>"+"Leia: "+" Núm 33-36"+"</h2>")}
	if(str_data == "23/2/2021"){document.write("<h2>"+"Leia: "+" De 1-2"+"</h2>")}
	if(str_data == "24/2/2021"){document.write("<h2>"+"Leia: "+" De 3-4"+"</h2>")}
	if(str_data == "25/2/2021"){document.write("<h2>"+"Leia: "+" De 5-7"+"</h2>")}
	if(str_data == "26/2/2021"){document.write("<h2>"+"Leia: "+" De 8-10"+"</h2>")}
	if(str_data == "27/2/2021"){document.write("<h2>"+"Leia: "+" De 11-13"+"</h2>")}
	if(str_data == "28/2/2021"){document.write("<h2>"+"Leia: "+" De 14-16"+"</h2>")}
	if(str_data == "1/3/2021"){document.write("<h2>"+"Leia: "+" De 17-19"+"</h2>")}
	if(str_data == "2/3/2021"){document.write("<h2>"+"Leia: "+" De 20-22"+"</h2>")}
	if(str_data == "3/3/2021"){document.write("<h2>"+"Leia: "+" De 23-26"+"</h2>")}
	if(str_data == "4/3/2021"){document.write("<h2>"+"Leia: "+" De 27-28"+"</h2>")}
	if(str_data == "5/3/2021"){document.write("<h2>"+"Leia: "+" De 29-31"+"</h2>")}
	if(str_data == "6/3/2021"){document.write("<h2>"+"Leia: "+" De 32"+"</h2>")}
	if(str_data == "7/3/2021"){document.write("<h2>"+"Leia: "+" De 33-34"+"</h2>")}
	if(str_data == "8/3/2021"){document.write("<h2>"+"Leia: "+" Jos 1-4"+"</h2>")}
	if(str_data == "9/3/2021"){document.write("<h2>"+"Leia: "+" Jos 5-7"+"</h2>")}
	if(str_data == "10/3/2021"){document.write("<h2>"+"Leia: "+" Jos 8-9"+"</h2>")}
	if(str_data == "11/3/2021"){document.write("<h2>"+"Leia: "+" Jos 10-12"+"</h2>")}
	if(str_data == "12/3/2021"){document.write("<h2>"+"Leia: "+" Jos 13-15"+"</h2>")}
	if(str_data == "13/3/2021"){document.write("<h2>"+"Leia: "+" Jos 16-18"+"</h2>")}
	if(str_data == "14/3/2021"){document.write("<h2>"+"Leia: "+" Jos 19-21"+"</h2>")}
	if(str_data == "15/3/2021"){document.write("<h2>"+"Leia: "+" Jos 22-24"+"</h2>")}
	if(str_data == "16/3/2021"){document.write("<h2>"+"Leia: "+" Jz 1-2"+"</h2>")}
	if(str_data == "17/3/2021"){document.write("<h2>"+"Leia: "+" Jz 3-5"+"</h2>")}
	if(str_data == "18/3/2021"){document.write("<h2>"+"Leia: "+" Jz 6-7"+"</h2>")}
	if(str_data == "19/3/2021"){document.write("<h2>"+"Leia: "+" Jz 8-9"+"</h2>")}
	if(str_data == "20/3/2021"){document.write("<h2>"+"Leia: "+" Jz 10-11"+"</h2>")}
	if(str_data == "21/3/2021"){document.write("<h2>"+"Leia: "+" Jz 12-13"+"</h2>")}
	if(str_data == "22/3/2021"){document.write("<h2>"+"Leia: "+" Jz 14-16"+"</h2>")}
	if(str_data == "23/3/2021"){document.write("<h2>"+"Leia: "+" Jz 17-19"+"</h2>")}
	if(str_data == "24/3/2021"){document.write("<h2>"+"Leia: "+" Jz 20-21"+"</h2>")}
	if(str_data == "25/3/2021"){document.write("<h2>"+"Leia: "+" Ru 1-4"+"</h2>")}
	if(str_data == "26/3/2021"){document.write("<h2>"+"Leia: "+" 1Sa 1-2"+"</h2>")}
	if(str_data == "27/3/2021"){document.write("<h2>"+"Leia: "+" 1Sa 3-6"+"</h2>")}
	if(str_data == "28/3/2021"){document.write("<h2>"+"Leia: "+" 1Sa 7-9"+"</h2>")}
	if(str_data == "29/3/2021"){document.write("<h2>"+"Leia: "+" 1Sa 10-12"+"</h2>")}
	if(str_data == "30/3/2021"){document.write("<h2>"+"Leia: "+" 1Sa 13-14"+"</h2>")}
	if(str_data == "31/3/2021"){document.write("<h2>"+"Leia: "+" 1Sa 15-16"+"</h2>")}
	if(str_data == "1/4/2021"){document.write("<h2>"+"Leia: "+" 1Sa 17-18"+"</h2>")}
	if(str_data == "2/4/2021"){document.write("<h2>"+"Leia: "+" 1Sa 19-21"+"</h2>")}
	if(str_data == "3/4/2021"){document.write("<h2>"+"Leia: "+" 1Sa 22-24"+"</h2>")}
	if(str_data == "4/4/2021"){document.write("<h2>"+"Leia: "+" 1Sa 25-27"+"</h2>")}
	if(str_data == "5/4/2021"){document.write("<h2>"+"Leia: "+" 1Sa 28-31"+"</h2>")}
	if(str_data == "6/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 1-2"+"</h2>")}
	if(str_data == "7/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 3-5"+"</h2>")}
	if(str_data == "8/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 6-8"+"</h2>")}
	if(str_data == "9/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 9-12"+"</h2>")}
	if(str_data == "10/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 13-14"+"</h2>")}
	if(str_data == "11/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 15-16"+"</h2>")}
	if(str_data == "12/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 17-18"+"</h2>")}
	if(str_data == "13/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 19-20"+"</h2>")}
	if(str_data == "14/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 21-22"+"</h2>")}
	if(str_data == "15/4/2021"){document.write("<h2>"+"Leia: "+" 2Sa 23-24"+"</h2>")}
	if(str_data == "16/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 1-2"+"</h2>")}
	if(str_data == "17/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 3-5"+"</h2>")}
	if(str_data == "18/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 6-7"+"</h2>")}
	if(str_data == "19/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 8"+"</h2>")}
	if(str_data == "20/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 9-10"+"</h2>")}
	if(str_data == "21/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 11-12"+"</h2>")}
	if(str_data == "22/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 13-14"+"</h2>")}
	if(str_data == "23/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 15-17"+"</h2>")}
	if(str_data == "24/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 18-19"+"</h2>")}
	if(str_data == "25/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 20-21"+"</h2>")}
	if(str_data == "26/4/2021"){document.write("<h2>"+"Leia: "+" 1Rs 22"+"</h2>")}
	if(str_data == "27/4/2021"){document.write("<h2>"+"Leia: "+" 2Rs 1-3"+"</h2>")}
	if(str_data == "28/4/2021"){document.write("<h2>"+"Leia: "+" 2Rs 4-5"+"</h2>")}
	if(str_data == "29/4/2021"){document.write("<h2>"+"Leia: "+" 2Rs 6-8"+"</h2>")}
	if(str_data == "30/4/2021"){document.write("<h2>"+"Leia: "+" 2Rs 9-10"+"</h2>")}
	if(str_data == "1/5/2021"){document.write("<h2>"+"Leia: "+" 2Rs 11-13"+"</h2>")}
	if(str_data == "2/5/2021"){document.write("<h2>"+"Leia: "+" 2Rs 14-15"+"</h2>")}
	if(str_data == "3/5/2021"){document.write("<h2>"+"Leia: "+" 2Rs 16-17"+"</h2>")}
	if(str_data == "4/5/2021"){document.write("<h2>"+"Leia: "+" 2Rs 18-19"+"</h2>")}
	if(str_data == "5/5/2021"){document.write("<h2>"+"Leia: "+" 2Rs 20-22"+"</h2>")}
	if(str_data == "6/5/2021"){document.write("<h2>"+"Leia: "+" 2Rs 23-25"+"</h2>")}
	if(str_data == "7/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 1-2"+"</h2>")}
	if(str_data == "8/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 3-5"+"</h2>")}
	if(str_data == "9/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 6-7"+"</h2>")}
	if(str_data == "10/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 8-10"+"</h2>")}
	if(str_data == "11/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 11-12"+"</h2>")}
	if(str_data == "12/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 13-15"+"</h2>")}
	if(str_data == "13/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 16-17"+"</h2>")}
	if(str_data == "14/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 18-20"+"</h2>")}
	if(str_data == "15/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 21-23"+"</h2>")}
	if(str_data == "16/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 24-26"+"</h2>")}
	if(str_data == "17/5/2021"){document.write("<h2>"+"Leia: "+" 1Cr 27-29"+"</h2>")}
	if(str_data == "18/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 1-3"+"</h2>")}
	if(str_data == "19/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 4-6"+"</h2>")}
	if(str_data == "20/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 7-9"+"</h2>")}
	if(str_data == "21/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 10-14"+"</h2>")}
	if(str_data == "22/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 15-18"+"</h2>")}
	if(str_data == "23/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 19-22"+"</h2>")}
	if(str_data == "24/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 23-25"+"</h2>")}
	if(str_data == "25/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 26-28"+"</h2>")}
	if(str_data == "26/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 29-30"+"</h2>")}
	if(str_data == "27/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 31-33"+"</h2>")}
	if(str_data == "28/5/2021"){document.write("<h2>"+"Leia: "+" 2Cr 34-36"+"</h2>")}
	if(str_data == "29/5/2021"){document.write("<h2>"+"Leia: "+" Esd 1-3"+"</h2>")}
	if(str_data == "30/5/2021"){document.write("<h2>"+"Leia: "+" Esd 4-7"+"</h2>")}
	if(str_data == "31/5/2021"){document.write("<h2>"+"Leia: "+" Esd 8-10"+"</h2>")}
	if(str_data == "1/6/2021"){document.write("<h2>"+"Leia: "+" Ne 1-3"+"</h2>")}
	if(str_data == "2/6/2021"){document.write("<h2>"+"Leia: "+" Ne 4-6"+"</h2>")}
	if(str_data == "3/6/2021"){document.write("<h2>"+"Leia: "+" Ne 7-8"+"</h2>")}
	if(str_data == "4/6/2021"){document.write("<h2>"+"Leia: "+" Ne 9-10"+"</h2>")}
	if(str_data == "5/6/2021"){document.write("<h2>"+"Leia: "+" Ne 11-13"+"</h2>")}
	if(str_data == "6/6/2021"){document.write("<h2>"+"Leia: "+" Est 1-4"+"</h2>")}
	if(str_data == "7/6/2021"){document.write("<h2>"+"Leia: "+" Est 5-10"+"</h2>")}
	if(str_data == "8/6/2021"){document.write("<h2>"+"Leia: "+" Jó 1-5"+"</h2>")}
	if(str_data == "9/6/2021"){document.write("<h2>"+"Leia: "+" Jó 6-9"+"</h2>")}
	if(str_data == "10/6/2021"){document.write("<h2>"+"Leia: "+" Jó 10-14"+"</h2>")}
	if(str_data == "11/6/2021"){document.write("<h2>"+"Leia: "+" Jó 15-18"+"</h2>")}
	if(str_data == "12/6/2021"){document.write("<h2>"+"Leia: "+" Jó 19-20"+"</h2>")}
	if(str_data == "13/6/2021"){document.write("<h2>"+"Leia: "+" Jó 21-24"+"</h2>")}
	if(str_data == "14/6/2021"){document.write("<h2>"+"Leia: "+" Jó 25-29"+"</h2>")}
	if(str_data == "15/6/2021"){document.write("<h2>"+"Leia: "+" Jó 30-31"+"</h2>")}
	if(str_data == "16/6/2021"){document.write("<h2>"+"Leia: "+" Jó 32-34"+"</h2>")}
	if(str_data == "17/6/2021"){document.write("<h2>"+"Leia: "+" Jó 35-38"+"</h2>")}
	if(str_data == "18/6/2021"){document.write("<h2>"+"Leia: "+" Jó 39-42"+"</h2>")}
	if(str_data == "19/6/2021"){document.write("<h2>"+"Leia: "+" Sal 1-8"+"</h2>")}
	if(str_data == "20/6/2021"){document.write("<h2>"+"Leia: "+" Sal 9-16"+"</h2>")}
	if(str_data == "21/6/2021"){document.write("<h2>"+"Leia: "+" Sal 17-19"+"</h2>")}
	if(str_data == "22/6/2021"){document.write("<h2>"+"Leia: "+" Sal 20-25"+"</h2>")}
	if(str_data == "23/6/2021"){document.write("<h2>"+"Leia: "+" Sal 26-31"+"</h2>")}
	if(str_data == "24/6/2021"){document.write("<h2>"+"Leia: "+" Sal 32-35"+"</h2>")}
	if(str_data == "25/6/2021"){document.write("<h2>"+"Leia: "+" Sal 36-38"+"</h2>")}
	if(str_data == "26/6/2021"){document.write("<h2>"+"Leia: "+" Sal 39-42"+"</h2>")}
	if(str_data == "27/6/2021"){document.write("<h2>"+"Leia: "+" Sal 43-47"+"</h2>")}
	if(str_data == "28/6/2021"){document.write("<h2>"+"Leia: "+" Sal 48-52"+"</h2>")}
	if(str_data == "29/6/2021"){document.write("<h2>"+"Leia: "+" Sal 53-58"+"</h2>")}
	if(str_data == "30/6/2021"){document.write("<h2>"+"Leia: "+" Sal 59-64"+"</h2>")}
	if(str_data == "1/7/2021"){document.write("<h2>"+"Leia: "+" Sal 65-68"+"</h2>")}
	if(str_data == "2/7/2021"){document.write("<h2>"+"Leia: "+" Sal 69-72"+"</h2>")}
	if(str_data == "3/7/2021"){document.write("<h2>"+"Leia: "+" Sal 73-77"+"</h2>")}
	if(str_data == "4/7/2021"){document.write("<h2>"+"Leia: "+" Sal 78-79"+"</h2>")}
	if(str_data == "5/7/2021"){document.write("<h2>"+"Leia: "+" Sal 80-86"+"</h2>")}
	if(str_data == "6/7/2021"){document.write("<h2>"+"Leia: "+" Sal 87-90"+"</h2>")}
	if(str_data == "7/7/2021"){document.write("<h2>"+"Leia: "+" Sal 91-96"+"</h2>")}
	if(str_data == "8/7/2021"){document.write("<h2>"+"Leia: "+" Sal 97-103"+"</h2>")}
	if(str_data == "9/7/2021"){document.write("<h2>"+"Leia: "+" Sal 104-105"+"</h2>")}
	if(str_data == "10/7/2021"){document.write("<h2>"+"Leia: "+" Sal 106-108"+"</h2>")}
	if(str_data == "11/7/2021"){document.write("<h2>"+"Leia: "+" Sal 109-115"+"</h2>")}
	if(str_data == "12/7/2021"){document.write("<h2>"+"Leia: "+" Sal 116-119:63"+"</h2>")}
	if(str_data == "13/7/2021"){document.write("<h2>"+"Leia: "+" Sal 119:64-176"+"</h2>")}
	if(str_data == "14/7/2021"){document.write("<h2>"+"Leia: "+" Sal 120-129"+"</h2>")}
	if(str_data == "15/7/2021"){document.write("<h2>"+"Leia: "+" Sal 130-138"+"</h2>")}
	if(str_data == "16/7/2021"){document.write("<h2>"+"Leia: "+" Sal 139-144"+"</h2>")}
	if(str_data == "17/7/2021"){document.write("<h2>"+"Leia: "+" Sal 145-150"+"</h2>")}
	if(str_data == "18/7/2021"){document.write("<h2>"+"Leia: "+" Pr 1-4"+"</h2>")}
	if(str_data == "19/7/2021"){document.write("<h2>"+"Leia: "+" Pr 5-8"+"</h2>")}
	if(str_data == "20/7/2021"){document.write("<h2>"+"Leia: "+" Pr 9-12"+"</h2>")}
	if(str_data == "21/7/2021"){document.write("<h2>"+"Leia: "+" Pr 13-16"+"</h2>")}
	if(str_data == "22/7/2021"){document.write("<h2>"+"Leia: "+" Pr 17-19"+"</h2>")}
	if(str_data == "23/7/2021"){document.write("<h2>"+"Leia: "+" Pr 20-22"+"</h2>")}
	if(str_data == "24/7/2021"){document.write("<h2>"+"Leia: "+" Pr 23-27"+"</h2>")}
	if(str_data == "25/7/2021"){document.write("<h2>"+"Leia: "+" Pr 28-31"+"</h2>")}
	if(str_data == "26/7/2021"){document.write("<h2>"+"Leia: "+" Ec 1-4"+"</h2>")}
	if(str_data == "27/7/2021"){document.write("<h2>"+"Leia: "+" Ec 5-8"+"</h2>")}
	if(str_data == "28/7/2021"){document.write("<h2>"+"Leia: "+" Ec 9-12"+"</h2>")}
	if(str_data == "29/7/2021"){document.write("<h2>"+"Leia: "+" Cân 1-8"+"</h2>")}
	if(str_data == "30/7/2021"){document.write("<h2>"+"Leia: "+" Is 1-4"+"</h2>")}
	if(str_data == "31/7/2021"){document.write("<h2>"+"Leia: "+" Is 5-7"+"</h2>")}
	if(str_data == "1/8/2021"){document.write("<h2>"+"Leia: "+" Is 8-10"+"</h2>")}
	if(str_data == "2/8/2021"){document.write("<h2>"+"Leia: "+" Is 11-14"+"</h2>")}
	if(str_data == "3/8/2021"){document.write("<h2>"+"Leia: "+" Is 15-19"+"</h2>")}
	if(str_data == "4/8/2021"){document.write("<h2>"+"Leia: "+" Is 20-24"+"</h2>")}
	if(str_data == "5/8/2021"){document.write("<h2>"+"Leia: "+" Is 25-28"+"</h2>")}
	if(str_data == "6/8/2021"){document.write("<h2>"+"Leia: "+" Is 29-31"+"</h2>")}
	if(str_data == "7/8/2021"){document.write("<h2>"+"Leia: "+" Is 32-35"+"</h2>")}
	if(str_data == "8/8/2021"){document.write("<h2>"+"Leia: "+" Is 36-37"+"</h2>")}
	if(str_data == "9/8/2021"){document.write("<h2>"+"Leia: "+" Is 38-40"+"</h2>")}
	if(str_data == "10/8/2021"){document.write("<h2>"+"Leia: "+" Is 41-43"+"</h2>")}
	if(str_data == "11/8/2021"){document.write("<h2>"+"Leia: "+" Is 44-47"+"</h2>")}
	if(str_data == "12/8/2021"){document.write("<h2>"+"Leia: "+" Is 48-50"+"</h2>")}
	if(str_data == "13/8/2021"){document.write("<h2>"+"Leia: "+" Is 51-55"+"</h2>")}
	if(str_data == "14/8/2021"){document.write("<h2>"+"Leia: "+" Is 56-58"+"</h2>")}
	if(str_data == "15/8/2021"){document.write("<h2>"+"Leia: "+" Is 59-62"+"</h2>")}
	if(str_data == "16/8/2021"){document.write("<h2>"+"Leia: "+" Is 63-66"+"</h2>")}
	if(str_data == "17/8/2021"){document.write("<h2>"+"Leia: "+" Je 1-3"+"</h2>")}
	if(str_data == "18/8/2021"){document.write("<h2>"+"Leia: "+" Je 4-5"+"</h2>")}
	if(str_data == "19/8/2021"){document.write("<h2>"+"Leia: "+" Je 6-7"+"</h2>")}
	if(str_data == "20/8/2021"){document.write("<h2>"+"Leia: "+" Je 8-10"+"</h2>")}
	if(str_data == "21/8/2021"){document.write("<h2>"+"Leia: "+" Je 11-13"+"</h2>")}
	if(str_data == "22/8/2021"){document.write("<h2>"+"Leia: "+" Je 14-16"+"</h2>")}
	if(str_data == "23/8/2021"){document.write("<h2>"+"Leia: "+" Je 17-20"+"</h2>")}
	if(str_data == "24/8/2021"){document.write("<h2>"+"Leia: "+" Je 21-23"+"</h2>")}
	if(str_data == "25/8/2021"){document.write("<h2>"+"Leia: "+" Je 24-26"+"</h2>")}
	if(str_data == "26/8/2021"){document.write("<h2>"+"Leia: "+" Je 27-29"+"</h2>")}
	if(str_data == "27/8/2021"){document.write("<h2>"+"Leia: "+" Je 30-31"+"</h2>")}
	if(str_data == "28/8/2021"){document.write("<h2>"+"Leia: "+" Je 32-33"+"</h2>")}
	if(str_data == "29/8/2021"){document.write("<h2>"+"Leia: "+" Je 34-36"+"</h2>")}
	if(str_data == "30/8/2021"){document.write("<h2>"+"Leia: "+" Je 37-39"+"</h2>")}
	if(str_data == "31/8/2021"){document.write("<h2>"+"Leia: "+" Je 40-42"+"</h2>")}
	if(str_data == "1/9/2021"){document.write("<h2>"+"Leia: "+" Je 43-44"+"</h2>")}
	if(str_data == "2/9/2021"){document.write("<h2>"+"Leia: "+" Je 45-48"+"</h2>")}
	if(str_data == "3/9/2021"){document.write("<h2>"+"Leia: "+" Je 49-50"+"</h2>")}
	if(str_data == "4/9/2021"){document.write("<h2>"+"Leia: "+" Je 51-52"+"</h2>")}
	if(str_data == "5/9/2021"){document.write("<h2>"+"Leia: "+" La 1-2"+"</h2>")}
	if(str_data == "6/9/2021"){document.write("<h2>"+"Leia: "+" La 3-5"+"</h2>")}
	if(str_data == "7/9/2021"){document.write("<h2>"+"Leia: "+" Ez 1-3"+"</h2>")}
	if(str_data == "8/9/2021"){document.write("<h2>"+"Leia: "+" Ez 4-6"+"</h2>")}
	if(str_data == "9/9/2021"){document.write("<h2>"+"Leia: "+" Ez 7-9"+"</h2>")}
	if(str_data == "10/9/2021"){document.write("<h2>"+"Leia: "+" Ez 10-12"+"</h2>")}
	if(str_data == "11/9/2021"){document.write("<h2>"+"Leia: "+" Ez 13-15"+"</h2>")}
	if(str_data == "12/9/2021"){document.write("<h2>"+"Leia: "+" Ez 16"+"</h2>")}
	if(str_data == "13/9/2021"){document.write("<h2>"+"Leia: "+" Ez 17-18"+"</h2>")}
	if(str_data == "14/9/2021"){document.write("<h2>"+"Leia: "+" Ez 19-21"+"</h2>")}
	if(str_data == "15/9/2021"){document.write("<h2>"+"Leia: "+" Ez 22-23"+"</h2>")}
	if(str_data == "16/9/2021"){document.write("<h2>"+"Leia: "+" Ez 24-26"+"</h2>")}
	if(str_data == "17/9/2021"){document.write("<h2>"+"Leia: "+" Ez 27-28"+"</h2>")}
	if(str_data == "18/9/2021"){document.write("<h2>"+"Leia: "+" Ez 29-31"+"</h2>")}
	if(str_data == "19/9/2021"){document.write("<h2>"+"Leia: "+" Ez 32-33"+"</h2>")}
	if(str_data == "20/9/2021"){document.write("<h2>"+"Leia: "+" Ez 34-36"+"</h2>")}
	if(str_data == "21/9/2021"){document.write("<h2>"+"Leia: "+" Ez 37-38"+"</h2>")}
	if(str_data == "22/9/2021"){document.write("<h2>"+"Leia: "+" Ez 39-40"+"</h2>")}
	if(str_data == "23/9/2021"){document.write("<h2>"+"Leia: "+" Ez 41-43"+"</h2>")}
	if(str_data == "24/9/2021"){document.write("<h2>"+"Leia: "+" Ez 44-45"+"</h2>")}
	if(str_data == "25/9/2021"){document.write("<h2>"+"Leia: "+" Ez 46-48"+"</h2>")}
	if(str_data == "26/9/2021"){document.write("<h2>"+"Leia: "+" Da 1-2"+"</h2>")}
	if(str_data == "27/9/2021"){document.write("<h2>"+"Leia: "+" Da 3-4"+"</h2>")}
	if(str_data == "28/9/2021"){document.write("<h2>"+"Leia: "+" Da 5-7"+"</h2>")}
	if(str_data == "29/9/2021"){document.write("<h2>"+"Leia: "+" Da 8-10"+"</h2>")}
	if(str_data == "30/9/2021"){document.write("<h2>"+"Leia: "+" Da 11-12"+"</h2>")}
	if(str_data == "1/10/2021"){document.write("<h2>"+"Leia: "+" Os 1-7"+"</h2>")}
	if(str_data == "2/10/2021"){document.write("<h2>"+"Leia: "+" Os 8-14"+"</h2>")}
	if(str_data == "3/10/2021"){document.write("<h2>"+"Leia: "+" Jl 1-3"+"</h2>")}
	if(str_data == "4/10/2021"){document.write("<h2>"+"Leia: "+" Am 1-5"+"</h2>")}
	if(str_data == "5/10/2021"){document.write("<h2>"+"Leia: "+" Am 6-9"+"</h2>")}
	if(str_data == "6/10/2021"){document.write("<h2>"+"Leia: "+" Obadias/Jonas"+"</h2>")}
	if(str_data == "7/10/2021"){document.write("<h2>"+"Leia: "+" Miq 1-7"+"</h2>")}
	if(str_data == "8/10/2021"){document.write("<h2>"+"Leia: "+" Naum/Habacuque"+"</h2>")}
	if(str_data == "9/10/2021"){document.write("<h2>"+"Leia: "+" Sofonias/Ageu"+"</h2>")}
	if(str_data == "10/10/2021"){document.write("<h2>"+"Leia: "+" Za 1-7"+"</h2>")}
	if(str_data == "11/10/2021"){document.write("<h2>"+"Leia: "+" Za 8-11"+"</h2>")}
	if(str_data == "12/10/2021"){document.write("<h2>"+"Leia: "+" Za 12-14"+"</h2>")}
	if(str_data == "13/10/2021"){document.write("<h2>"+"Leia: "+" Mal 1-4"+"</h2>")}
	if(str_data == "14/10/2021"){document.write("<h2>"+"Leia: "+" Mt 1-4"+"</h2>")}
	if(str_data == "15/10/2021"){document.write("<h2>"+"Leia: "+" Mt 5-7"+"</h2>")}
	if(str_data == "16/10/2021"){document.write("<h2>"+"Leia: "+" Mt 8-10"+"</h2>")}
	if(str_data == "17/10/2021"){document.write("<h2>"+"Leia: "+" Mt 11-13"+"</h2>")}
	if(str_data == "18/10/2021"){document.write("<h2>"+"Leia: "+" Mt 14-17"+"</h2>")}
	if(str_data == "19/10/2021"){document.write("<h2>"+"Leia: "+" Mt 18-20"+"</h2>")}
	if(str_data == "20/10/2021"){document.write("<h2>"+"Leia: "+" Mt 21-23"+"</h2>")}
	if(str_data == "21/10/2021"){document.write("<h2>"+"Leia: "+" Mt 24-25"+"</h2>")}
	if(str_data == "22/10/2021"){document.write("<h2>"+"Leia: "+" Mt 26"+"</h2>")}
	if(str_data == "23/10/2021"){document.write("<h2>"+"Leia: "+" Mt 27-28"+"</h2>")}
	if(str_data == "24/10/2021"){document.write("<h2>"+"Leia: "+" Mr 1-3"+"</h2>")}
	if(str_data == "25/10/2021"){document.write("<h2>"+"Leia: "+" Mr 4-5"+"</h2>")}
	if(str_data == "26/10/2021"){document.write("<h2>"+"Leia: "+" Mr 6-8"+"</h2>")}
	if(str_data == "27/10/2021"){document.write("<h2>"+"Leia: "+" Mr 9-10"+"</h2>")}
	if(str_data == "28/10/2021"){document.write("<h2>"+"Leia: "+" Mr 11-13"+"</h2>")}
	if(str_data == "29/10/2021"){document.write("<h2>"+"Leia: "+" Mr 14-16"+"</h2>")}
	if(str_data == "30/10/2021"){document.write("<h2>"+"Leia: "+" Lu 1-2"+"</h2>")}
	if(str_data == "31/10/2021"){document.write("<h2>"+"Leia: "+" Lu 3-5"+"</h2>")}
	if(str_data == "1/11/2021"){document.write("<h2>"+"Leia: "+" Lu 6-7"+"</h2>")}
	if(str_data == "2/11/2021"){document.write("<h2>"+"Leia: "+" Lu 8-9"+"</h2>")}
	if(str_data == "3/11/2021"){document.write("<h2>"+"Leia: "+" Lu 10-11"+"</h2>")}
	if(str_data == "4/11/2021"){document.write("<h2>"+"Leia: "+" Lu 12-13"+"</h2>")}
	if(str_data == "5/11/2021"){document.write("<h2>"+"Leia: "+" Lu 14-17"+"</h2>")}
	if(str_data == "6/11/2021"){document.write("<h2>"+"Leia: "+" Lu 18-19"+"</h2>")}
	if(str_data == "7/11/2021"){document.write("<h2>"+"Leia: "+" Lu 20-22"+"</h2>")}
	if(str_data == "8/11/2021"){document.write("<h2>"+"Leia: "+" Lu 23-24"+"</h2>")}
	if(str_data == "9/11/2021"){document.write("<h2>"+"Leia: "+" Jo 1-3"+"</h2>")}
	if(str_data == "10/11/2021"){document.write("<h2>"+"Leia: "+" Jo 4-5"+"</h2>")}
	if(str_data == "11/11/2021"){document.write("<h2>"+"Leia: "+" Jo 6-7"+"</h2>")}
	if(str_data == "12/11/2021"){document.write("<h2>"+"Leia: "+" Jo 8-9"+"</h2>")}
	if(str_data == "13/11/2021"){document.write("<h2>"+"Leia: "+" Jo 10-12"+"</h2>")}
	if(str_data == "14/11/2021"){document.write("<h2>"+"Leia: "+" Jo 13-15"+"</h2>")}
	if(str_data == "15/11/2021"){document.write("<h2>"+"Leia: "+" Jo 16-18"+"</h2>")}
	if(str_data == "16/11/2021"){document.write("<h2>"+"Leia: "+" Jo 19-21"+"</h2>")}
	if(str_data == "17/11/2021"){document.write("<h2>"+"Leia: "+" At 1-3"+"</h2>")}
	if(str_data == "18/11/2021"){document.write("<h2>"+"Leia: "+" At 4-6"+"</h2>")}
	if(str_data == "19/11/2021"){document.write("<h2>"+"Leia: "+" At 7-8"+"</h2>")}
	if(str_data == "20/11/2021"){document.write("<h2>"+"Leia: "+" At 9-11"+"</h2>")}
	if(str_data == "21/11/2021"){document.write("<h2>"+"Leia: "+" At 12-14"+"</h2>")}
	if(str_data == "22/11/2021"){document.write("<h2>"+"Leia: "+" At 15-16"+"</h2>")}
	if(str_data == "23/11/2021"){document.write("<h2>"+"Leia: "+" At 17-19"+"</h2>")}
	if(str_data == "24/11/2021"){document.write("<h2>"+"Leia: "+" At 20-21"+"</h2>")}
	if(str_data == "25/11/2021"){document.write("<h2>"+"Leia: "+" At 22-23"+"</h2>")}
	if(str_data == "26/11/2021"){document.write("<h2>"+"Leia: "+" At 24-26"+"</h2>")}
	if(str_data == "27/11/2021"){document.write("<h2>"+"Leia: "+" At 27-28"+"</h2>")}
	if(str_data == "28/11/2021"){document.write("<h2>"+"Leia: "+" Ro 1-3"+"</h2>")}
	if(str_data == "29/11/2021"){document.write("<h2>"+"Leia: "+" Ro 4-7"+"</h2>")}
	if(str_data == "30/11/2021"){document.write("<h2>"+"Leia: "+" Ro 8-11"+"</h2>")}
	if(str_data == "1/12/2021"){document.write("<h2>"+"Leia: "+" Ro 12-16"+"</h2>")}
	if(str_data == "2/12/2021"){document.write("<h2>"+"Leia: "+" 1Co 1-6"+"</h2>")}
	if(str_data == "3/12/2021"){document.write("<h2>"+"Leia: "+" 1Co 7-10"+"</h2>")}
	if(str_data == "4/12/2021"){document.write("<h2>"+"Leia: "+" 1Co 11-14"+"</h2>")}
	if(str_data == "5/12/2021"){document.write("<h2>"+"Leia: "+" 1Co 15-16"+"</h2>")}
	if(str_data == "6/12/2021"){document.write("<h2>"+"Leia: "+" 2Co 1-6"+"</h2>")}
	if(str_data == "7/12/2021"){document.write("<h2>"+"Leia: "+" 2Co 7-10"+"</h2>")}
	if(str_data == "8/12/2021"){document.write("<h2>"+"Leia: "+" 2Co 11-13"+"</h2>")}
	if(str_data == "9/12/2021"){document.write("<h2>"+"Leia: "+" Gál 1-6"+"</h2>")}
	if(str_data == "10/12/2021"){document.write("<h2>"+"Leia: "+" Ef 1-6"+"</h2>")}
	if(str_data == "11/12/2021"){document.write("<h2>"+"Leia: "+" Fil 1-4"+"</h2>")}
	if(str_data == "12/12/2021"){document.write("<h2>"+"Leia: "+" Col 1-4"+"</h2>")}
	if(str_data == "13/12/2021"){document.write("<h2>"+"Leia: "+" 1Te 1-5"+"</h2>")}
	if(str_data == "14/12/2021"){document.write("<h2>"+"Leia: "+" 2Te 1-3"+"</h2>")}
	if(str_data == "15/12/2021"){document.write("<h2>"+"Leia: "+" 1Ti 1-6"+"</h2>")}
	if(str_data == "16/12/2021"){document.write("<h2>"+"Leia: "+" 2Ti 1-4"+"</h2>")}
	if(str_data == "17/12/2021"){document.write("<h2>"+"Leia: "+" Tito/Filêmon"+"</h2>")}
	if(str_data == "18/12/2021"){document.write("<h2>"+"Leia: "+" He 1-6"+"</h2>")}
	if(str_data == "19/12/2021"){document.write("<h2>"+"Leia: "+" He 7-10"+"</h2>")}
	if(str_data == "20/12/2021"){document.write("<h2>"+"Leia: "+" He 11-13"+"</h2>")}
	if(str_data == "21/12/2021"){document.write("<h2>"+"Leia: "+" Tg 1-5"+"</h2>")}
	if(str_data == "22/12/2021"){document.write("<h2>"+"Leia: "+" 1Pe 1-5"+"</h2>")}
	if(str_data == "23/12/2021"){document.write("<h2>"+"Leia: "+" 2Pe 1-3"+"</h2>")}
	if(str_data == "24/12/2021"){document.write("<h2>"+"Leia: "+" 1Jo 1-5"+"</h2>")}
	if(str_data == "25/12/2021"){document.write("<h2>"+"Leia: "+" 2João/3João/Judas"+"</h2>")}
	if(str_data == "26/12/2021"){document.write("<h2>"+"Leia: "+" Ap 1-4"+"</h2>")}
	if(str_data == "27/12/2021"){document.write("<h2>"+"Leia: "+" Ap 5-9"+"</h2>")}
	if(str_data == "28/12/2021"){document.write("<h2>"+"Leia: "+" Ap 10-14"+"</h2>")}
	if(str_data == "29/12/2021"){document.write("<h2>"+"Leia: "+" Ap 15-18"+"</h2>")}
	if(str_data == "30/12/2021"){document.write("<h2>"+"Leia: "+" Ap 19-22"+"</h2>")}
	if(str_data == "31/12/2021"){document.write("<h2>"+"Leia: "+" Parabéns você leu a bíblia inteira"+"</h2>")}

function abrirmenu()
{
    document.getElementById("menu").style.width = "250px";
    document.getElementById("conteudo").style.display = "none";
}

function esconder()
{
    document.getElementById("menu").style.width = "0px";
    document.getElementById("conteudo").style.display = "block";
}