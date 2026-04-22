import React from 'react';
import { AbstractViewContribution, Widget } from '@theia/core/lib/browser';

export class MetaAIWidget extends Widget {
  constructor() {
    super();
    this.id = 'metaai-view';
    this.title.label = 'Meta AI';
    this.title.iconClass = 'fa fa-paper-plane';
    this.node.innerHTML = `
      <div style="padding:8px;display:flex;flex-direction:column;height:100%">
        <div id="chat" style="flex:1;overflow:auto;font-family:monospace"></div>
        <textarea id="input" placeholder="ถาม Muse เป็นภาษาไทย..." style="height:60px"></textarea>
        <button id="send">ส่ง</button>
      </div>`;
    this.node.querySelector('#send')!.addEventListener('click', () => this.send());
  }
  async send() {
    const input = this.node.querySelector('#input') as HTMLTextAreaElement;
    const chat = this.node.querySelector('#chat')!;
    const q = input.value;
    chat.innerHTML += `<div><b>คุณ:</b> ${q}</div>`;
    // เรียก Muse ผ่าน meta.ai
    const resp = await fetch('https://meta.ai/api/muse', {method:'POST', body:JSON.stringify({prompt:q})}).catch(()=>null);
    const ans = resp ? await resp.text() : 'เชื่อมต่อ Muse... (demo)';
    chat.innerHTML += `<div><b>Muse:</b> ${ans}</div>`;
    input.value='';
  }
}

export class MetaAIContribution extends AbstractViewContribution<MetaAIWidget> {
  constructor(){ super({widgetId:'metaai-view', widgetName:'Meta AI', defaultWidgetOptions:{area:'right'}, toggleCommandId:'metaai:toggle'}); }
}