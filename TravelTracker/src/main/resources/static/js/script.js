window.addEventListener('load', function(e) {
	clearPage();
	init();
});

document.allForm.addEventListener('submit', function(e){
	clearPage();	
	displayAllTravel(e);
});

function clearPage(){
	let div = document.getElementById('travelData');
	while(div.firstElementChild){
		div.removeChild(div.firstElementChild);
	}
}

function init() {
	document.travelForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		console.log('Button clicked')
		var travelId = document.travelForm.travelId.value;
		console.log(travelId);
		if (!isNaN(travelId) && travelId > 0) {
			getTravel(travelId);

		}
	});
}
function getTravel(travelId) {
	clearPage();
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/travel/' + travelId, true);
	xhr.onreadystatechange = function() {
		let travel = document.getElementById('travelData');
		let header2 = document.createElement('h2');
		if (xhr.readyState === 4 && xhr.status < 400) {
			var obj = JSON.parse(xhr.responseText);
			displayTravel(obj);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			header2.textContent = 'Travel Not Found';
			travel.appendChild(header2);
		}
	};
	xhr.send(null);
}
function displayTravel(travel){
	clearPage();
	
	//Display Travel information
	let div = document.getElementById('travelData');
	  let h2 = document.createElement('h2');
	  let ul = document.createElement('ul');
	  let li = document.createElement('li');
	  let li2 = document.createElement('li');
	  let block = document.createElement('blockquote');
	  h2.textContent = travel.name;
	  div.appendChild(h2);
	  
	  li.textContent = travel.distance;
		ul.appendChild(li);

		li2.textContent = travel.vehicle;
		ul.appendChild(li2);

		block.textContent = travel.desc;
		div.appendChild(block);

		div.appendChild(ul);
		
		//Create a delete button
		let form = document.createElement('form');
		form.name = 'deleteForm';
		form.id = 'deleteForm';
		let input = document.createElement('input');
		input.type = 'submit';
		input.name = 'submit';
		input.value = 'Delete Travel';
		div.appendChild(form);
		form.appendChild(input);
		
		document.deleteForm.addEventListener('submit', function(e){
			clearPage();
			e.preventDefault();
			console.log('I AM HERE')
			deleteTravel(travel.id);
		});
		
		//break row and insert an Update header
		let br = document.createElement('br');
		let header2 = document.createElement('h2');
		header2.textContent = 'Update Travel';
		div.appendChild(br);
		div.appendChild(header2);
		
		//break row
		let updateForm = document.createElement('form');
		updateForm.name = 'updateForm';
		updateForm.id = 'updateForm';
		div.appendChild(updateForm);
		
		//create input box for name of location
		let inputName = document.createElement('input');
		inputName.type = 'text';
		inputName.name = 'name';
		inputName.placeholder = 'Location name';
		updateForm.appendChild(inputName);
		
		//break row
		let br2 = document.createElement('br');
		updateForm.appendChild(br2);
		
		//create input box for travel description
		let inputDesc = document.createElement('input');
		inputDesc.type = 'text';
		inputDesc.name = 'description';
		inputDesc.placeholder = 'Description of the travel';
		updateForm.appendChild(inputDesc);
		
		//break row
		let br3 = document.createElement('br');
		updateForm.appendChild(br3);
		
		//input for Travel Distance
		let inputDistance = document.createElement('input');
		inputDistance.type = 'number';
		inputDistance.name = 'distance';
		inputDistance.placeholder = 'Distance in Miles';
		updateForm.appendChild(inputDistance);
		
		//break row
		let br4 = document.createElement('br');
		updateForm.appendChild(br4);
		
		//create input box for vehicle used
		let selectVehicle = document.createElement('select');
		selectVehicle.name = 'vehicle'
		
		//select for honda civic
		let civic = document.createElement('option');
		civic.value = 'Honda Civic';
		civic.textContent = 'Honda Civic';
		selectVehicle.appendChild(civic);
		
		//select for honda accord
		let accord = document.createElement('option');
		accord.value = 'Honda Accord';
		accord.textContent = 'Honda Civic';
		selectVehicle.appendChild(accord);
		
		//select for Toyota Camry
		let camry = document.createElement('option');
		camry.value = 'Toyota Camry';
		camry.textContent = 'Toyota Camry';
		selectVehicle.appendChild(camry);
		
		//select for Ford Mustang
		let mustang = document.createElement('option');
		mustang.value = 'Ford Mustang';
		mustang.textContent = 'Ford Mustang';
		selectVehicle.appendChild(mustang);
		
		//select for Ford F150
		let f150 = document.createElement('option');
		f150.value = 'Ford F150';
		f150.textContent = 'Ford F150';
		selectVehicle.appendChild(f150);
		
		//Add the select to form
		updateForm.appendChild(selectVehicle);
		
		//break row
		let br5 = document.createElement('br');
		updateForm.appendChild(br5);
		
		//Create an update button
		let updateInput = document.createElement('input');
		updateInput.type = 'submit';
		updateInput.name = 'submit';
		updateInput.value = 'Update Travel';
		updateForm.appendChild(updateInput);
		
		document.updateForm.addEventListener('submit', function(e){
			e.preventDefault();
			updateTravel(travel);
			clearPage();
		});
		
}
function deleteTravel(travelId){
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/travel/' + travelId, true);
	xhr.onreadystatechange = function() {
		let travel = document.getElementById('travelData');
		let header2 = document.createElement('h2');
		if (xhr.readyState === 4 && xhr.status < 400) {
			header2.textContent = 'Travel Deleted';
			travel.appendChild(header2);	
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			header2.textContent = 'Travel Not Found';
			travel.appendChild(header2);
		}
	};
	xhr.send(null);
	
}
function displayAllTravel(e) {
	e.preventDefault();
	let total = 0;
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/travel', true);

	xhr.onreadystatechange = function() {
		let travel = document.getElementById('travelData');
		let header2 = document.createElement('h2');
		if (xhr.readyState === 4 && xhr.status < 400) {
			var obj = JSON.parse(xhr.responseText);
			obj.forEach(function(val, index, array) {
				 total = obj.reduce((dis, trav) => {
					if(trav.distance){
						dis += trav.distance;
					}
					return dis;
				}, 0);
				 console.log(total)
				let header = document.createElement('h3');
				let ul = document.createElement('ul');
				let li = document.createElement('li');
				let li2 = document.createElement('li');
				let block = document.createElement('blockquote');
				
				header.textContent = val.name;
				travel.appendChild(header);

				li.textContent = val.distance;
				ul.appendChild(li);

				li2.textContent = val.vehicle;
				ul.appendChild(li2);

				block.textContent = val.desc;
				travel.appendChild(block);

				travel.appendChild(ul);
				
				header.addEventListener('click', function(){
					clearPage();
					getTravel(val.id);	
				});
				
				
				
			});
			let form = document.createElement('form');
			form.name = 'totalDistanceTraveled';
			form.id = 'totalDistanceTraveled';
			travel.appendChild(form);
			
			let input = document.createElement('input');
			input.type = 'submit';
			input.name = 'submit';
			input.value = 'Total Distance Traveled';
			form.appendChild(input);
			
			document.getElementById('totalDistanceTraveled').addEventListener('submit', function(e){
				e.preventDefault();
				clearPage();
				totalDistanceTraveled(total);
			});
			
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			header2.textContent = 'Film Not Found';
			travel.appendChild(header2);
		}

	};
	xhr.send(null);
}
document.addForm.addEventListener('submit', createTravel);
function createTravel(e){
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/travel', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		let travel = document.getElementById('travelData');
		let header2 = document.createElement('h2');
		if (xhr.readyState === 4 && xhr.status < 400) {
			var obj = JSON.parse(xhr.responseText);
			displayTravel(obj);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			header2.textContent = 'Travel Not Found';
			travel.appendChild(header2);
		}
	};
	let form = document.addForm;
	let newTravel = {
	    name: form.name.value,
	    desc: form.desc.value,
	    vehicle: form.vehicle.value,
	    distance: form.distance.value
	   
	};
	xhr.send(JSON.stringify(newTravel));
}
function updateTravel(travel){
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/travel/' + travel.id, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		let travel = document.getElementById('travelData');
		let header2 = document.createElement('h2');
		if (xhr.readyState === 4 && xhr.status < 400) {
			var obj = JSON.parse(xhr.responseText);
			displayTravel(obj);
		}
		
		if (xhr.readyState === 4 && xhr.status >= 400) {
			header2.textContent = 'Travel Not Found';
			travel.appendChild(header2);
		}
	};
	let updateForm = document.getElementById('updateForm');
	let newTravel = {
		id:	travel.id,
	    name: updateForm.name.value,
	    desc: updateForm.description.value,
	    vehicle: updateForm.vehicle.value,
	    distance: updateForm.distance.value
	   
	};
	xhr.send(JSON.stringify(newTravel));
	displayTravel(newTravel);
}

function totalDistanceTraveled(travel){
	console.log("TRAEL", travel);
	let travelData = document.getElementById('travelData');
	let h2 = document.createElement('h2');
	h2.textContent = 'I have traveled ' + travel + ' miles in total';
	travelData.append(h2);
	
}

