export async function thaiToCode(thaiPrompt: string, board: string = 'UNO R4 WiFi') {
  const fullPrompt = `เขียนโค้ด Arduino สำหรับบอร์ด ${board} ตามคำสั่งภาษาไทยนี้: "${thaiPrompt}". ใส่คอมเมนต์ภาษาไทยทุกบรรทัด`;
  // เรียก Muse
  return fetch('https://meta.ai/api/generate', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({prompt: fullPrompt, model: 'muse-spark'})
  }).then(r=>r.text()).catch(()=>`// ตัวอย่าง: ${thaiPrompt}
void setup(){}
void loop(){}`);
}