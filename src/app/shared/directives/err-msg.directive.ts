import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrMsgDirective implements OnInit {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  // propiedad que captura la propiedad privada del constructor
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string) {
    // this.htmlElement.nativeElement.innerHTML = valor;
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor === true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private element: ElementRef<HTMLElement>) {
    // element.nativeElement.style.color = 'red';
    this.htmlElement = element;
  }

  // activa los metodos en el renderizado del componente
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
