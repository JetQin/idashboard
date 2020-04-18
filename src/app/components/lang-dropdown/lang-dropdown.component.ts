import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-dropdown',
  templateUrl: './lang-dropdown.component.html',
  styleUrls: ['./lang-dropdown.component.scss']
})
export class LangDropdownComponent implements OnInit {

  public locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];
  public languageLabels = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en-US': 'English',
    'pt-BR': 'Português',
  };
  public languageIcons = {
    'zh-CN': '🇨🇳',
    'zh-TW': '🇭🇰',
    'en-US': '🇺🇸',
    'pt-BR': '🇧🇷',
  };

  constructor() { }

  ngOnInit() {
  }

  change(value: boolean): void {
    console.log(value);
  }

}
