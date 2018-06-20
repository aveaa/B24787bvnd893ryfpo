const Discord = require ("discord.js");
const embedColor = require("./embedcolor.json");
const fs = require("fs");
const botconfig = require("./botconfig.json");
var bot = new Discord.Client();
const cmds = require('./cmds_strings.json');
const cmd = require('./cmd_strings.json');
bot.commands = new Discord.Collection();



fs.readdir("./commands/", (err,files) =>{


    if(err) console.log(err);



let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0) {
    console.log("Couldn't find commands");
    return;
}

jsfile.forEach((f, i) =>{
    let props = require (`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
      
});

});

bot.on("ready", () => {
    bot.user.setStatus('dnd')
    var servers = bot.guilds.array().map(g => g.name).join('.');
    var channel = bot.channels.get('448546642375868436');
    channel.sendMessage("Бот `Helper` снова в сети");
    console.log('Бот готов');
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Привет бот") {
        message.channel.sendMessage("Здарова,как жизнь?");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Бот,что делаешь?") {
        message.channel.sendMessage("Подчиняюсь твоим командам");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Бот,как дела") {
        message.channel.sendMessage("Как сметана бела");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Инфа") {
        var embed = new Discord.RichEmbed()
        .setTitle("Бот Helper")
        .addField("Дата создания","28/11/2017")
	.addField("Создатель", "<@336807875605168128>")
        .setThumbnail("https://equity.guru/wp-content/uploads/2018/02/Powers-up.gif")
	.setFooter("Helper bot ©2018|Все права защищены")
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Бот,помоги") {
        message.channel.sendMessage(message.author.toString() + ",мой префикс `.+`");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Слово") {
        var embed = new Discord.RichEmbed()
        .addField("Количество букв", Math.floor(Math.random() * 12 + 1  ))
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == ".+faqActive") {
        var embed = new Discord.RichEmbed()
        .setTitle("Роль Active Member 🏆")
        .setDescription("Автоматически выдаётся ботом за проявление активности.")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++gameword") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игра в слово 🎲")
        .setDescription("Будет выпадать случайное число,которое обозначает количество букв в слове или аббревиатуре.Вам будет нужно его подобрать.")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++game") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игры с ботом 🎮")
        .addField("Игра в Слово", "Будет выпадать случайное число,которое обозначает количество букв в слове или аббревиатуре.Вам будет нужно его подобрать.")
        .addField("Игра в Вычисление", "Вам будет дана цепочка чисел с арифметическими действиями(Пример короче) Вам нужно будет его решить.")
        .addField("Подробнее узнать о каждой игре можно с помощью следующих команд:", ".+gameword\n.+gamemath\n.+gamenum-подробная информация об игре Ряд чисел")
        .setFooter("Модуль:Games Helper bot 2018 ©")
        .setColor(embedColor.color)
        .setThumbnail("http://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg")        
        message.channel.send(embed);
    }
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Вычисление старт") {
        var embed = new Discord.RichEmbed()
        .setTitle("Укажите уровень сложности")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Вычисление=лёгкий") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=лёгкий")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Вычисление=средний") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=средний")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
	
    if (message.content == "Вычисление=сложный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=сложный")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Вычисление=максимальный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=максимальный")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Вычисление=экстерн") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=экстерн")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Пример=лёгкий") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=лёгкий")
        .addField("Число", Math.floor(Math.random() * 12 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 16 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 20 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 8 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 10 + 1  ))
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Пример=средний") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=средний")
        .addField("Число", Math.floor(Math.random() * 24 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 32 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 40 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 10 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 20 + 1  ))
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Пример=сложный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=сложный")
        .addField("Число", Math.floor(Math.random() * 48 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 64 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 80 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 40 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 30 + 1  ))
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Пример=максимальный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=максимальный")
        .addField("Число", Math.floor(Math.random() * 620 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 980 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 120 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 80 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 500 + 1  ))
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Пример=экстерн") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=экстерн")
        .addField("Число", Math.floor(Math.random() * 620 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 980 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 120 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 80 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 500 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 14 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 1000 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 10000 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 5 + 1  ))
        .addField("Прибавить к полученному числу сумму следующих чисел", "Сумма чисел")
        .addField("Число 1", Math.floor(Math.random() * 25000 + 1  ))
        .addField("И число 2", Math.floor(Math.random() * 15000 + 1  ))
        .setColor(embedColor.color)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++gamenum") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игра случайное число.")
        .setDescription("Бот будет давать случайное число.Вам нужно будет продолжить ряд,по его типу, т.е если число чётное-значит и ряд будет чётным,тоже самой и с нечётным числом.")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "Стартовое число") {
        var embed = new Discord.RichEmbed()
        .setDescription(Math.floor(Math.random() * 1500 + 1  ))
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++rules") {
        var embed = new Discord.RichEmbed()
        .setTitle("```Правила нашего сервера```")
        .setDescription("```ЗАПРЕЩЕНО:\n1.Оскорбления,мат,завуалированный мат.\n2.Выяснение отношений (кто прав,кто нет,кто хороший,а кто плохой и т.д).\n3.Спамить,флудить,бессмысленная и не носящая толка информация.(Исключением является чат #spam, но не злоупотреблять.)\n4.Рекламные сообщения:приглашения на сервер, ссылки на сторонние источники и т.п\n5.Давать команды ботам,кроме #commands\n6.Капс(писать заглавными буквами).\n7.Просьба о помощи в игре и т.д.  Для этого есть система личных сообщений.\n8.Злоупотреблять командами ботов.\n9.Плагиатить других участников сервера.\n10.Неуважение к Администрации. Обсуждение действий Администрации и Модераторов.```")
        .setFooter("С уважением, Администрация TOP-GAMERS")
        .setColor(0x40ff00)
        .setThumbnail("http://www.21stcenturymom.com/wp-content/uploads/2017/06/rules-1752536_960_720.png")
        message.author.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++rules") {
        message.channel.sendMessage(message.author.toString() + ",проверь свои личные сообщения! :wink: ");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++roles") {
        var embed = new Discord.RichEmbed()
        .setTitle("Роли нашего сервера")
        .setDescription("```1.Гость. Автоматически выдаётся ботом.\n2.Посетитель. Выдаётся проявляющим активность участникам\n3.BOTS. Выдаётся соответственно только ботам\n4.Group  🔑. Выдаётся определенным участникам (Не выпрашивать!)\n5.Girl. Выдаётся участникам,которые являются представителями женского пола\n6. Moderator. Модераторы\n7.Admin. Администратор сервера.\n8.Deputy Owner. Заместитель владельца.\n9.Active Member 🏆(Активный участник). Выдаётся автоматически ботом за 25 уровень\n10.Watching(Наблюдение). Наблюдающие за чистотой и порядком сервера```")
        .setFooter("Администрация TOP-GAMERS")
        .setColor(0x40ff00)
        .setThumbnail("http://roles.com.br/wp-content/uploads/2014/02/Roles-Logo-Home.png")
       message.author.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++roles") {
        message.channel.sendMessage(message.author.toString() + ",чекни ЛС :wink: ");
    }
});

var usage = "`++hangman <ID канала> <ваша фраза>`\n`Пример: ++hangman 368845035560763402 pelmeni`"
var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var games = [];

var stages = [`\`\`\`
/---|
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   😲 ~ Вы проиграли,игра окончена.
|  /|\\
|  / \\
|
\`\`\`
`];

function generateMessage(phrase, guesses) {
	var s = "";
	for(var i = 0; i < phrase.length; i++) {
		if(phrase[i] == ' ')
			s += " ";
		else {
			var c = phrase[i];
			if(guesses.indexOf(c) == -1)
				c = "\\_";
			s += "__" + c + "__ ";
		}
	}
	return s;
}

function nextLetter(message, index, word) {
    message.react(letters[index]).then(r => {
		index++;
		if(index < letters.length) {
			if(index == 13) {
				message.channel.send(generateMessage(word, [])).then(m => {
					games.push({
						stage: 0,
						msg0: message,
						msg1: m,
						phrase: word,
						guesses: []
					});
					nextLetter(m, index);
				});
			} else {
				nextLetter(message, index, word);
			}
		}
	});
}

bot.on('messageReactionAdd', (reaction, user) => {
	var msg = reaction.message;
	if(!user.bot) {
		for(var i = 0; i < games.length; i++) {
			var game = games[i];
			if((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
				var letter = unicode[letters.indexOf(reaction.emoji.name)];
				
				reaction.fetchUsers().then(usrs => {
					var reactors = usrs.array();
					var remove_next = function(index) {
						if(index < reactors.length)
							reaction.remove(reactors[index]).then(() => remove_next(index + 1));
					};
					
					remove_next(0);
				});
				
				if(game.guesses.indexOf(letter) == -1) {
					game.guesses.push(letter);
					if(game.phrase.indexOf(letter) == -1) {
						game.stage ++;
						game.msg0.edit(stages[game.stage]);
					} else {
						var sik = true;
						for(var j = 0; j < game.phrase.length; j++) {
							var c = game.phrase[j];
							if(c != ' ' && game.guesses.indexOf(c) == -1) {
								sik = false;
							}
						}
						
						if(sik) {
                            game.msg0.edit(stages[game.stage].replace("😲", "🙂 ~ Верно!Игра окончена"));
                        }

                        
						game.msg1.edit(generateMessage(game.phrase, game.guesses));
					}
				}
			}
			games[i] = game;
		}
	}
});

bot.on('message', msg => {
    if(msg.content.startsWith(".+hangman")) {
        var words = msg.content.split('\n')[0].split(' ');
        if(words.length < 2) {
            msg.reply(usage);
        } else {
            var channel = bot.channels.find('id', words[1]);
			var word = words.slice(2).join(' ').toLowerCase().replace(/[^a-z\s:]/g, '');
            if(channel != null) {
                channel.send(stages[0]).then(m => {
                    nextLetter(m, 0, word);
                });
            } else {
                msg.reply("Не могу найти канал с указанным идентификатором `" + words[1] + "` его не существует на данном сервере! \n" + usage);
            }
        }
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    if (message.content.match(/привет/i)) 
    {
        message.react("👋")
    };
    
});



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let rresponses = ["Приветсвую тебя", "Добрый вечер!", "Здарова", "Привет,как дела?", "Как прошёл день?","Привет!", "Пока", ":wave:", "Ну привет", "Здравствуй", "Привет привет...Как твоё ничего?"];
    let rresult = Math.floor((Math.random() * rresponses.length));

    
    if (message.content.match(/всем привет/i)) 
    {
       message.channel.send(rresponses[rresult]);
    };
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let responses = ["Приветсвую тебя", "Добрый вечер!", "Здарова", "Привет,как дела?", "Как прошёл день?","Привет!", "Пока", ":wave:", "Ну привет", "Здравствуй", "Привет привет...Как твоё ничего?"];
    let result = Math.floor((Math.random() * responses.length));

    if (message.content.match(/привет всем/i)) 
    {
       message.channel.send(responses[result]);
    };
   
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let gamewords = ["аббревиатура", "аванс", "абсорбер", "авиация", "арбуз", "апельсин", "абстракция", "алоэ", "альтернатива", "амёба", "баловать", "барабан", "баскетбол", "бандит", "битва", "баталия", "батискаф", "банк","вакансия", "валюта","валентность", "вахтёр","влияние", "вата","вальс", "ванилин","вандализм", "варка","габариты", "гармония","Германия", "гитара","газ", "газель","Гватемала", "гармон","гениальность", "гильдия","гол", "город","гость", "гостеприимство","гель", "дыня","дача", "длина","длительность", "дар","двор", "дёготь","Дарвин", "деградация","деньги", "ЕС","ехидно", "ехать","Ессентуки", "ёрш","ёлка", "ёмкость","жаба", "жадность","жарка", "желток","железо", "жонглёр","замок", "зависть","злоба", "зной","зависимость", "зыбкость","завязывать", "идти","идол", "инкарнация","изгиб", "изготовление","изделие", "известь","йогурт", "камера","контроль", "кинетика","какао", "какаду","кабель", "лапша","Ролтон", "лекарство","лечение", "летать","лето", "Малайзия","мель", "мел","мощность", "маникюр","месть", "мелочь","мнение", "ночь","надзор", "национальность","наглость", "небрежность","надёжность", "обмен","оберег", "ободрить","окружность", "обгон","парашют", "пар","печень", "пари","пот", "печь","паразит", "прелесть","речь", "рестарт","реплика", "радиоактивность","роль", "рана","разбудить", "разговор","радость", "радуга","сайгак", "сероводород","ссылка", "совесть","счастье", "театр","трата", "темя","телятина", "творить","усталость", "уж","умение", "увеличение","уверенность", "уговор","фараон", "фея","фермент", "физика","фишка", "филе","хата", "хрен","хан", "ханство","холера", "хлорид","хломиномонада", "хобот","хомяк", "цапля","церковь", "уена","ценность", "цель","центр", "центрифуга","цех", "чечня","череп", "человек","честь", "честность","чек", "чемпион","шарф", "шалость","шея", "шов","шелест", "шип","шлем", "шлёп","штурм", "штурвал","щавель", "щёгол","щит", "щука","эвакуатор", "эвкалипт","энергия", "юла","юг", "юный","якорь", "ясность","яркость", "я","ящер",];
    let resultword = Math.floor((Math.random() * gamewords.length));
    let interval =  Math.floor(Math.random() * 5 + 1  )
    
    if(message.content.startsWith(".+start")){
        let modRole = message.guild.roles.find("name", "Game_mod");
        if(message.member.roles.has(modRole.id)) {
        message.channel.send(`Пусть стартовым словом будет **${gamewords[resultword]}**`)
        } else {
            message.reply("У Вас недостаточно прав,обратитесь к **роли** ``Game_mod``")
        }
    };
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content.match(/здаров/i)) 
    {
       message.react("👋")
    };

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let byeresponse = ["Давай 👏", "Удачи", "Пока", "Всего-хорошего", "До завтра!",  message.author.username + ",спокойной ночи 💤 (если сейчас ночь)", "До встречи!"];
    let byeresult = Math.floor((Math.random() * byeresponse.length)); 

    if (message.content.match(/всем пока/i)) 
    {
       message.channel.send(byeresponse[byeresult]);
    };
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let byeresponse = ["Давай 👏", "Удачи", "Пока", "Всего-хорошего", "До завтра!",  message.author.username + ",спокойной ночи 💤 (если сейчас ночь)", "До встречи!"];
    let byeresult = Math.floor((Math.random() * byeresponse.length)); 

    if (message.content.match(/пока всем/i)) 
    {
       message.channel.send(byeresponse[byeresult]);
    };
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let byeresponse = ["🖖", "💤", "👋", "👏"];
    let byeresult = Math.floor((Math.random() * byeresponse.length)); 

    if (message.content.match(/пока/i)) 
    {
       message.react(byeresponse[byeresult]);
    };
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content.match(/хай/i)) 
    {
       message.react("👋")
    };

});
const config = require('./config.json');
const roles = config.rTD;

