const animeCharacters = [
  {
    anime: "Kaguya-sama: Love is War",
    character: {
      name: "Ai Hayasaka",
      image: "./anime_characters/Ai_Hayasaka.jpg",
      desc: "A loyal and resourceful maid who assists Kaguya Shinomiya in her schemes.",
    },
  },
  {
    anime: "Chainsaw Man",
    character: {
      name: "Aki Hayakawa",
      image: "./anime_characters/Aki_Hayakawa.jpg",
      desc: "A Public Safety Devil Hunter who fights devils with a calm but vengeful resolve.",
    },
  },
  {
    anime: "Spy x Family",
    character: {
      name: "Anya Forger",
      image: "./anime_characters/Anya_Forger.jpg",
      desc: "An adopted telepath who brings chaos and heart to the Forger family.",
    },
  },
  {
    anime: "Mob Psycho 100",
    character: {
      name: "Arataka Reigen",
      image: "./anime_characters/Arataka_Reigen.jpg",
      desc: "A con artist turned self-proclaimed psychic, serving as Mob’s mentor with surprising wisdom.",
    },
  },
  {
    anime: "Attack on Titan",
    character: {
      name: "Armin Arlert",
      image: "./anime_characters/Armin_Arlert.jpg",
      desc: "A brilliant strategist with a gentle heart, who dreams of seeing the world beyond the walls.",
    },
  },
  {
    anime: "Fate/stay night",
    character: {
      name: "Artoria Pendragon",
      image: "./anime_characters/Artoria_Pendragon.jpg",
      desc: "Also known as Saber, the once and future king who fights with honor and resolve.",
    },
  },
  {
    anime: "Vinland Saga",
    character: {
      name: "Askeladd",
      image: "./anime_characters/Askeladd.jpg",
      desc: "A cunning and charismatic Viking leader with a hidden motive.",
    },
  },
  {
    anime: "Neon Genesis Evangelion",
    character: {
      name: "Asuka Langley Souryuu",
      image: "./anime_characters/Asuka_Langley_Souryuu.jpg",
      desc: "A fiery and prideful Eva pilot who hides her vulnerabilities behind arrogance.",
    },
  },
  {
    anime: "Kaguya-sama: Love is War",
    character: {
      name: "Chika Fujiwara",
      image: "./anime_characters/Chika_Fujiwara.jpg",
      desc: "A cheerful and unpredictable student council member with a knack for mischief.",
    },
  },
  {
    anime: "Chainsaw Man",
    character: {
      name: "Denji",
      image: "./anime_characters/Denji.jpg",
      desc: "A devil hunter with the power of Chainsaw Man, driven by simple dreams of a better life.",
    },
  },
  {
    anime: "Fullmetal Alchemist: Brotherhood",
    character: {
      name: "Edward Elric",
      image: "./anime_characters/Edward_Elric.jpg",
      desc: "The Fullmetal Alchemist, short in stature but unmatched in determination and skill.",
    },
  },
  {
    anime: "Re:Zero − Starting Life in Another World",
    character: {
      name: "Emilia",
      image: "./anime_characters/Emilia.jpg",
      desc: "A kind half-elf with silver hair who dreams of becoming a worthy ruler.",
    },
  },
  {
    anime: "Attack on Titan",
    character: {
      name: "Eren Yeager",
      image: "./anime_characters/Eren_Yeager.jpg",
      desc: "A passionate and determined fighter who seeks freedom at any cost.",
    },
  },
  {
    anime: "Attack on Titan",
    character: {
      name: "Erwin Smith",
      image: "./anime_characters/Erwin_Smith.jpg",
      desc: "The Survey Corps commander whose charisma and resolve inspire soldiers to march forward.",
    },
  },
  {
    anime: "Frieren: Beyond Journey’s End",
    character: {
      name: "Frieren",
      image: "./anime_characters/Frieren.jpg",
      desc: "An elven mage reflecting on her long life while seeking meaning after her party’s victory.",
    },
  },
  {
    anime: "Gintama",
    character: {
      name: "Gintoki Sakata",
      image: "./anime_characters/Gintoki_Sakata.jpg",
      desc: "A lazy samurai with a sweet tooth, hiding his sharp skills beneath a carefree demeanor.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Giyuu Tomioka",
      image: "./anime_characters/Giyuu_Tomioka.jpg",
      desc: "The stoic Water Hashira who values balance and justice.",
    },
  },
  {
    anime: "Hunter x Hunter",
    character: {
      name: "Gon Freecss",
      image: "./anime_characters/Gon_Freecss.jpg",
      desc: "A cheerful and determined boy searching for his father and adventure.",
    },
  },
  {
    anime: "Berserk",
    character: {
      name: "Guts",
      image: "./anime_characters/Guts.jpg",
      desc: "The Black Swordsman, a mercenary cursed to walk a dark path of survival.",
    },
  },
  {
    anime: "Oregairu",
    character: {
      name: "Hachiman Hikigaya",
      image: "./anime_characters/Hachiman_Hikigaya.jpg",
      desc: "A cynical high schooler with sharp insight into human relationships.",
    },
  },
  {
    anime: "Attack on Titan",
    character: {
      name: "Hange Zoe",
      image: "./anime_characters/Hange_Zoe.jpg",
      desc: "An eccentric researcher obsessed with studying Titans and scientific discovery.",
    },
  },
  {
    anime: "Hunter x Hunter",
    character: {
      name: "Hisoka Morow",
      image: "./anime_characters/Hisoka_Morow.jpg",
      desc: "A flamboyant and dangerous fighter who seeks thrilling opponents.",
    },
  },
  {
    anime: "Monogatari",
    character: {
      name: "Hitagi Senjougahara",
      image: "./anime_characters/Hitagi_Senjougahara.jpg",
      desc: "A sharp-tongued girl whose stoic exterior hides trauma and complexity.",
    },
  },
  {
    anime: "Bocchi the Rock!",
    character: {
      name: "Hitori Gotou",
      image: "./anime_characters/Hitori_Gotou.jpg",
      desc: "A shy but talented guitarist learning to find her voice and friends.",
    },
  },
  {
    anime: "Bleach",
    character: {
      name: "Ichigo Kurosaki",
      image: "./anime_characters/Ichigo_Kurosaki.jpg",
      desc: "A brave teen who becomes a Soul Reaper to protect his loved ones.",
    },
  },
  {
    anime: "Unknown",
    character: {
      name: "Ichigo",
      image: "./anime_characters/Ichigo.jpg",
      desc: "Character named Ichigo (multiple characters share this name). Update `anime` if you want a specific one.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Inosuke Hashibira",
      image: "./anime_characters/Inosuke_Hashibira.jpg",
      desc: "A wild, boar-masked fighter who rushes into battle on instinct.",
    },
  },
  {
    anime: "Naruto",
    character: {
      name: "Itachi Uchiha",
      image: "./anime_characters/Itachi_Uchiha.jpg",
      desc: "A tragic prodigy whose painful choices hide deeper motives.",
    },
  },
  {
    anime: "Quintessential Quintuplets",
    character: {
      name: "Itsuki Nakano",
      image: "./anime_characters/Itsuki_Nakano.jpg",
      desc: "The earnest and studious quintuplet who cares about self-improvement.",
    },
  },
  {
    anime: "My Hero Academia",
    character: {
      name: "Izuku Midoriya",
      image: "./anime_characters/Izuku_Midoriya.jpg",
      desc: "A determined hero-in-training who inherited One For All.",
    },
  },
  {
    anime: "Horimiya",
    character: {
      name: "Izumi Miyamura",
      image: "./anime_characters/Izumi_Miyamura.jpg",
      desc: "A kind, soft-spoken student with surprising outward style and warmth.",
    },
  },
  {
    anime: "The Legend of the Galactic Heroes",
    character: {
      name: "Jin-UI Seong",
      image: "./anime_characters/Jin-U_Seong.jpg",
      desc: "A military figure in a space opera full of politics and strategy.",
    },
  },
  {
    anime: "JoJo's Bizarre Adventure",
    character: {
      name: "Joseph Joestar",
      image: "./anime_characters/Joseph_Joestar.jpg",
      desc: "A witty Joestar who outsmarts foes with clever tricks and charm.",
    },
  },
  {
    anime: "JoJo's Bizarre Adventure",
    character: {
      name: "Jotaro Kujo",
      image: "./anime_characters/Joutarou_Kuujou.jpg",
      desc: "A stoic, powerful hero known for his Stand and unshakable resolve.",
    },
  },
  {
    anime: "Kaguya-sama: Love is War",
    character: {
      name: "Kaguya Shinomiya",
      image: "./anime_characters/Kaguya_Shinomiya.jpg",
      desc: "A brilliant student council vice president caught in romantic mind games.",
    },
  },
  {
    anime: "Naruto",
    character: {
      name: "Kakashi Hatake",
      image: "./anime_characters/Kakashi_Hatake.jpg",
      desc: "The Copy Ninja—laid-back mentor with a mysterious past and deep skill.",
    },
  },
  {
    anime: "Oshi no Ko",
    character: {
      name: "Kana Arima",
      image: "./anime_characters/Kana_Arima.jpg",
      desc: "An actress with drive and fierce talent navigating the entertainment world.",
    },
  },
  {
    anime: "My Hero Academia",
    character: {
      name: "Katsuki Bakugou",
      image: "./anime_characters/Katsuki_Bakugou.jpg",
      desc: "An explosive and proud rival whose drive pushes him to greatness.",
    },
  },
  {
    anime: "Tokyo Ghoul",
    character: {
      name: "Ken Kaneki",
      image: "./anime_characters/Ken_Kaneki.jpg",
      desc: "A student turned half-ghoul struggling between two worlds.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Kento Nanami",
      image: "./anime_characters/Kento_Nanami.jpg",
      desc: "A pragmatic sorcerer who treats exorcism with professional duty.",
    },
  },
  {
    anime: "Hunter x Hunter",
    character: {
      name: "Killua Zoldyck",
      image: "./anime_characters/Killua_Zoldyck.jpg",
      desc: "A former assassin who becomes a clever and loyal ally.",
    },
  },
  {
    anime: "Classroom of the Elite",
    character: {
      name: "Kiyotaka Ayanokouji",
      image: "./anime_characters/Kiyotaka_Ayanokouji.jpg",
      desc: "A calm, unassuming student hiding remarkable cunning.",
    },
  },
  {
    anime: "Monogatari",
    character: {
      name: "Koyomi Araragi",
      image: "./anime_characters/Koyomi_Araragi.jpg",
      desc: "A sarcastic yet caring protagonist who helps others with oddities.",
    },
  },
  {
    anime: "Hunter x Hunter",
    character: {
      name: "Kurapika",
      image: "./anime_characters/Kurapika.jpg",
      desc: "A determined avenger of the Kurta clan, skilled with chains.",
    },
  },
  {
    anime: "Steins;Gate",
    character: {
      name: "Kurisu Makise",
      image: "./anime_characters/Kurisu_Makise.jpg",
      desc: "A brilliant scientist involved in time-travel research—sharp and logical.",
    },
  },
  {
    anime: "The Disastrous Life of Saiki K.",
    character: {
      name: "Kusuo Saiki",
      image: "./anime_characters/Kusuo_Saiki.jpg",
      desc: "A powerful psychic teen who just wants a quiet, ordinary life.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Kyojuro Rengoku",
      image: "./anime_characters/Kyoujurou_Rengoku.jpg",
      desc: "A passionate Flame Hashira famed for optimism and formidable strength.",
    },
  },
  {
    anime: "Horimiya",
    character: {
      name: "Kyouko Hori",
      image: "./anime_characters/Kyouko_Hori.jpg",
      desc: "A bright and responsible girl who balances school and family life.",
    },
  },
  {
    anime: "Death Note",
    character: {
      name: "L Lawliet",
      image: "./anime_characters/L_Lawliet.jpg",
      desc: "An eccentric genius detective famous for uncanny deduction and quirks.",
    },
  },
  {
    anime: "Code Geass",
    character: {
      name: "Lelouch Lamperouge",
      image: "./anime_characters/Lelouch_Lamperouge.jpg",
      desc: "A tactical genius who uses Geass to pursue revolutionary goals.",
    },
  },
  {
    anime: "Attack on Titan",
    character: {
      name: "Levi Ackerman",
      image: "./anime_characters/Levi.jpg",
      desc: "A precise, ruthless soldier renowned for unparalleled combat skill.",
    },
  },
  {
    anime: "Death Note",
    character: {
      name: "Light Yagami",
      image: "./anime_characters/Light_Yagami.jpg",
      desc: "A brilliant student who pursues his own version of justice after finding the Death Note.",
    },
  },
  {
    anime: "One Piece",
    character: {
      name: "Monkey D. Luffy",
      image: "./anime_characters/Luffy_Monkey.jpg",
      desc: "A rubber-bodied pirate with a dream to become the Pirate King.",
    },
  },
  {
    anime: "Rascal Does Not Dream of Bunny Girl Senpai",
    character: {
      name: "Mai Sakurajima",
      image: "./anime_characters/Mai_Sakurajima.jpg",
      desc: "A calm actress affected by supernatural adolescence phenomena.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Maki Zenin",
      image: "./anime_characters/Maki_Zenin.jpg",
      desc: "A determined sorcerer from a cursed clan who relies on skill and will.",
    },
  },
  {
    anime: "Chainsaw Man",
    character: {
      name: "Makima",
      image: "./anime_characters/Makima.jpg",
      desc: "A composed, manipulative figure whose motives remain mysterious and dangerous.",
    },
  },
  {
    anime: "Made in Abyss",
    character: {
      name: "Maomao",
      image: "./anime_characters/Maomao.jpg",
      desc: "A curious researcher with a knack for medicine and study.",
    },
  },
  {
    anime: "My Dress-Up Darling",
    character: {
      name: "Marin Kitagawa",
      image: "./anime_characters/Marin_Kitagawa.jpg",
      desc: "A lively cosplayer who embraces creativity and friendship.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Megumi Fushiguro",
      image: "./anime_characters/Megumi_Fushiguro.jpg",
      desc: "A serious exorcist who fights with shadowy shikigami techniques.",
    },
  },
  {
    anime: "KonoSuba",
    character: {
      name: "Megumin",
      image: "./anime_characters/Megumin.jpg",
      desc: "An explosion-obsessed mage who casts one massive spell a day.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Mikasa Ackerman",
      image: "./anime_characters/Mikasa_Ackerman.jpg",
      desc: "A fiercely skilled warrior driven to protect her loved ones.",
    },
  },
  {
    anime: "Kaguya-sama: Love is War",
    character: {
      name: "Miko Iino",
      image: "./anime_characters/Miko_Iino.jpg",
      desc: "A principled student council member with strong convictions.",
    },
  },
  {
    anime: "Quintessential Quintuplets",
    character: {
      name: "Miku Nakano",
      image: "./anime_characters/Miku_Nakano.jpg",
      desc: "A quiet quintuplet who finds self-confidence through connection.",
    },
  },
  {
    anime: "Naruto",
    character: {
      name: "Naruto Uzumaki",
      image: "./anime_characters/Naruto_Uzumaki.jpg",
      desc: "A determined ninja who dreams of becoming Hokage and earning respect.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Nezuko Kamado",
      image: "./anime_characters/Nezuko_Kamado.jpg",
      desc: "A gentle demon who fiercely protects her brother and friends.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Nobara Kugisaki",
      image: "./anime_characters/Nobara_Kugisaki.jpg",
      desc: "A fierce and confident exorcist who values pride and friendship.",
    },
  },
  {
    anime: "Bungo Stray Dogs",
    character: {
      name: "Osamu Dazai",
      image: "./anime_characters/Osamu_Dazai.jpg",
      desc: "A brilliant but eccentric detective with a darkly humorous streak.",
    },
  },
  {
    anime: "Chainsaw Man",
    character: {
      name: "Power",
      image: "./anime_characters/Power.jpg",
      desc: "A chaotic Blood Fiend with a mischievous grin and fierce loyalty.",
    },
  },
  {
    anime: "Re:Zero − Starting Life in Another World",
    character: {
      name: "Rem",
      image: "./anime_characters/Rem.jpg",
      desc: "A devoted maid whose bravery and love are pivotal to the story.",
    },
  },
  {
    anime: "That Time I Got Reincarnated as a Slime",
    character: {
      name: "Rimuru Tempest",
      image: "./anime_characters/Rimuru_Tempest.jpg",
      desc: "A friendly and powerful slime who builds a new nation of monsters and allies.",
    },
  },
  {
    anime: "Fate/stay night",
    character: {
      name: "Rin Tohsaka",
      image: "./anime_characters/Rin_Tohsaka.jpg",
      desc: "A capable mage with a sharp mind and strong resolve.",
    },
  },
  {
    anime: "Steins;Gate",
    character: {
      name: "Rintarou Okabe",
      image: "./anime_characters/Rintarou_Okabe.jpg",
      desc: "A self-styled mad scientist who fights to protect his friends across timelines.",
    },
  },
  {
    anime: "One Piece",
    character: {
      name: "Nico Robin",
      image: "./anime_characters/Robin_Nico.jpg",
      desc: "An archaeologist of the Straw Hats who seeks truth in lost histories.",
    },
  },
  {
    anime: "Mushoku Tensei",
    character: {
      name: "Roxy Migurdia",
      image: "./anime_characters/Roxy_Migurdia.jpg",
      desc: "A skilled mage and supportive mentor figure.",
    },
  },
  {
    anime: "Fullmetal Alchemist: Brotherhood",
    character: {
      name: "Roy Mustang",
      image: "./anime_characters/Roy_Mustang.jpg",
      desc: "The Flame Alchemist—ambitious, cunning, and fiercely protective of his nation.",
    },
  },
  {
    anime: "One Punch Man",
    character: {
      name: "Saitama",
      image: "./anime_characters/Saitama.jpg",
      desc: "A hero who can defeat any foe with one punch, searching for meaning.",
    },
  },
  {
    anime: "Fate/stay night",
    character: {
      name: "Sakura Matou",
      image: "./anime_characters/Sakura_Matou.jpg",
      desc: "A kind-hearted girl entangled in dark secrets, whose quiet strength shapes her fate.",
    },
  },
  {
    anime: "One Piece",
    character: {
      name: "Sanji",
      image: "./anime_characters/Sanji.jpg",
      desc: "The Straw Hats’ suave cook, driven by his code of chivalry and unmatched kicking skills.",
    },
  },
  {
    anime: "Naruto",
    character: {
      name: "Sasuke Uchiha",
      image: "./anime_characters/Sasuke_Uchiha.jpg",
      desc: "A prodigious ninja burdened by revenge, torn between bonds and vengeance.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Satoru Gojo",
      image: "./anime_characters/Satoru_Gojo.jpg",
      desc: "The strongest sorcerer, laid-back yet terrifying in battle, wielding limitless power.",
    },
  },
  {
    anime: "Dr. Stone",
    character: {
      name: "Senkuu Ishigami",
      image: "./anime_characters/Senkuu_Ishigami.jpg",
      desc: "A genius scientist who revives civilization with brains, science, and persistence.",
    },
  },
  {
    anime: "Mob Psycho 100",
    character: {
      name: "Shigeo Kageyama",
      image: "./anime_characters/Shigeo_Kageyama.jpg",
      desc: "A quiet boy with overwhelming psychic power, seeking a normal, honest life.",
    },
  },
  {
    anime: "Monogatari",
    character: {
      name: "Shinobu Oshino",
      image: "./anime_characters/Shinobu_Oshino.jpg",
      desc: "An ancient vampire with a childlike form, witty and mysterious.",
    },
  },
  {
    anime: "A Silent Voice",
    character: {
      name: "Shouko Nishimiya",
      image: "./anime_characters/Shouko_Nishimiya.jpg",
      desc: "A gentle, deaf girl whose kindness and resilience inspire redemption.",
    },
  },
  {
    anime: "My Hero Academia",
    character: {
      name: "Shouto Todoroki",
      image: "./anime_characters/Shouto_Todoroki.jpg",
      desc: "A prodigy hero with ice and fire powers, carrying the weight of family conflict.",
    },
  },
  {
    anime: "Haikyuu!!",
    character: {
      name: "Shouyou Hinata",
      image: "./anime_characters/Shouyou_Hinata.jpg",
      desc: "The tiny giant of Karasuno, fueled by energy, speed, and unyielding determination.",
    },
  },
  {
    anime: "Cowboy Bebop",
    character: {
      name: "Spike Spiegel",
      image: "./anime_characters/Spike_Spiegel.jpg",
      desc: "A cool and laid-back bounty hunter haunted by his past and lost love.",
    },
  },
  {
    anime: "Re:Zero",
    character: {
      name: "Subaru Natsuki",
      image: "./anime_characters/Subaru_Natsuki.jpg",
      desc: "A modern-day boy trapped in a fantasy world, cursed with endless returns from death.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Sukuna",
      image: "./anime_characters/Sukuna.jpg",
      desc: "The King of Curses, a ruthless demon whose power terrifies sorcerers.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Tanjirou Kamado",
      image: "./anime_characters/Tanjirou_Kamado.jpg",
      desc: "A compassionate swordsman fighting demons to restore his sister’s humanity.",
    },
  },
  {
    anime: "Vinland Saga",
    character: {
      name: "Thorfinn Karlsefni",
      image: "./anime_characters/Thorfinn_Karlsefni.jpg",
      desc: "A Viking warrior consumed by vengeance, later searching for true purpose.",
    },
  },
  {
    anime: "Haikyuu!!",
    character: {
      name: "Tobio Kageyama",
      image: "./anime_characters/Tobio_Kageyama.jpg",
      desc: "The 'King of the Court,' a setter striving to balance skill with teamwork.",
    },
  },
  {
    anime: "Violet Evergarden",
    character: {
      name: "Violet Evergarden",
      image: "./anime_characters/Violet_Evergarden.jpg",
      desc: "A former soldier learning emotions and humanity through the power of letters.",
    },
  },
  {
    anime: "Noragami",
    character: {
      name: "Yato",
      image: "./anime_characters/Yato.jpg",
      desc: "A stray god who dreams of fame, hiding a dark and bloody past.",
    },
  },
  {
    anime: "Spy x Family",
    character: {
      name: "Yor Forger",
      image: "./anime_characters/Yor_Forger.jpg",
      desc: "A sweet-hearted woman living a double life as a deadly assassin.",
    },
  },
  {
    anime: "Oregairu",
    character: {
      name: "Yuu Ishigami",
      image: "./anime_characters/Yuu_Ishigami.jpg",
      desc: "A cynical loner with hidden loyalty, finding growth among friends.",
    },
  },
  {
    anime: "Jujutsu Kaisen",
    character: {
      name: "Yuuji Itadori",
      image: "./anime_characters/Yuuji_Itadori.jpg",
      desc: "A kind-hearted boy who becomes Sukuna’s vessel, fighting curses with grit.",
    },
  },
  {
    anime: "Demon Slayer",
    character: {
      name: "Zenitsu Agatsuma",
      image: "./anime_characters/Zenitsu_Agatsuma.jpg",
      desc: "A cowardly yet fierce swordsman, unleashing lightning-fast strikes when unconscious.",
    },
  },
  {
    anime: "Darling in the Franxx",
    character: {
      name: "Zero Two",
      image: "./anime_characters/Zero_Two.jpg",
      desc: "The mysterious ‘Partner Killer,’ torn between humanity and her monstrous nature.",
    },
  },
  {
    anime: "One Piece",
    character: {
      name: "Zoro Roronoa",
      image: "./anime_characters/Zoro_Roronoa.jpg",
      desc: "The Straw Hats’ swordsman, fiercely loyal and aiming to be the world’s greatest.",
    },
  },
];

