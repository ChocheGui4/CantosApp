import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list1 = [{ name: "1. Mensajeros" },
  { name: "2. Bienaventurado" },
  { name: "3. Escalándo peldaños" },
  { name: "4. Sigue a Dios" },
  { name: "5. La dulce presencia" },
  {name: "6. Te vengo a decir"},
  {name: "7. Al fin soy feliz"},
  {name: "8. Tenemos poder"},
  {name: "9. Si le crees a Dios"}]

  list2 = [{ name: "1. Allá en el cielo" },
  { name: "2. Si hoy" },
  { name: "3. Bendíceme" },
  { name: "4. Nuevo amanecer" }]
  constructor(public navCtrl: NavController,
  public storage: Storage) {

  }
  Pasar1(){
    this.storage.set('opcion', 'Cantos');
    this.storage.set('nuevos',this.list1);
    this.navCtrl.push("ListasPage");
  }
  Pasar2(){
    this.storage.set('opcion', 'Coritos');
    this.storage.set('nuevos',this.list2);
    this.navCtrl.push("ListasPage");
  }

}
