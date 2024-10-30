let span = document.querySelector('span')
const wordList = ['Developer', 'YouTuber', 'Teacher', 'Student'];


function execute(wordList, element) {

    let chIndex = 0;
    let wordListIndex = 0;
    let reverseType = false;
    let skip = 0;

    setInterval(() => {

        if (skip) {
            skip--;
            return
        }

        if (!reverseType) {
            skip = 2
            element.innerText += wordList[wordListIndex][chIndex++];
        } else {
            element.innerText = wordList[wordListIndex].slice(0, element.innerText.length - 1);
            chIndex--;
        }

        if (chIndex === wordList[wordListIndex].length) {
            skip = 5;
            reverseType = true;
        }


        if (chIndex === 0) {
            reverseType = false;
            wordListIndex++;
        }

        if (wordListIndex == wordList.length) {
            wordListIndex = 0;
        }

        console.log('kk')

    }, 100)

}


execute(wordList, span);