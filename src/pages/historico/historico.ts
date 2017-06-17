import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';


@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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

}
