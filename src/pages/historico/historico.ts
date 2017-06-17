import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { List } from 'ionic-angular';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  operacoesFeitas: string[] = ['ola','hello'];
  lop: List;

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
