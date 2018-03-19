var TriangleArea1 = getTriangleArea(10, 15),
	TriangleArea2 = getTriangleArea(8, 4),
	TriangleArea3 = getTriangleArea(10, 20),
	TriangleArea4 = getTriangleArea(0, 20),
	TriangleArea5 = getTriangleArea(9, -3)

function getTriangleArea(a,h) {
	if ( a <= 0 || h <= 0 ) {
		console.log('wrong entry')
	} else {
		console.log(a*h/2)
	}
}
