const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]



 const animateByLine = (ms) => {
    for (let index = 0; index < asciiHeart.length; index++) {
        const element = asciiHeart[index];
        setTimeout(() => {
            console.log(element);
        }, ms*index);
    }
}

    console.log(animateByLine(100)) 




    const animateByChart = (ms) => {
        let delay = 0;
    
        asciiHeart.forEach((line, lineIndex) => {
            line.split('').forEach((character, charIndex) => {
                setTimeout(() => {
                    process.stdout.write(character);
                    if (charIndex === line.length - 1) process.stdout.write("\n"); 
                }, delay);
                delay += ms; 
            });
        });
    };

    animateByChart(50);