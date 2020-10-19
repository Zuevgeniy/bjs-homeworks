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
      let allAverage = 0;
      let objectLength  = 0;
      for ( let averageMark in data ) {
        let value = data[ averageMark ];
        let sumResult = 0;
        for (let i = 0; i < value.length; i++) {
          sumResult = sumResult + value[i];
        }
        data[ averageMark ] = sumResult / value.length;
        allAverage = allAverage + data[ averageMark ];
        objectLength++
        data.average = allAverage / objectLength;
      }
      return data

    }

    console.log(getAverageScore({
      algebra: [3,4,5,4,5],
      music: [3,4,5],
      chemistry: [3,2,4,5],
      geometry: [3,4,5,4,5],
      russian: [3],
      physics: [3,4,4,5],
      english: [3,4,5],
      poetry: [3,4,5,2,5],
      french: [3,3,4,5],
      geography: [3,4,5]

    }));



console.log();
