$(function() {
    const A1A2 = [
        { en: "Apple", ua: "Яблуко" },
        { en: "Dog", ua: "Собака" },
        { en: "House", ua: "Будинок" },
        { en: "Car", ua: "Автомобіль" },
        { en: "Book", ua: "Книга" },
        { en: "Chair", ua: "Стілець" },
        { en: "Sun", ua: "Сонце" },
        { en: "Water", ua: "Вода" },
        { en: "Friend", ua: "Друг" },
        { en: "School", ua: "Школа" }
    ];
    const B1B2 = [
        { en: "Challenge", ua: "Виклик" },
        { en: "Decision", ua: "Рішення" },
        { en: "Environment", ua: "Довкілля" },
        { en: "Opportunity", ua: "Можливість" },
        { en: "Experience", ua: "Досвід" },
        { en: "Achieve", ua: "Досягати" },
        { en: "Behavior", ua: "Поведінка" },
        { en: "Improve", ua: "Покращувати" },
        { en: "Solution", ua: "Рішення (проблеми)" },
        { en: "Success", ua: "Успіх" }
    ];
    const C1 = [
        { en: "Ambiguous", ua: "Двозначний" },
        { en: "Consequence", ua: "Наслідок" },
        { en: "Justification", ua: "Виправдання" },
        { en: "Phenomenon", ua: "Явище" },
        { en: "Resilient", ua: "Стійкий" },
        { en: "Sophisticated", ua: "Витончений" },
        { en: "Notion", ua: "Поняття" },
        { en: "Obligation", ua: "Зобов'язання" },
        { en: "Substantial", ua: "Суттєвий" },
        { en: "Undermine", ua: "Підривати" }
    ];
    
    
    const card = $('.card'),
        counter = $('.counter');
        input = $('.translation'),
        corrCEl = $('.correct'),
        incorrCEl = $('.incorrect'),
        difficult = $('input[name="lvl"]'),
        windowBlock = $('.difficulty'),
        windowDifficult = $('.choise-block'),
        selectLvl = $('.select');

    let randW, 
        currentC = 0,
        correctC = 0,
        incorrectC = 0,
        currentW;

    function chooseDifficult() {
        windowBlock.css('visibility', 'visible');
        windowBlock.css('opacity', '1');
        windowDifficult.css('transform', 'translateY(40%)');
    
        difficult.on('change', function() {
            if (this.value === 'A1-A2') {
                randW = randWF(A1A2);
            } else if (this.value === 'B1-B2') {
                randW = randWF(B1B2);
            } else if (this.value === 'C1') {
                randW = randWF(C1);
            }

            reset();
            nextW();
        });
    }

    function reset() {
        currentC = 0;
        correctC = 0;
        incorrectC = 0;
        corrCEl.text(`Correct: ${correctC}`);
        incorrCEl.text(`Incorrect: ${incorrectC}`);
        counter.text(`${currentC + 1} / 10`);
        input.val('');
        difficult.prop('checked', false);
        windowBlock.css('visibility', 'hidden');
        windowBlock.css('opacity', '0');
        windowDifficult.css('transform', 'translateY(-130%)');
    }

    selectLvl.on('click', () => {
        chooseDifficult();
    });
    
    function randWF(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function show() {
        const totalWords = randW.length;
        const percentage = correctC / totalWords * 100;
        const modal = $('.modal');
        const results = $('.results');
        modal.css('visibility', 'visible');
        modal.css('opacity', '1');
        results.css('transform', 'translateY(40%)');   
        $('#res').text(`Percentage of correct answers: ${percentage.toFixed(3)}%`);
        $('.try-again').on('click', () => {
            modal.css('visibility', 'hidden');
            modal.css('opacity', '0');
            results.css('transform', 'translateY(-130%)');
            currentC = 0;
            correctC = 0;
            incorrectC = 0;
            corrCEl.text(correctC);
            incorrCEl.text(incorrectC);
            counter.html(`${currentC + 1} / 10`);
            input.val('');
            chooseDifficult();
        });
    }

    function nextW() {
        if (currentC < 10) {
            currentW = randW[currentC];
            card.html(currentW.en); 
            counter.html(`${currentC + 1} / 10`);
            input.val('');
        } else {
            show();
        }
    }

    let flag = true;
    card.on('click', () => {
        if (flag) {
            card.text(currentW.ua);
        } else {
            card.text(currentW.en);
        }

        flag = !flag;
    });

    $('.next').on('click', (event) => {
        event.preventDefault();
        currentC++;
        nextW();
    });

    $('.back').on('click', (event) => {
        event.preventDefault();
        if (currentC > 0) {
            currentC--;
            nextW();
        }
    });

    input.on('keypress', (event) => {
        if (currentC < 10) {
            if (event.key === "Enter") {
                const userTranslation = input.val().trim();
                if (userTranslation.toLowerCase() === currentW.ua.toLowerCase()) {
                    correctC++;
                } else {
                    incorrectC++;
                }
                corrCEl.text(correctC);
                incorrCEl.text(incorrectC);
                currentC++;
                nextW();
            }
        }
    });

    nextW();
});
