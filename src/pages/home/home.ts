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
  decimal: boolean = false;
  tela: string = "";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }

  insereDigito(n: string){
    if (!this.decimal && n == "."){
      this.decimal = true;
      this.showToast("decimal true");
    }
    else if (this.tela == "" && n == "."){
      this.tela = "0";
      this.decimal = true;
      this.showToast("decimal true");
    }
    else if (this.decimal && n == "."){return }

    this.tela = this.tela + n;

    if(!this.operacao){
      //coloca tela em n1
    }
    else{
      //coloca tela em n2
    }

    this.showToast(this.tela);
  }

  limpaTela(){
    this.tela = "";
    this.decimal = false;
    //setOperacao(false);
  }


  calcula(){
  }

  setOperacao(stat: boolean){
    this.operacao = stat;
  }

  showToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }
}
