import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContactService {

  readonly CONTACT_PATH = 'contact';

  contacts: Observable<Contact[]>;

  constructor(private httpClient: HttpClient) {
  }

  private reloadContact(): void {
    this.contacts = this.httpClient.get<Contact[]>(URL + this.CONTACT_PATH);
  }

  getAll(): Observable<Contact[]> {
    if (!this.contacts) {
      this.reloadContact();
    }
    return this.contacts;
  }

  add(contact: Contact): void {
    this.httpClient
      .post(URL + this.CONTACT_PATH, contact)
      .subscribe(_ => this.reloadContact());
  }

// TODO: complete
  remove(childContact: Contact) {
  }

  edit(contact: Contact) {
  }
}

const URL = 'http://localhost:8090/';
