const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait..."

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = [
        "images/rock.png",
        "images/hand-paper.png",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImages[randomNumber];

      let cpuVal = ["R", "P", "S"][randomNumber];
      let userVal = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        SS: "Draw",
        PP: "Draw",
        RP: "Cpu",
        PR: "User",
        SR: "Cpu",
        RS: "User",
        PS: "Cpu",
        SP: "User",
      };

      let outComeValue = outcomes[userVal + cpuVal];
      console.log(outComeValue);

      result.textContent =
        userVal === cpuVal ? "Match Draw" : `${outComeValue} Won!!!`;
    }, 2500);
  });
});
