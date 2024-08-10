import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../mock/dummy-users';
import { User } from '../domain/user';

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
  @Input({required: true}) user?: User
  @Output() selectedUser = new EventEmitter<string>()
  
  get imagePath() {
    return '../../assets/users/' + this.user?.avatar;
  }
  
  onSelectUser() {
    this.selectedUser.emit(this.user?.id)
  }
  
  // Exemplo de outputSignal
  // selectedUser = output<string>()
  
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
