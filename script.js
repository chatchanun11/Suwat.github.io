let yesCount = 0;
let noCount = 0;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainContainer = document.getElementById('mainContainer');

yesButton.addEventListener('click', () => {
    yesCount++;
    if (yesCount === 1) {
        yesButton.innerText = "Yes?";
    } else if (yesCount === 2) {
        yesButton.innerText = "YES!!!!?";
    } else if (yesCount >= 3) {
        mainContainer.innerHTML = `
            <div class="video-container">
                <video autoplay loop muted>
                    <source src="https://media.tenor.com/sxW3phxns-YAAAAi/peach-goma.gif" type="video/mp4">
                </video>
                <h2>สุขสันต์วันเกิดนะ สุวัชรา</h2>
                <p>โตขึ้นอีกปีแล้ว ปีนี้คุณเก่งมากๆ ภูมิใจในตัวคุณนะครับ ขอให้ปีนี้คุณมีความสุขที่สุด และต่อๆไป ร่างกายแข็งแรง ไม่เจ็บไม่ป่วย และดื้อน้อยลงหน่อยนะ ฮ่าๆ สุดท้ายนี้ ขอให้คุณใช้ชีวิตให้มีความสุขอยากทำอะไรทำ เราพร้อมจะซัพพอร์ตคุณเสมอ</p>
            </div>
        `;
    }
});

noButton.addEventListener('click', () => {
    noCount++;
    if (noCount === 1) {
        noButton.innerText = "Are you sure?";
    } else if (noCount === 2) {
        noButton.innerText = "Think again";
    } else if (noCount === 3) {
        noButton.innerText = "Really not?";
    } else if (noCount === 4) {
        noButton.innerText = "Yes!!";
    } else if (noCount >= 5) {
        yesButton.style.transform = "scale(1.5)"; // ทำให้ปุ่ม Yes ใหญ่ขึ้น
        yesButton.style.transition = "transform 0.3s ease"; // เพิ่มการเปลี่ยนแปลงแบบเรียบ
    }
});
