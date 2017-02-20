$(".rating-slider")
    .slider({
				min: 0,
				max: 10,
				range: true,
				values: [0,10]
	
		})
    .slider("pips", {
        first: "lable",
				last: "lable",
				rest: false,
				step: 5

				
    })
    .slider("pips", {
        first: "lable",
				last: "lable",
				rest: false,
				step: 5
				
				
    })
    .slider("float", {
        handle: true
    });

$(".year-slider")
    .slider({
				min: 1888,
				max: 2017,
				range: true,
				values: [1888,2017]
	
		})
    .slider("pips", {
        first: "lable",
				last: "lable",
				rest: false,
				step: 5
				
    })
    .slider("float", {
        handle: true

        
    });


@media all and (max-width: 600px) { 


}









