//function sem virkjast þegar smellt er á mynd í slider
function openMovieModal(id, listType){ // það sem er inn í sviganum er objects
	//console.log(listType,mLists);
	const movie = mLists[listType].filter(mov => mov.id ===id)[0]; // filter = býr til nýtt array með öllum upplýsingum, sem standast þær kröfur sem function-ið biður um. [0] = erum bara að leita að fyrsta í röðinni
	console.log("mlists inniheldur: ", mLists);
	console.log("movie inniheldur: ", movie);
	//console.log(id);
	//console.log(movie.id);
	
	//$('#modalContent').empty(); // verður fyrst að tæma modal-ið því annars bætast nýjar upplýsingar við þær gömlu - þarf ekki þessa skipun með því að bæta við html í línu fyrir neðan
	$('#modalContent').html('<div class="hk-cardTitle"><h1>' + movie.title + '</h1></div>'); // nær í titil	
	$('#modalContent').append('<div class="hk-undertitle">' + movie.genre_ids + '</div>');  // nær í genre
	$('#modalContent').append('<div class="hk-ratingCircle">' + '<h5>' + movie.vote_average + '</h5></div>'); // append límir upplýsingar við upplýsingar // nær í einkun
	$('#modalContent').append ('<img class="hk-card img" + src="https://image.tmdb.org/t/p/w780' + movie.poster_path + '">' + '</img>'); // nær í réttar myndir
	$('#movieModal').modal('toggle') //toogle = show() is run if an element is hidden. hide() is run if an element is visable


// þegar smellt er á modalContent  opnast about síðan 
	$( '#modalContent' ).click(function() {
		window.location.href='about-movie.html'; 	
	});
}


class Movie {
  constructor (listType, movieList) { //það sem er í sviganum er objects
		this.listType = listType;
		this.movieList = movieList;
		}
	
		findGenre(ids){
			let genre = []; // arrow og for loop a vinna saman
				for(var i = 0; i < ids.length; i++){
					genre.push(arrayOfGenres.filter(function(item){ //væri hægt að beyta þessu í arrow function
						return item.id == ids[i]; //returnar objectinu sem hefur sama id og við erum að leita að
					})[0].name); //erum bara að leita að einu í einu
				}
			
			return genre;
		}
	
    render() {
    	let listContainerDOM = document.getElementById(this.listType); 
      	for( var i = 0; i < this.movieList.results.length; i++){
      		let moviediv = document.createElement("div")
      		
					moviediv.className = "slide-single"; //stakt card í myndaslider
      		moviediv.innerHTML = 
						'\<div id="' + this.movieList.results[i].id 
					+ '" onclick="openMovieModal(' + this.movieList.results[i].id //þegar smellt er á mynd virkjast openMovieModal function-ið
					+ ",'" + this.listType + "'" + ')" class="hk-card">\
					<img class="hk-card img" src="https://image.tmdb.org/t/p/w780' + this.movieList.results[i].poster_path + '">\
					<div class="hk-cardTitle">\
						<h2>' + this.movieList.results[i].title + '</h2>\
					</div>\
					<div class="hk-undertitle">\
						<h4>' + this.findGenre(this.movieList.results[i].genre_ids) + '</h4>\
					</div>\
					<div class="hk-ratingCircle">\
						<h5>' + this.movieList.results[i].vote_average + '</h5>\
					</div>\
				</div>';
      		//moviediv.text = "Movie Title: " + this.movieList.results[i].title;
      		listContainerDOM.appendChild(moviediv);
      	}
    //myndasliderinn
      	$(listContainerDOM).slick({
					dots: true,
					infinite: true,
					speed: 400,
					slidesToShow: 4,
					slidesToScroll: 4,
					focusOnSelect: false,
					arrows: true,
					
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								infinite: true,
								dots: true,
								arrows: true,
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2.03, // sést aðeins í næstu mynd
								slidesToScroll: 2,
								infinite: true,
								dots: false,
								arrows: false,
							}
						},
						{
							breakpoint: 480,
							settings: {
							slidesToShow: 1.03,
							slidesToScroll: 1,
							dots: false,
							arrows: false
							}
						}
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]

		});

    }	
	
	
} 

//klassi fyrir genre array 
class Genre {
	constructor (result) { //constructor með parameter
		this.id = result.id;
		this.name = result.name;
		return this; //getter 
	}
														
}


// klasi auka

//class MovieBox {
	//constructor (title, year, genre, ratingLevel) { //constructor með parameters
		//this.title = data.title // title er property
		//this.year = data.year // year er property
		//this.genre = data.genre // title er property
		//this.ratingLevel = data.ratingLevel // ratingLevel er property
	//}


// method er bara function sem tilheyrir klasanum
	//genreOfMovie( genre) {
		//console.log (this.genre + "bestu myndirnar")

	//}
//} 