//bot.on("message", message => {
//	if(message.author.bot) return;
//	if(message.channel.type === "dm") return;
//  function cRole() {
//    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//    let colors = ["#a6a6a6","#ffcccc","#ff66ff","#cc99ff","#ccffff","#ccff99","#ff9933","#595959","#66ff33","#cc6699","#003366","#336699","#002266","#993333","#999966","#333399","#660066","#336600","#0000e6","#4d1300","#ffe6cc","#ffdab3","#ffce99","#ffb566","#ffa94d","#ff9c33","#ff901a","#ff8400","#e67700","#b35c00","#994f00","#804200","#992600","#602040","#250e1a","#999900","#339966","#133926","#0d261a","#67cb9b","#54c48e","#267326","#66cc66","#808000","#ff9900","#99003d","#ff4d94","#6b00b3","#2e004d","#00cc00","#0080ff","#3d3d5c","#7575a3","#ff0000","#cc0000","#ff4d4d","#19334d","#29a3a3","#5bd7d7","#db4dff","#cccc00","#802000","#cc3300","#993300","#00ff55","#1aff1a","#666600","#e600e6","#b300b3","#ff80ff","#990099","#595959","#0000cc","#3333ff","#0066cc","#c653c6","#9494b8","#0033cc","#993366","#705c66","#4d3399","#993333","#994d33","#998033","#809933","#33994d","#333399","#803399","#ff9933","#33ff99","#ff3333","#33ff33","#3366ff","#6633ff","#33ccff","#1a8cff","#ffc61a"]
//    let colres = Math.floor((Math.random() * colors.length)); 
//    roles.forEach((role) => {
 //     let theRole = message.guild.roles.find("name", role);
  //    theRole.edit({color: random}).catch(e => {
 //       return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
  //    });
