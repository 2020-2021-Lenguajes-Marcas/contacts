function newContact() {
	var nameInput=document.getElementById("name");
	var phoneInput=document.getElementById("phone");
	var contactJson={name:nameInput.value, phone:phoneInput.value};
	addContact(contactJson);
	document.getElementById("formulario").reset();
}

function addContact(contact) {
	// Se selecciona la tabla que vamos a modificar
	var contactsTable = document.getElementById("contacts");

	// Se crea el td con el nombre
	var nameTd=document.createElement("td"); 
	nameTd.appendChild(document.createTextNode(contact.name)); // 1
	
	// Se crea el td con el teléfono
	var phoneTd=document.createElement("td");
	phoneTd.appendChild(document.createTextNode(contact.phone)); // 2
	
	// Se crea el tr con el td del nombre y el del telefono
	var contactTr=document.createElement("tr"); // 3
	contactTr.appendChild(nameTd); // 4
	contactTr.appendChild(phoneTd); // 5

	// Se añade el tr a la tabla
	contactsTable.appendChild(contactTr);
}
