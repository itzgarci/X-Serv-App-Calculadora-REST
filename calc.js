 var numero1 = 0;
 var numero2 = 0;
 var operacion;
 var result;
 
 $(document).ready(function(){
	 $("button").click(function(){
		 var a = $(this).attr("value");
		 if (($(this).attr("id") != "op")  && ($(this).attr("id") != "igual") && ($(this).attr("id") != "C") ){
			  document.getElementById("marcador").value = document.getElementById("marcador").value + a;
			 
		 }else{
			  
			 if($(this).attr("id") == "op"){
				 
				numero1 = document.getElementById("marcador").value;
				 document.getElementById("marcador").value = " ";
				 operacion = a;
				
				
			 }else if($(this).attr("id") == "igual"){
				 numero2 = document.getElementById("marcador").value;
				 if(operacion == "+"){
					 result = parseFloat(numero1) + parseFloat(numero2);
				 }else if(operacion == "-"){
					result = numero1 - numero2;
				 }else if(operacion == "*"){
					result = numero1 * numero2;
				 }else if(operacion == "/"){
					 result = numero1 / numero2;
				 }	 
				 document.getElementById("marcador").value = result;
				 numero1 = 0;
				 numero2 = 0;
			 }else{
				  document.getElementById("marcador").value = " ";
				 numero1 = 0;
				 numero2 = 0;
				 
			 }
			 
		 }
		
	 });	 
	 
 });