//    });
//  }
//  var mRole = message.guild.roles.find('name', "ZONTIk")
//  var embed = new Discord.RichEmbed()
//  .setAuthor(message.author.username)
//  .setColor("#ff0066")
 // .setTitle("Функция радужной роли")
//  .addField("Частота смены цвета", "5000")
//  .setTimestamp()
//  .setFooter("RR Function handler")
//  if(message.content.startsWith("Бот,включи радужную роль с частотой в")) {
//    let mRole = message.guild.roles.find('name', "ZONTIk")
//    if(message.member.roles.has(mRole.id)) {
 //       let intr = args.join(" ")
 //   setInterval(() => { cRole(); }, intr);
//    
//  } else {
//    message.reply(`у Вас недостаточно прав.`);
//  }
//} else

//if(message.content.startsWith("Бот,отключи радужную роль")) {
//  if(message.member.roles.has(mRole.id)) {
//  message.channel.sendMessage("Функция радужной роли отключена.");
//  setTimeout(() => { console.log(process.exit(0)); }, 300);
//} else {
//  message.reply(`у Вас недостаточно прав.`);
 // }
//}
//});

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
        if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const siteWords = ["http://", "https://"];
const Role = message.guild.roles.find(`name`, 'Mute')
if(siteWords.some(word => message.content.match(word)) ) {
  message.member.addRole(Role)
  message.delete()
}
});

