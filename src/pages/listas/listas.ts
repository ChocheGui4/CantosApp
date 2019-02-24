import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {
  list: any;
  items: any;


  dato = "Holi";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {

    storage.get('opcion').then((val) => {
      this.dato = val;
    });
    console.log("Dato de listas: ",this.dato);
    this.storage.get('nuevos').then((val) => {

      this.list = val;
    });


    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListasPage');
  }
  Regresar() {
    this.navCtrl.push("HomePage");
  }

  Mostrar() {
    this.storage.set('titulo',this.items.name);
    this.navCtrl.push("MostrarPage");
  }

  initializeItems() {

    this.items = this.list;



  }

  getItems(ev: any) {
    this.initializeItems();

    let val = ev.target.value;


    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    } else {
      console.log("Vacio");
    }
  }


}
