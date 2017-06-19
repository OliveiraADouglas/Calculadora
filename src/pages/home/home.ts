import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})

export class HomePage {
  n1: number = 0;
  n2: number = 0;
  operacao: boolean = false; //se o botao de alguma operacao foi pressionado, entao true. Se estiver verdadeiro, significa que o primeiro numero ja foi inserido e agora eh para armazenar o segundo
  decimal: boolean = false; //marca que o número inserido já é decimal, portanto não pode ser inserido outro ponto
  tela: string = "";
  operacaoEscolhida: string = "";
//  numeroPi: string = "3.1415926";
  operacoesFeitas: string [] = []; //guarda as operacoes efetuadas
  quantOperacoesFeitas: number = 0; //guarda a quantidade de operacoes feitas
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) { }

  insereDigito(n: string){
    if (this.tela == "" && n == "."){
      // se a tela estiver vazia e um ponto for inserido
      this.tela = "0";
      this.decimal = true;
    }

    else if (this.tela == "" && n == "0"){return } //se a tela estiver vazia e o zero for inserido

    else if (!this.decimal && n == "."){
      this.decimal = true;
    }

    else if (this.decimal && n == "."){return }

    this.tela = this.tela + n;
  }

  removeDigito(){
    this.tela = this.tela.substring(0,(this.tela.length - 1));
  }

  resetaTela(){
    this.tela = "";
    this.decimal = false;
    this.operacao = false;
  }

  calcula(){
    if(this.operacao){ //só vai calcular se alguma operacao foi escolhida
      var resultado: number = 0;

      this.n2 = +this.tela; //guarda o valor de n2

      if(this.operacaoEscolhida == "+"){
        resultado = this.add(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "-"){
        resultado = this.sub(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "*"){
        resultado = this.mul(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "/"){
        resultado = this.div(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "sin"){
        resultado = this.sin(this.n1);
      }
      else if(this.operacaoEscolhida == "cos"){
        resultado = this.cos(this.n1);
      }

      //guarda a operacao no vetor
      if (this.operacaoEscolhida == "sin")
        this.operacoesFeitas[this.quantOperacoesFeitas] = this.operacaoEscolhida + "(" + this.n1 + ")" + " = " + resultado;
      else if (this.operacaoEscolhida == "cos")
        this.operacoesFeitas[this.quantOperacoesFeitas] = this.operacaoEscolhida + "(" + this.n1 + ")" + " = " + resultado;
      else
        this.operacoesFeitas[this.quantOperacoesFeitas] = this.n1 + " " + this.operacaoEscolhida + " " +  this.n2 + " = " + resultado;
      
      //this.showToast(this.operacoesFeitas[this.quantOperacoesFeitas]);
      this.quantOperacoesFeitas += 1;

      this.n1 = resultado;
      this.tela = "" + resultado;
    }
  }

  setOperacao(op: string){
    //armazena qual operação será feita e guarda o valor da tela em n1
    this.operacao = true; //marca que uma operação foi escolhida
    this.operacaoEscolhida = op; //guarda a operação
    this.n1 = +this.tela; //guarda o valor da tela em n1
    this.tela = ""; //apaga a tela

    if(op == "sin" || op == "cos")
      this.calcula();
  }

  operacaoSelecionada(op: string){
    this.showAlert(op);
  }

  showAlert(texto: string) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: texto,
      buttons: ['OK']
    });
    alert.present();
  }

  showToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  pi(){
    this.tela = ""+ Math.PI;
  }


  //funcoes da calculadora

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

  sin(n: number): number{
    return Math.sin(n);
  }

  cos(n: number): number{
    return Math.cos(n);
  }
}