bot.on("message", message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
    let mRole = message.guild.roles.find('name', "ZONTIk")
    if(message.content.startsWith("++rall:stop")) {
        if(message.member.roles.has(mRole.id)) {
        message.channel.sendMessage("Функция радужной роли отключена.");
        setTimeout(() => { console.log(process.exit(0)); }, 300);
      } else {
        message.reply(`у Вас недостаточно прав.`);
        }
      }
})
bot.on("message", async message => {
	if(message.channel.type === "dm") return;
    if(message.author.bot) return;
const filter = [/превет/i, /привт/i, /пожалуста/i, /пажалуйста/i, /сколька/i, /кагд/i, /довно/i, /чтото/i, /ктото/i, /почемуто/i, /зачемто/i, /менут/i, /ришил/i, /пака/i, /минемум/i, /оранджевый/i, /коекто/i, /фиалетовый/i, /грамата/i, /граматно/i, /отенки/i ,/дабавить/i, /крута/i, /хател/i, /менятся/i, /здел/i, /остановитса/i, /сибе/i, /што/i, /хто/i, /воопще/i, /вапще/i, /дла/i, /праверки/i, /счем/i, /скем/i, /пач/i, /щя/i, /шя/i, /щто/i, /обьявления/i, /падъезд/i, /пасажир/i, /позал/i, /удол/i, /тса/i, /всети/i, /активо/i, /проста/i, /не можно/i, /класн/i, /цто/i, /симва/i, /апрос/i, /чят/i, /дастал/i, /упомину/i, /дискорт/i, /харош/i, /ща/i, /помоч/i, /вап/i, /апас/i, /чо/i, /чё/i, /панят/i, /сматр/i, /пригло/i, /девач/i, /комманды/i, /даеш/i, /естествено/i, /ешё/i, /ищё/i, /чево/i, /чиво/i, /заприщены/i, /запрещенны/i, /сылку/i, /силку/i, /поседи/i, /принцепе/i, /прекрепил/i, /чтоли/i, /чтали/i, /юнность/i, /дивя/i, /тристо/i, /адин/i, /четыри/i, /пж/i, /нуда/i, /сроботал/i, /астав/i, /видио/i, /видил/i, /дич/i, /временый/i, /тварит/i, /вазм/i, /придл/i, /панимаешь/i, /пастоянно/i, /постаянно/i, /постояно/i, /тирпеть/i, /восимь/i, /девить/i, /мусарку/i, /проффессионалом/i, /нечайно/i, /ничайно"/i, /"ничяяно/i, /нечяяно/i, /пашёл/i, /пошо/i, /наверно/i, /видиш/i, /скоко/i, /раскажите/i, /ешо/i];
if(filter.some(word => message.content.match(word)) ) {
  
  let filterch = message.guild.channels.find('name', "filter");
  let embed = new Discord.RichEmbed()
  embed.setAuthor(message.author.username, message.author.displayAvatarURL)
  embed.setTitle("Допущены ошибки в словах.")
  embed.setDescription(message.content)
  embed.setColor(0x0ffff)
  embed.setTimestamp(message.createdAt)
  embed.setFooter("Words Filter")
  filterch.send({embed: embed}).then(message.delete())
}
});

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
        if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const enBadw = [/fack/i, /fuuck/i, /cock/i, /tits/i, /bitc/i, /fuck/i, /gay/i, /sucker/i, /hick/i, /pussy/i, /bich/i, /stup/i, /dick/i, /penis/i, /prosti/i,/tart/i, /fuc/i, /noob/i, /fck/i, /schmuck/i, /paddel/i, /cur/i, /autism/i, /chmo/i, /eb/i, /sosi/i, /xu/i, /nyb/i, /xyesos/i, /lox/i, /typo/i, /sex/i, /секас/i, /секс/i, /sekas/i, /gom/i, /gnid/i, /piska/i, /sis/i, /bomz/i, /boln/i, /aytist/i, /dayn/i, /loh/i, /swinia/i, /plun/i];

