import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'esn-context-menu',
  templateUrl: 'esn-context-menu.component.html',
  styleUrls: ['esn-context-menu.scss']
})
export class EsnContextMenuComponent implements OnInit {
  @ViewChild('contextmenu') contextmenu: ElementRef
  @Input() data
  constructor(private render: Renderer2) { }
  ngOnInit(): void {
    this.rightClick()
    this.leftClick()
  }
  route(address) {
    window.open(address)
  }
  rightClick() {
    let contextMenu = document.getElementById("context-menu");
    let t = this.render
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      t.setStyle(contextMenu, 'left', e.clientX + 'px')
      t.setStyle(contextMenu, 'top', e.clientY + 'px')
      t.setStyle(contextMenu, 'visibility', 'visible')
    });
  }

  leftClick() {
    let contextMenu = document.getElementById("context-menu");
    let t = this.render
    document.addEventListener("click", function (e) {
      e.preventDefault();
      t.setStyle(contextMenu, 'visibility', 'hidden')
    });
  }
}