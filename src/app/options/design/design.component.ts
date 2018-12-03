import { Component, OnInit } from '@angular/core';
import { Storage } from '../../_storage/storage.service';
import { fontList, colors, customFontWeight } from '../../_shared/lists/lists';

@Component({
  selector: 'options-design',
  templateUrl: 'design.component.html'
})
export class OptionsDesignComponent implements OnInit {
  fonts = fontList;
  fontWeights = customFontWeight;
  colors = colors;
  currentFont: string;
  currentWeight: number;

  constructor(public settings: Storage) {
  }

  ngOnInit() {
    this.getFont();
  }

  saveAll() {
    this.settings.setAll(this.settings.config);
  }

  getFont() {
    let f = this.fonts.find(x => x.id === this.settings.config.design.font).family;
    let w = this.fonts.find(x => x.id === this.settings.config.design.font).weight;
    this.currentFont = '"' + f + '"';
    this.currentWeight = w;
  }

  setFont(font: string) {
    return '"' + font + '"';
  }

  setColors(bg: string, fg: string) {
    this.settings.config.design.background = bg;
    this.settings.config.design.foreground = fg;
  }

}