const Role = message.guild.roles.find(`name`, 'Mute')
if(enBadw.some(word => message.content.match(word)) ) {
  message.member.addRole(Role)
  message.delete()
  
}
});

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
    if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const filter = [/а/i, /б/i, /в/i, /г/i, /д/i, /е/i, /ё/i, /ж/i, /з/i, /и/i, /й/i, /к/i, /л/i, /м/i, /н/i, /о/i, /п/i, /р/i, /с/i, /т/i, /у/i, /ф/i, /х/i, /ц/i, /ч/i, /ш/i, /щ/i, /ъ/i, /ы/i, /ь/i, /э/i, /ю/i, /я/i]
if(message.channel.id == '414534158761852938') {
if(filter.some(word => message.content.match(word)) ) {
  message.delete()
}
}
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(`++mcmds`)) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        var findcmds = args[0];
        if(!findcmds) return message.reply("Вы не указали названия модуля")
        var embed = new Discord.RichEmbed(cmds[findcmds])
        .setColor(0x0ffff)
        try {
            message.channel.send(embed) 
        } catch (error) {
            console.error("Error!O,o")
            message.channel.send("Данная команда не найдена")
        }
    }
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(`++cmd`)){
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        var findcmd = args[0];
        if(!findcmd) return message.reply("укажите название команды.")
        var embed = new Discord.RichEmbed(cmd[findcmd])
        .setColor(0x0ffff)
        try {
            message.channel.send(embed) 
        } catch (error) {
            console.error("Error!O,o")
            message.channel.send("Данная команда не найдена")
        }
        
    } 
})

bot.login(process.env.TOKEN);
