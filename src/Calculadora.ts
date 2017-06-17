//Funções básicas de uma calculadora
class Calculadora{
	constructor(){}

	add(n1: number, n2: number): number{
		var result: number = n1 + n2;
		return result;
	}

	sub(n1: number, n2: number): number{
		var result: number = n1 - n2;
		return result;
	}

	mul(n1: number, n2: number): number{
		var result: number = n1 * n2;
		return result;
	}

	div(n1: number, n2: number): number{
		var result: number = n1 / n2;
		return result;
	}

	sin(n: number){}

	cos(n: number){}
}
