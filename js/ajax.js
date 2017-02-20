	const mLists = {}; //object sem inniheldur upplýsingar úr öllum render type 
	function renderType(listType, APIPath) {
		//MODB api
		var r = new XMLHttpRequest(); 
		r.open("GET", 'https://api.themoviedb.org/3'+ APIPath +'?api_key=e72b9a3547c05a93b2bd985d1db338fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', true);
		r.onreadystatechange = function () {
			if (r.readyState != 4 || r.status != 200) return;
		//  alert("Success: " + r.responseText);
			const response = JSON.parse(r.responseText);

			//console.log(response);
			const movieList = response;
			mLists[listType] = response.results;

			const mpmovie = new Movie(listType, movieList);
			mpmovie.render();

		};
		r.send();
	}


const mLists = {}; //object sem inniheldur upplýsingar úr öllum render type 

function renderType(listType, APIPath) {
	//MODB api
	var r = new XMLHttpRequest(); 
	r.open("GET", 'https://api.themoviedb.org/3'+ APIPath +'?api_key=e72b9a3547c05a93b2bd985d1db338fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', true);
	r.onreadystatechange = function () {
	  if (r.readyState != 4 || r.status != 200) return;
	//  alert("Success: " + r.responseText);
		const response = JSON.parse(r.responseText);

		//console.log(response);
		const movieList = response;
		mLists[listType] = response.results;
			
	
		const mpmovie = new Movie(listType, movieList);
		mpmovie.render();
	
		
	};
	r.send();

}

// Render Popular
renderType('popular', '/discover/movie');

	// Render Popular
	renderType('popular', '/discover/movie');


	// Render Comedy
	renderType('comedy', '/genre/35/movies');

	// Render Romance
	renderType('romance', '/genre/10749/movies');

	// Render Action
	renderType('action', '/genre/28/movies');







/*---Kvikmyndir.is apinn virkar ekki---*/
//kvikmyndir.is api
var AJAX = new XMLHttpRequest();
AJAX.open("GET", "http://api.kvikmyndir.is/movies", true); 
// alltaf "GET", - hér skiptir maður út movies fyrir það sem maður vill ná í úr apanum
AJAX.setRequestHeader("x-access-token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGExYTBjYWQxM2U2YmQ4NzJlZjZkZjIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhyZWZuYSBLcmlzdGJqw7ZybnNkw7N0dGlyIiwiZW1haWwiOiJocmVmbmF0aG9yZXlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJocmVmbmF0aCIsInBhc3N3b3JkIjoiJDJhJDA4JHdrRXFFczZUb2R6cjc4LkQ2dFhvT2VnLm9EWmYuRUljWm5NODd0OERBL2g5YmlVTzVoRWRxIiwiZG9tYWluIjoidmVmc2tvbGkuaXMiLCJtZXNzYWdlIjoic21hbGwgc2Nob29sIHByb2RqZWN0IiwiaWF0IjoxNDg2OTg3NDc5LCJleHAiOjE0ODcwNzM4Nzl9.yyipkgLXOypMm2u9hvZWcR50rwsfFhU9yJgewaBKLMc"); 
// key númerið sem maður fær
AJAX.onreadystatechange = function() {
	if(AJAX.readyState != 4 || AJAX.status != 200) { // 4 - svar frá servernum og fer niður í const response...verður að vera 200 til að fá upplýsingarnar úr apanaum
		return;
	}
	const response = JSON.parse(AJAX.responseText) // const því innihaldið breytist ekki
	// data = AJAX.responseText;
	console.log(response);
};
	