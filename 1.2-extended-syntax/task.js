function getResult(a,b,c){

    let discr = b**2 - 4 * a * c;
    let x = [];

    if (discr > 0) {
    	let x1 = (-b + discr**0.5)/(2 * a);
    	let x2 = (-b - discr**0.5)/(2 * a);

    	x.push(x1, x2);
    }

    else if (discr == 0) {
    	x.push(-b / (2 * a));
    }

    return x;
}

function getAverageMark(marks){


    let len = marks.length;

    if (len > 0) {

    	if (len > 5) {

    		marks.splice(len - 5);
    		len = 5;
    	}

    	let total = 0;
    	for (let mark of marks) {
    		total = total + mark;
    	}

    	return total/len;
    }

	else return 0;
}
