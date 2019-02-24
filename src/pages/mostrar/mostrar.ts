import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  dato = "Holi jajaja con git pero ahora en rama test";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
    storage.get('titulo').then((val) => {
      this.dato = val;
    });
    
    console.log("Dato para mostrar y subir en git hub: ",this.dato);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

}
