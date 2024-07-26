import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Exemplo
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string

   get imagePath() {
     return '../../assets/users/' + this.avatar;
   }

  onSelectUser() {}
  
  
  // Exemplo de inputSignals
  // avatar = input.required<string>()
  // name = input.required<string>()
  // imagePath = computed(() => '../../assets/users/' + this.avatar())
  
  // Exemplo com signals
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar)

  // Exemplo de uma função get
  // get imagePath() {
  //   return '../../assets/users/' + this.selectedUser().avatar;
  // }

  // Exemplo de evento utilizando signals
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }
}
