import { LightningElement, track } from 'lwc';

export default class Contact extends LightningElement {
  pieceOptions = ['Almirah', 'Door', 'Table', 'Chair', 'Study Table', 'Custom Piece'];

  @track formName = '';
  @track formPhone = '';
  @track formPiece = 'Almirah';
  @track formMessage = '';
  @track submitted = false;

  handleNameChange(event) {
    this.formName = event.target.value;
  }

  handlePhoneChange(event) {
    this.formPhone = event.target.value;
  }

  handlePieceChange(event) {
    this.formPiece = event.target.value;
  }

  handleMessageChange(event) {
    this.formMessage = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submitted = true;
  }
}
