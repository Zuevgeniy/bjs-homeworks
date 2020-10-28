function  getSolutions(a, b, c) {
    let x1 = '';
    let x2 = '';
    let D = b**2 - 4 * a * c;
    if (D < 0) {
      return {
        D: D
      };
    } else if (D == 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      return {
        roots: [x1],
        D: D
      };
    } else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a)
      x2 = (-b - Math.sqrt(D)) / (2*a);
      return {
        roots: [x1, x2],
        D: D
      };

   }

}

function showSolutionsMessage(a, b, c) {
  let result =  getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
  console.log("Уравнение не имеет вещественных корней")
  } else if (result.D == 0) {
       console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
  } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)

  }

}

showSolutionsMessage(1, -4, 3);

console.log();



function getAverageScore(data) {
	let result = {};

	for (let subject in data) {
		result[subject] = getAverageMark(data[subject]);
	}

	if (result == {}) result.average = 0;
	else result.average = getAverageMark(result);
	return result;
}
function getAverageMark(marks) {
		let total = 0;
		let i = 0;

		for (let mark in marks) {
			total = total + Number(marks[mark]);
			i++;
		}

		if (i == 0) return 0;
		return total/i;
	}
