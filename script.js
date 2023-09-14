const startDate = new Date('2021-09-01T00:00:00+00:00').getTime();
const endDate = new Date('2025-06-15T23:59:59+00:00').getTime();
const now = Date.now();

const progress = (now - startDate) / (endDate - startDate);
const progressBar = generateProgressBar(progress);

function generateProgressBar(progress) {
    const progressBarCapacity = 30;
    const passedProgressBarIndex = parseInt(progress * progressBarCapacity);
    const progressBar = '█'.repeat(passedProgressBarIndex) + '▁'.repeat(progressBarCapacity - passedProgressBarIndex);
    return `{ ${progressBar} }`;
}

const readme = `\
<h1 align="center"> Hello There 👋 </h1>

<p align="center">
  <a href="https://www.linkedin.com/in/Tony-Callaghan/">
    <img src="https://img.shields.io/badge/-%20Tony%20Callaghan-0072b1?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/Tony-Callaghan/" alt="Linkedin Badge">
  </a>
  <a href="mailto:a.tc.callaghan@gmail.com">
    <img src="https://img.shields.io/badge/-a.tc.callaghan@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:a.tc.callaghan@gmail.com" alt="Gmail Badge">
  </a>
  <a href="https://hellotony.me">
    <img src="https://img.shields.io/badge/-HelloTony.me-22333d?style=flat&logo=nodered&logoColor=43f0c7&link=https://hellotony.me" alt="Website Badge">
  </a>
</p>

- I'm currently a 3<sup>rd</sup> Computer Science & Software Engineering student in Maynooth University. 
- I'm looking for internship opportunities in 2024 as part of my course. 
- Please check out my [previous experience](https://hellotony.me/Docs/Tony_Callaghan_CV.pdf).

---

<p align="center">
⏳ Degree progress: ${progressBar} ${(progress * 100).toFixed(2)} % 🎓
</p>

---

☝️ Updated on ${new Date().toUTCString()} ⏰

![Progress Bar CI](https://github.com/TonyCallaghan/TonyCallaghan/workflows/Progress%20Bar%20CI/badge.svg)
`;

console.log(readme);
