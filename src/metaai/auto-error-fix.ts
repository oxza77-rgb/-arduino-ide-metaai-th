import { injectable, inject } from 'inversify';
import { OutputChannelManager } from '@theia/output/lib/browser/output-channel';

@injectable()
export class AutoErrorFix {
  @inject(OutputChannelManager) protected output: OutputChannelManager;
  
  init() {
    // ดักจับ output ของ Arduino CLI
    const channel = this.output.getChannel('Arduino');
    channel.onOutputAdded(({text}) => {
      if (text.includes('exit status 1') || text.includes('error:')) {
        this.showFixButton(text);
      }
    });
  }
  
  showFixButton(errorText: string) {
    // สร้างปุ่มลอยใน IDE
    const btn = document.createElement('button');
    btn.textContent = 'ให้ Muse แก้ให้เลย';
    btn.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;background:#0084ff;color:white;padding:10px;border:none;border-radius:8px';
    btn.onclick = async () => {
      const code = window['getCurrentCode']?.() || '';
      const prompt = `ช่วยแก้ error Arduino นี้

โค้ด:
${code}

Error:
${errorText}`;
      window.open(`https://meta.ai/?q=${encodeURIComponent(prompt)}`, '_blank');
      btn.remove();
    };
    document.body.appendChild(btn);
    setTimeout(()=>btn.remove(), 15000);
  }
}