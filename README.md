# Arduino IDE Meta AI Edition (TH)

    Fork ของ Arduino IDE 2.x ที่ฝัง Muse AI ไว้ใน IDE โดยตรง

    ## ฟีเจอร์ (14 รายการ)
    1. แผงข้าง Meta AI
    2. Auto-Error Fix
    3. อธิบายโค้ดทีละบรรทัด
    4. สร้างโค้ดจากภาษาไทย
    5. ปุ่มวิเคราะห์โค้ด
    6. ปุ่มปรับบอร์ดอัตโนมัติ
    7. แชทลอย
    8. Serial AI Doctor
    9. Auto-Select Board
    10. Library แนะนำ
    11. เมนูภาษาไทย 100%
    12. Voice command
    13. Voice Debug
    14. โหมดออฟไลน์ (โครง)

    ## วิธีติดตั้งสำหรับนักพัฒนา
    ```bash
    git clone https://github.com/arduino/arduino-ide.git
    cd arduino-ide
    # คัดลอกโฟลเดอร์ src/metaai จาก repo นี้ไปทับ
    yarn install
    yarn build
    ```

    License: AGPL-3.0 (ตาม Arduino) + MIT สำหรับส่วน MetaAI
