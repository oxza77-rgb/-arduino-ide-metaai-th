export class SerialAIDoctor {
  analyze(lines: string[]) {
    const text = lines.join('\n');
    if (text.includes('nan') || text.includes('-127')) return 'เซ็นเซอร์อาจหลวมหรือต่อผิดขา';
    if (text.match(/exit status 1/)) return 'พอร์ต COM ถูกใช้อยู่ ลองปิด Serial Monitor แล้วอัปโหลดใหม่';
    return 'ข้อมูลดูปกติ';
  }
}