window.onload = () => {
  randomCharacter();
};

const enterButton = document.getElementById("enterBtn");
const newButton = document.querySelector("#newBtn");
const input = document.querySelector("#input");
const charName = document.querySelector("#charName");
const result = document.querySelector("#result");
const hint1 = document.querySelector("#hint1");
const hint2 = document.querySelector("#hint2");
const titleHint = document.querySelector("#animeTitle");
const charHint = document.querySelector("#charDesc");
const blurImage = document.getElementById("blurImage");
const list = document.getElementById("list")


let guesses = 10;
let blurVal = 12;
let currentCharacter;

function randomCharacter() {
  const randomIndex = Math.floor(Math.random() * animeCharacters.length);
  blurImage.setAttribute("src", animeCharacters[randomIndex].character.image);
  currentCharacter = animeCharacters[randomIndex];
}

function resetRound() {
  randomCharacter();
  charName.textContent = "";
  result.textContent = "";
  list.innerHTML = ""
  guesses = 10;
  blurVal = 12;
  blurImage.style.filter = `blur(${blurVal}px)`;
  hint1.classList.add("hidden");
  hint2.classList.add("hidden");
  document.getElementById("guesses").textContent = guesses; // update UI
}

function guessHandle() {
  const guess = input.value.trim().toLowerCase();

  if (guess === "") {
    result.classList.remove("right-answer");
    result.classList.remove("wrong-answer");
    result.textContent = "Please enter a valid guess";
    alert("Please enter something in the textbox")
    setTimeout(()=> {result.textContent = ""},5000)
    return;
  }

  const answer = currentCharacter.character.name.toLowerCase().split(" ");
  const isCorrect = answer.includes(guess);

  if (isCorrect) {
    result.classList.remove("wrong-answer");
    result.classList.add("right-answer");
    result.textContent = "✅ Correct!";
    charName.textContent = currentCharacter.character.name;
    blurImage.style.filter = "blur(0px)";
    setTimeout(resetRound, 3000);
  } else {
    let li  = document.createElement("li")
    li.textContent = input.value
    list.appendChild(li)

    guesses--;
    document.getElementById("guesses").textContent = guesses; // update UI
    blurVal -= 1.2;
    result.classList.remove("right-answer");
    result.classList.add("wrong-answer");
    result.textContent = `❌ Wrong — ${guesses} left`;
    blurImage.style.filter = `blur(${blurVal}px)`;

    if (guesses === 7) {
      hint2.classList.remove("hidden"); 
      charHint.textContent = currentCharacter.character.desc;
    }

    if (guesses === 3) {
      hint1.classList.remove("hidden"); 
      titleHint.textContent = currentCharacter.anime;
    }

    if (guesses === 0) {
      result.textContent = "⛔ Out of guesses!";
      charName.textContent = currentCharacter.character.name;
      blurImage.style.filter = "blur(0px)";
      setTimeout(resetRound, 3000);
    }
  }

  input.value = "";
}

enterButton.addEventListener("click", guessHandle);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") guessHandle();
});

newButton.addEventListener("click", () => {
  charName.textContent = currentCharacter.character.name;
  blurImage.style.filter = "blur(0px)";
  setTimeout(resetRound, 3000);
});
