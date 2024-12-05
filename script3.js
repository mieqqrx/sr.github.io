$(function() {
    const dictionary = [
        { en: "Apple", ua: "Яблуко" },
        { en: "Car", ua: "Автомобіль" },
        { en: "Family", ua: "Сім'я" },
        { en: "Fish", ua: "Риба" },
        { en: "Smile", ua: "Посмішка" },
        { en: "Tree", ua: "Дерево" },
        { en: "Sun", ua: "Сонце" },
        { en: "Cat", ua: "Кіт" },
        { en: "Food", ua: "Їжа" },
        { en: "Home", ua: "Дім" },
        { en: "Friend", ua: "Друг" },
        { en: "Book", ua: "Книга" },
        { en: "Water", ua: "Вода" },
        { en: "Love", ua: "Любов" },
        { en: "Dog", ua: "Собака" },
        { en: "School", ua: "Школа" },
        { en: "Door", ua: "Двері" },
        { en: "Window", ua: "Вікно" },
        { en: "Garden", ua: "Сад" },
        { en: "Bird", ua: "Птах" },
        { en: "Baby", ua: "Дитина" },
        { en: "Bottle", ua: "Пляшка" },
        { en: "Chair", ua: "Стілець" },
        { en: "Table", ua: "Стіл" },
        { en: "Happy", ua: "Щасливий" },
        { en: "Hello", ua: "Привіт" },
        { en: "Goodbye", ua: "Пака" },
        { en: "Yes", ua: "Так" },
        { en: "No", ua: "Ні" },
        { en: "Please", ua: "Пж" },
        { en: "Thank you", ua: "Дякую" },
        { en: "Sorry", ua: "Вибачте" },
        { en: "House", ua: "Будинок" },
        { en: "Mother", ua: "Мати" },
        { en: "Father", ua: "Батько" },
        { en: "Sister", ua: "Сестра" },
        { en: "Brother", ua: "Брат" },
        { en: "Teacher", ua: "Вчитель" },
        { en: "Student", ua: "Учень" },
        { en: "Pen", ua: "Ручка" },
        { en: "Pencil", ua: "Олівець" },
        { en: "Paper", ua: "Папір" },
        { en: "Bag", ua: "Сумка" },
        { en: "Time", ua: "Час" },
        { en: "Money", ua: "Гроші" },
        { en: "Computer", ua: "Комп'ютер" },
        { en: "Phone", ua: "Телефон" },
        { en: "Shirt", ua: "Сорочка" },
        { en: "Dress", ua: "Сукня" },
        { en: "Shoe", ua: "Черевик" },
        { en: "Hat", ua: "Капелюх" },
        { en: "Bread", ua: "Хліб" },
        { en: "Cheese", ua: "Сир" },
        { en: "Milk", ua: "Молоко" },
        { en: "Egg", ua: "Яйце" },
        { en: "Butter", ua: "Масло" },
        { en: "Cake", ua: "Торт" },
        { en: "Juice", ua: "Сік" },
        { en: "Coffee", ua: "Кава" },
        { en: "Tea", ua: "Чай" },
        { en: "Soup", ua: "Суп" },
        { en: "Banana", ua: "Банан" },
        { en: "Orange", ua: "Апельсин" },
        { en: "Strawberry", ua: "Полуниця" },
        { en: "Potato", ua: "Картопля" },
        { en: "Tomato", ua: "Помідор" },
        { en: "Onion", ua: "Цибуля" },
        { en: "Bike", ua: "Велосипед" },
        { en: "Bus", ua: "Автобус" },
        { en: "Train", ua: "Поїзд" },
        { en: "Plane", ua: "Літак" },
        { en: "Ship", ua: "Корабель" },
        { en: "Street", ua: "Вулиця" },
        { en: "City", ua: "Місто" },
        { en: "Country", ua: "Країна" },
        { en: "Sea", ua: "Море" },
        { en: "River", ua: "Річка" },
        { en: "Mountain", ua: "Гора" },
        { en: "Sky", ua: "Небо" },
        { en: "Star", ua: "Зірка" },
        { en: "Moon", ua: "Місяць" },
        { en: "Night", ua: "Ніч" },
        { en: "Day", ua: "День" },
        { en: "Week", ua: "Тиждень" },
        { en: "Month", ua: "Місяць" },
        { en: "Year", ua: "Рік" },
        { en: "Morning", ua: "Ранок" },
        { en: "Afternoon", ua: "День" },
        { en: "Evening", ua: "Вечір" },
        { en: "Bed", ua: "Ліжко" },
        { en: "Dream", ua: "Сон" },
        { en: "Sleep", ua: "Спати" },
        { en: "Child", ua: "Дитина" },
        { en: "Doctor", ua: "Лікар" },
        { en: "Nurse", ua: "Медсестра" },
        { en: "Hospital", ua: "Лікарня" },
        { en: "Fire", ua: "Вогонь" },
        { en: "Police", ua: "Поліція" },
        { en: "Job", ua: "Робота" },
        { en: "Office", ua: "Офіс" },
        { en: "Market", ua: "Ринок" },
        { en: "Store", ua: "Магазин" },
        { en: "Shop", ua: "Крамниця" },
        { en: "Work", ua: "Працювати" }
    ];
    
    const card = $('.card'),
        counter = $('.counter');
    let input = $('.translation'),
        corrCEl = $('.correct'),
        incorrCEl = $('.incorrect'),
        randW = randWF(dictionary), 
        currentC = 0,
        correctC = 0,
        incorrectC = 0,
        currentW;

    function randWF(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function show() {
        const totalWords = randW.length / 20;
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
