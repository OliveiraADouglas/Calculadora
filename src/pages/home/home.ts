import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController} from 'ionic-angular';

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
  numeroPi: string = "3.1415926";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }

  insereDigito(n: string){
    if (this.tela == "" && n == "."){
      // se a tela estiver vazia e um ponto for inserido
      this.tela = "0";
      this.decimal = true;
      // this.showToast("decimal true tela vazia");
    }

    else if (this.tela == "" && n == "0"){return } //se a tela estiver vazia e o zero for inserido

    else if (!this.decimal && n == "."){
      this.decimal = true;
      // this.showToast("decimal true");
    }

    else if (this.decimal && n == "."){return }

    this.tela = this.tela + n;

    // if(!this.operacao){
    //   //coloca tela em n1
    //   this.n1 = +this.tela;
    // }
    // else{
    //   //coloca tela em n2
    //   this.n2 = +this.tela;
    // }

    this.showToast(this.tela);
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
        resultado = add(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "-"){
        resultado = sub(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "*"){
        resultado = mul(this.n1, this.n2);
      }
      else if(this.operacaoEscolhida == "/"){
        if (this.n2 == 0) //trata a divisão por zero
          this.showToast("Impossível dividir por 0");
        else
          resultado = div(this.n1, this.n2);
      }
      this.n1 = resultado;
      this.tela = "" + resultado;
      this.showToast(this.n1 + this.operacaoEscolhida + this.n2 + " = " + resultado);
    }
  }

  setOperacao(op: string){
    //armazena qual operação será feita e guarda o valor da tela em n1

    this.operacao = true; //marca que uma operação foi escolhida
    this.operacaoEscolhida = op; //guarda a operação
    this.n1 = +this.tela; //guarda o valor da tela em n1
    this.tela = ""; //apaga a tela
  }

  showToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  pi(){
    this.tela = this.numeroPi;
  }
}
