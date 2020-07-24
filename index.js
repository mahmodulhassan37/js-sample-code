var rect = {
	perimeter:(x,y)=>(2*(x+y)),
	area:(x,y)=>(x*y)
};

function solveReact(l,b) {
	console.log("solving for rectangle with l=" +i+ "and b=" +b );
	if (l<=0 || b<=0)
		console.log("rectangle dimentions should be greater than zero:l=" +l+ "and b=" +b);
	else{
		console.log("the area of the rectangle is " + rect.area(l,b));
		console.log ("the perimeter of the rectangle is " + rect.perimeter(l,b));
	}
	// body...
}

solveReact(2,4);
solveReact(3,5);
solveReact(0,5);
solveReact(-3,5);

