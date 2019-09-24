function adicionarEvento(local, data) {
	axios({
		method: 'post',
		url: 'http://localhost:8000/gigy/parties',
		headers: {
		  'Authorization': 'Bearer 8977fcb6-da71-4089-8a61-3a563c418aae'
		},
		data: {
			"location": local.value === "" ? "local" : local.value,
			"date": data.value // no banco está como timestamp
		},
		json: true
	}).then(function (response) {		 
		 if (response.status === 201) {
			 alert("Evento adicionado com sucesso!");
			 location.reload();
		 } else {
			 console.log(response);
		 }
	}).catch(function (error) {
		 console.log(error);
	});
}

function listarEvento() {
//	document.getElementById("eventos").style.display = "block";
	
//	if(!document.getElementById("eventos__conteudo").hasChildNodes()) {
		axios({
		  method: 'get',
		  url: 'http://localhost:9090/eventos',
		  headers: {
	          'Authorization': 'Bearer 8977fcb6-da71-4089-8a61-3a563c418aae'
	      },
	      json: true
		}).then(function (response) {
			console.log(response.data);
			
//			$.each(response.data, function(key, value) {
//				$("#eventos__conteudo").append(`
//						<tr>
//							<td>${value.location}</td>
//							<td>${value.date}</td>
//							<td>
//								<a href='javascript:;' onclick=atualizarEvento(${value.id})>
//									Atualizar
//								</a>
//							</td>
//							<td>
//								<a href='javascript:;' onclick=excluirEvento(${value.id})>
//									Excluir
//								</a>
//							</td>
//						</tr>
//					`
//			    );
//			});
			
		}).catch(function (error) {
		  console.log(error);
		});
//	}
}

var recuperaIdEvento = 0;
function atualizarEvento(id) {
	document.getElementById("add_eventos").style.display = "block";
	document.getElementById("btn_atualiza_eventos").style.display = "inline";
	recuperaIdEvento = id;
}

function salvarAtualizarEvento(local, data) {
	axios({
		method: 'put',
		url: 'http://localhost:8000/gigy/parties/' + recuperaIdEvento,
		headers: {
		  'Authorization': 'Bearer 8977fcb6-da71-4089-8a61-3a563c418aae'
		},
		data: {
			"location": local.value === "" ? "local" : local.value,
			"date": data.value // no banco está como timestamp
		},
		json: true
	}).then(function (response) {
		 alert("Evento atualizado com sucesso!");
		 location.reload();
	}).catch(function (error) {
		 console.log(error);
	});
}

function excluirEvento(id) {
	axios({
		method: 'delete',
		url: 'http://localhost:8000/gigy/parties/' + id,
		headers: {
		  'Authorization': 'Bearer 8977fcb6-da71-4089-8a61-3a563c418aae'
		},
		json: true
	}).then(function (response) {
		 alert("Evento excluído com sucesso!");
		 location.reload();
	}).catch(function (error) {
		 console.log(error);
	});
}

listarEvento();




