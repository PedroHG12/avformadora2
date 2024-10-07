import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  cep: string = '';
  resultado: any = null;

  constructor(private http: HttpClient) {}

  buscarCEP() {
    if (this.cep) {
      this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe(
          (data) => this.resultado = data,
          (error) => console.error(error)
        );
    }
  }
}
