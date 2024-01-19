import { Injectable, inject, signal } from '@angular/core';
import { User, UsersJsonResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //*Proipiedad para almacenar los usuarios
  public usersCollection: User[] = [];
  //* Declaramos la url, que es el JSON en assets
  private jsonUrl: string = 'assets/data/users.json';
  //*Injectamos Http client
  private http = inject(HttpClient);

  //* Propiedades para el paginado
  public currentPageSubject = signal(0);
  public nextPage = signal(0);
  public dataLength = signal(0);
  public actualPage = signal(0);
  public searchLength = signal(1);

  //* En el constructor de clase iniciamos la carga de todos los usuarios
  constructor() {
    this.getAllUsers();
  }

  //* Función para siguiente página
  getUsersForPage() {
    this.currentPageSubject.set(this.currentPageSubject() + 5);
    this.actualPage.set(this.actualPage() + 1);
    this.nextPage.set(this.currentPageSubject() + 5);
    this.http.get<UsersJsonResponse>(this.jsonUrl).subscribe((resp) => {
      this.usersCollection = resp.usuarios.slice(
        this.currentPageSubject(),
        this.nextPage()
      );
    });
  }
  //* Función para pagina anterior
  getUsersPreviousPage() {
    this.currentPageSubject.set(this.currentPageSubject() - 5);
    this.nextPage.set(this.currentPageSubject() + 5);
    this.actualPage.set(this.actualPage() - 1);
    this.http.get<UsersJsonResponse>(this.jsonUrl).subscribe((resp) => {
      this.usersCollection = resp.usuarios.slice(
        this.currentPageSubject(),
        this.nextPage()
      );
    });
  }

  //*Función para  filtrar strings en búsqueda
  private userMatchesSearchTerm(user: User, searchTerm: string): boolean {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchTermLowerCase) ||
      user.surname1.toLowerCase().includes(searchTermLowerCase) ||
      user.surname2.toLowerCase().includes(searchTermLowerCase) ||
      user.email.toLowerCase().includes(searchTermLowerCase)
    );
  }

  //* Función para obtener todos los usuarios
  getAllUsers() {
    //*Llámada HTTP
    this.http.get<UsersJsonResponse>(this.jsonUrl).subscribe((resp) => {
      this.dataLength.set(resp.usuarios.length / 5);
      return (this.usersCollection = resp.usuarios);
    });
  }

  //* Función para búsqueda de usuarios

  filterUsers(tag: string): void {
    if (tag.length === 0) return;
    this.http.get<UsersJsonResponse>(this.jsonUrl).subscribe((resp) => {
      this.usersCollection = resp.usuarios.filter(
        (user) => this.userMatchesSearchTerm(user, tag),


      );
      this.searchLength.set(this.usersCollection.length)
    });
    console.log(this.searchLength())
  }
}
